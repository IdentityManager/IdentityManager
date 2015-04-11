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

using IdentityManager.Resources;
using System;
using System.Collections.Generic;
using System.Linq;

namespace IdentityManager
{
    public static class PropertyMetadataExtensions
    {
        public static IEnumerable<string> Validate(
            this IEnumerable<PropertyMetadata> propertiesMetadata, 
            IEnumerable<PropertyValue> properties)
        {
            if (propertiesMetadata == null) throw new ArgumentNullException("propertiesMetadata");
            properties = properties ?? Enumerable.Empty<PropertyValue>();

            var errors = new List<string>();

            var crossQuery =
                from m in propertiesMetadata
                from p in properties
                where m.Type == p.Type
                let e = m.Validate(p.Value)
                where e != null
                select e;
            
            errors.AddRange(crossQuery);

            var metaTypes = propertiesMetadata.Select(x => x.Type);
            var propTypes = properties.Select(x => x.Type);
            
            var more = propTypes.Except(metaTypes);
            if (more.Any())
            {
                var types = more.Aggregate((x, y) => x + ", " + y);
                errors.Add(String.Format(Messages.UnrecognizedProperties, types));
            }

            var less = metaTypes.Except(propTypes);
            if (less.Any())
            {
                var types = less.Aggregate((x,y)=>x + ", " + y);
                errors.Add(String.Format(Messages.MissingRequiredProperties, types));
            }
            
            return errors;
        }

        public static string Validate(this PropertyMetadata property, string value)
        {
            if (property == null) throw new ArgumentNullException("property");

            if (property.Required && String.IsNullOrWhiteSpace(value))
            {
                return String.Format(Messages.IsRequired, property.Name);
            }
            else if (!String.IsNullOrWhiteSpace(value))
            {
                if (property.DataType == PropertyDataType.Boolean)
                {
                    bool val;
                    if (!Boolean.TryParse(value, out val))
                    {
                        return String.Format(Messages.InvalidBoolean, property.Name);
                    }
                }

                if (property.DataType == PropertyDataType.Email)
                {
                    if (!value.Contains("@"))
                    {
                        return String.Format(Messages.InvalidEmail, property.Name);
                    }
                }

                if (property.DataType == PropertyDataType.Number)
                {
                    double d;
                    if (!Double.TryParse(value, out d))
                    {
                        return String.Format(Messages.InvalidNumber, property.Name);
                    }
                }

                if (property.DataType == PropertyDataType.Url)
                {
                    Uri uri;
                    if (!Uri.TryCreate(value, UriKind.Absolute, out uri) ||
                        (uri.Scheme != Uri.UriSchemeHttp && uri.Scheme != Uri.UriSchemeHttps))
                    {
                        return String.Format(Messages.InvalidUrl, property.Name);
                    }
                }
            }

            return null;
        }

        public static bool TrySet(this IEnumerable<PropertyMetadata> properties, object instance, string type, string value, out IdentityManagerResult result)
        {
            if (properties == null) throw new ArgumentNullException("properties");
            result = null;

            var executableProperty = properties.Where(x => x.Type == type).SingleOrDefault() as ExecutablePropertyMetadata;
            if (executableProperty != null)
            {
                return executableProperty.TrySet(instance, value, out result);
            }
            
            return false;
        }

        public static bool TrySet(this PropertyMetadata property, object instance, string value, out IdentityManagerResult result)
        {
            if (property == null) throw new ArgumentNullException("property");
            result = null;

            var executableProperty = property as ExecutablePropertyMetadata;
            if (executableProperty != null)
            {
                result = executableProperty.Set(instance, value);
                return true;
            }

            return false;
        }

        public static bool TryGet(this PropertyMetadata property, object instance, out string value)
        {
            if (property == null) throw new ArgumentNullException("property");

            var executableProperty = property as ExecutablePropertyMetadata;
            if (executableProperty != null)
            {
                value = executableProperty.Get(instance);
                return true;
            }

            value = null;
            return false;
        }

        public static object Convert(this PropertyMetadata property, string value)
        {
            if (property == null) throw new ArgumentNullException("property");
            
            if (String.IsNullOrWhiteSpace(value))
            {
                return null;
            }

            if (property.DataType == PropertyDataType.Boolean)
            {
                return Boolean.Parse(value);
            }

            if (property.DataType == PropertyDataType.Number)
            {
                return Double.Parse(value);
            }

            return value;
        }
    }
}
