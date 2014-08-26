/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Reflection;

namespace Thinktecture.IdentityManager
{
    public class ReflectedPropertyMetadata : ExecutablePropertyMetadata
    {
        PropertyInfo property;

        public ReflectedPropertyMetadata(PropertyInfo property)
        {
            if (property == null) throw new ArgumentNullException("property");

            this.property = property;
        }

        public override string Get(object instance)
        {
            if (instance == null) throw new ArgumentNullException("instance");

            if (this.DataType == PropertyDataType.Password) return null;

            var value = property.GetValue(instance);
            if (value != null)
            {
                return value.ToString();
            }

            return null;
        }

        public override void Set(object instance, string value)
        {
            if (instance == null) throw new ArgumentNullException("instance");
            
            if (String.IsNullOrWhiteSpace(value))
            {
                property.SetValue(instance, null);
            }
            else
            {
                var type = Nullable.GetUnderlyingType(property.PropertyType) ?? property.PropertyType;
                var convertedValue = Convert.ChangeType(value, type);
                property.SetValue(instance, convertedValue);
            }
        }
    }
}
