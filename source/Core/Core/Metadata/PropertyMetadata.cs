/*
 * Copyright 2014 Dominick Baier, Brock Allen
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using IdentityManager.Extensions;

namespace IdentityManager
{
    public class PropertyMetadata
    {
        public string Type { get; set; }
        public string Name { get; set; }
        public PropertyDataType DataType { get; set; }
        public bool Required { get; set; }

        internal void Validate()
        {
            if (String.IsNullOrWhiteSpace(Type)) throw new InvalidOperationException("PropertyMetadata Type is not assigned");
            if (String.IsNullOrWhiteSpace(Name)) throw new InvalidOperationException("PropertyMetadata Name is not assigned");
        }

        public static PropertyMetadata FromFunctions<TContainer, TProperty>(
            string type,
            Func<TContainer, TProperty> get,
            Func<TContainer, TProperty, IdentityManagerResult> set,
            string name = null,
            PropertyDataType? dataType = null,
            bool? required = null)
        {
            if (String.IsNullOrWhiteSpace(type)) throw new ArgumentNullException("type");
            if (get == null) throw new ArgumentNullException("get");
            if (set == null) throw new ArgumentNullException("set");

            var meta = new ExpressionPropertyMetadata<TContainer, TProperty>(type, get, set);
            if (name != null) meta.Name = name;
            if (dataType != null) meta.DataType = dataType.Value;
            if (required != null) meta.Required = required.Value;

            return meta;
        }

        public static PropertyMetadata FromProperty<TContainer>(
            Expression<Func<TContainer, object>> expression,
            string type = null,
            string name = null,
            PropertyDataType? dataType = null,
            bool? required = null)
        {
            if (expression == null) throw new ArgumentNullException("expression");

            if (expression.Body.NodeType != ExpressionType.MemberAccess)
            {
                throw new ArgumentException("Expression must be a member property expression.");
            }

            MemberExpression memberExpression = (MemberExpression)expression.Body;
            PropertyInfo property = memberExpression.Member as PropertyInfo;
            if (property == null)
            {
                throw new ArgumentException("Expression must be a member property expression.");
            }

            return FromPropertyInfo(property, type, name, dataType, required);
        }

        public static PropertyMetadata FromPropertyName<T>(
            string propertyName,
            string type = null,
            string name = null,
            PropertyDataType? dataType = null,
            bool? required = null)
        {
            if (String.IsNullOrWhiteSpace(propertyName)) throw new ArgumentNullException("propertyName");

            var property = typeof(T).GetProperty(propertyName);
            if (property == null)
            {
                throw new ArgumentException(propertyName + " is invalid property on " + typeof(T).FullName);
            }

            return FromPropertyInfo(property, type, name, dataType, required);
        }

        public static PropertyMetadata FromPropertyInfo(
            PropertyInfo property,
            string type = null,
            string name = null,
            PropertyDataType? dataType = null,
            bool? required = null)
        {
            if (property == null) throw new ArgumentNullException("property");

            if (!property.IsValidAsPropertyMetadata())
            {
                throw new InvalidOperationException(property.Name + " is an invalid property for use as PropertyMetadata");
            }

            return new ReflectedPropertyMetadata(property)
            {
                Type = type ?? property.Name,
                Name = name ?? property.GetName(),
                DataType = dataType ?? property.GetPropertyDataType(),
                Required = required ?? property.IsRequired(),
            };
        }

        public static IEnumerable<PropertyMetadata> FromType<T>()
        {
            return FromType(typeof(T), new string[0]);
        }

        public static IEnumerable<PropertyMetadata> FromType<T>(params string[] propertiesToExclude)
        {
            return FromType(typeof(T), propertiesToExclude);
        }

        public static IEnumerable<PropertyMetadata> FromType<T>(params Expression<Func<T, object>>[] propertyExpressionsToExclude)
        {
            List<string> propertiesToExclude = new List<string>();
            foreach (var expression in propertyExpressionsToExclude)
            {
                if (expression.Body.NodeType != ExpressionType.MemberAccess)
                {
                    throw new ArgumentException("Expression must be a member property expression.");
                }

                MemberExpression memberExpression = (MemberExpression)expression.Body;
                PropertyInfo property = memberExpression.Member as PropertyInfo;
                if (property == null)
                {
                    throw new ArgumentException("Expression must be a member property expression.");
                }

                propertiesToExclude.Add(property.Name);
            }

            return FromType(typeof(T), propertiesToExclude.ToArray());
        }

        public static IEnumerable<PropertyMetadata> FromType(Type type, params string[] propertiesToExclude)
        {
            if (type == null) throw new ArgumentNullException("type");

            List<PropertyMetadata> props = new List<PropertyMetadata>();

            var properties = type.GetProperties(BindingFlags.Public | BindingFlags.Instance | BindingFlags.IgnoreCase | BindingFlags.DeclaredOnly);
            foreach (var property in properties)
            {
                if (!propertiesToExclude.Contains(property.Name, StringComparer.OrdinalIgnoreCase))
                {
                    if (property.IsValidAsPropertyMetadata())
                    {
                        var propMeta = FromPropertyInfo(property);
                        props.Add(propMeta);
                    }
                }
            }

            return props;
        }
    }
}
