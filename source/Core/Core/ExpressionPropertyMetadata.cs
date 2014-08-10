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
using Thinktecture.IdentityManager.Resources;

namespace Thinktecture.IdentityManager
{
    public class ExpressionPropertyMetadata : PropertyMetadata
    {

        public ExpressionPropertyMetadata(Action<string, string> set, Func<string> get)
        {
        }

        //PropertyInfo property;

        //public string Get(object instance)
        //{
        //    if (this.DataType == PropertyDataType.Password) return null;

        //    var value = property.GetValue(instance);
        //    if (value != null)
        //    {
        //        return value.ToString();
        //    }

        //    return null;
        //}

        //public void Set(object instance, string value)
        //{
        //    if (String.IsNullOrWhiteSpace(value))
        //    {
        //        property.SetValue(instance, null);
        //    }
        //    else
        //    {
        //        var type = Nullable.GetUnderlyingType(property.PropertyType) ?? property.PropertyType;
        //        var convertedValue = Convert.ChangeType(value, type);
        //        property.SetValue(instance, convertedValue);
        //    }
        //}

        //public static PropertyMetadata FromProperty(PropertyInfo property,
        //            string name = null,
        //            PropertyDataType? type = null,
        //            bool? required = null)
        //{
        //    if (property == null) throw new ArgumentNullException("property");

        //    if (!property.IsValidAsPropertyMetadata())
        //    {
        //        return null;
        //    }

        //    return new ReflectedPropertyMetadata
        //    {
        //        Type = property.Name,
        //        Name = name ?? property.GetName(),
        //        DataType = type ?? property.GetPropertyDataType(),
        //        Required = required ?? property.IsRequired(),
        //        Property = property
        //    };
        //}
        
        //public static PropertyMetadata FromProperty<T>(string propertyName,
        //    string name = null,
        //    PropertyDataType? type = null,
        //    bool? required = null)
        //{
        //    var property = typeof(T).GetProperty(propertyName);
        //    if (property == null)
        //    {
        //        throw new ArgumentException(propertyName + " is invalid property on " + typeof(T).FullName);
        //    }

        //    return FromProperty(property, name, type, required);
        //}

        //public static IEnumerable<PropertyMetadata> FromType<T>()
        //{
        //    return FromType(typeof(T));
        //}

        //public static IEnumerable<PropertyMetadata> FromType(Type type, params string[] propertiesToExclude)
        //{
        //    if (type == null) throw new ArgumentNullException("type");

        //    List<PropertyMetadata> props = new List<PropertyMetadata>();

        //    var properties = type.GetProperties(BindingFlags.Public | BindingFlags.Instance | BindingFlags.IgnoreCase | BindingFlags.DeclaredOnly);
        //    foreach (var property in properties)
        //    {
        //        if (!propertiesToExclude.Contains(property.Name, StringComparer.OrdinalIgnoreCase))
        //        {
        //            var propMeta = FromProperty(property);
        //            if (propMeta != null)
        //            {
        //                props.Add(propMeta);
        //            }
        //        }
        //    }

        //    return props;
        //}
    }
}
