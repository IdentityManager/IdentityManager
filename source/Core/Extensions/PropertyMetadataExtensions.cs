/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Thinktecture.IdentityManager.Resources;

namespace Thinktecture.IdentityManager
{
    public static class PropertyMetadataExtensions
    {
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
