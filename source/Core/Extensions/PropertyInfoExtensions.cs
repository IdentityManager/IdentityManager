using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Thinktecture.IdentityManager;

namespace System.Reflection
{
    public static class PropertyInfoExtensions
    {
        public static bool IsValidAsPropertyMetadata(this PropertyInfo property)
        {
            if (property == null) throw new ArgumentNullException("property");

            if (property.IsReadOnly())
            {
                return false;
            } 
            
            var type = Nullable.GetUnderlyingType(property.PropertyType) ?? property.PropertyType;

            if (type.IsInterface)
            {
                return false;
            }

            if (type.IsClass && type != typeof(string))
            {
                return false;
            }
            
            if (type.IsValueType && !type.IsPrimitive)
            {
                return false;
            }

            return true;
        }

        public static bool IsReadOnly(this PropertyInfo property)
        {
            if (property == null) throw new ArgumentNullException("property");

            if (!property.CanWrite) return true;

            return property.GetCustomAttributes<ReadOnlyAttribute>(false)
                .Where(x=>x.IsReadOnly).Any();
        }

        public static bool IsRequired(this PropertyInfo property)
        {
            if (property == null) throw new ArgumentNullException("property");

            if (property.PropertyType.IsValueType && property.PropertyType.IsPrimitive)
            {
                return true;
            }

            return property.GetCustomAttributes<RequiredAttribute>().Any();
        }

        public static string GetName(this PropertyInfo property)
        {
            if (property == null) throw new ArgumentNullException("property");
            
            var display = property.GetCustomAttribute<DisplayAttribute>();
            if (display != null)
            {
                return display.Name;
            }

            var displayName = property.GetCustomAttribute<DisplayNameAttribute>();
            if (displayName != null)
            {
                return displayName.DisplayName;
            }

            return property.Name;
        }

        public static PropertyDataType GetPropertyDataType(this PropertyInfo property)
        {
            if (property == null) throw new ArgumentNullException("property");

            var dataTypeAttr = property.GetCustomAttribute<DataTypeAttribute>();
            if (dataTypeAttr != null)
            {
                switch(dataTypeAttr.DataType)
                {
                    case DataType.Password:
                        return PropertyDataType.Password;
                    case DataType.EmailAddress:
                        return PropertyDataType.Email;
                    case DataType.Url:
                        return PropertyDataType.Url;
                }
            }

            return property.PropertyType.GetPropertyDataType();
        }

        public static PropertyDataType GetPropertyDataType(this Type type)
        {
            if (type == null) throw new ArgumentNullException("type");

            type = Nullable.GetUnderlyingType(type) ?? type;

            if (type == typeof(bool))
            {
                return PropertyDataType.Boolean;
            }

            if (type == typeof(short) ||
                type == typeof(int) ||
                type == typeof(long) ||
                type == typeof(float) ||
                type == typeof(double) ||
                type == typeof(decimal))
            {
                return PropertyDataType.Number;
            }

            return PropertyDataType.String;
        }
    }
}
