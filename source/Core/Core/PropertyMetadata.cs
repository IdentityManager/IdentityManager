/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Thinktecture.IdentityManager
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

        public static PropertyMetadata FromProperty<T>(string propertyName, 
            string name = null,
            PropertyDataType? type = null,
            bool? required = null)
        {
            var property = typeof(T).GetProperty(propertyName);
            if (property == null)
            {
                throw new ArgumentException(propertyName + " is invalid property on " + typeof(T).FullName);
            }
            
            return FromProperty(property, name, type, required);
        }
        
        public static PropertyMetadata FromProperty(PropertyInfo property, 
            string name = null, 
            PropertyDataType? type = null, 
            bool? required = null)
        {
            if (property == null) throw new ArgumentNullException("property");

            if (!property.IsValidAsPropertyMetadata())
            {
                return null;
            }
            
            return new PropertyMetadata
            {
                Type = property.Name,
                Name = name ?? property.GetName(),
                DataType = type ?? property.GetPropertyDataType(),
                Required = required ?? property.IsRequired(),
            };
        }

        public static IEnumerable<PropertyMetadata> FromType<T>()
        {
            return FromType(typeof(T));
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
                    var propMeta = FromProperty(property);
                    if (propMeta != null)
                    {
                        props.Add(propMeta);
                    }
                }
            }

            return props;
        }
    }
}
