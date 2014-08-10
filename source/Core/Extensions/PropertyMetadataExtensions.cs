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
        public static string Validate(this PropertyMetadata prop, string value)
        {
            if (prop == null) throw new ArgumentNullException("prop");

            if (prop.Required && String.IsNullOrWhiteSpace(value))
            {
                return String.Format(Messages.IsRequired, prop.Name);
            }
            else if (!String.IsNullOrWhiteSpace(value))
            {
                if (prop.DataType == PropertyDataType.Boolean)
                {
                    bool val;
                    if (!Boolean.TryParse(value, out val))
                    {
                        return String.Format(Messages.InvalidBoolean, prop.Name);
                    }
                }

                if (prop.DataType == PropertyDataType.Email)
                {
                    if (!value.Contains("@"))
                    {
                        return String.Format(Messages.InvalidEmail, prop.Name);
                    }
                }

                if (prop.DataType == PropertyDataType.Number)
                {
                    double d;
                    if (!Double.TryParse(value, out d))
                    {
                        return String.Format(Messages.InvalidNumber, prop.Name);
                    }
                }

                if (prop.DataType == PropertyDataType.Url)
                {
                    Uri uri;
                    if (!Uri.TryCreate(value, UriKind.Absolute, out uri) ||
                        (uri.Scheme != Uri.UriSchemeHttp && uri.Scheme != Uri.UriSchemeHttps))
                    {
                        return String.Format(Messages.InvalidUrl, prop.Name);
                    }
                }
            }

            return null;
        }
    }
}
