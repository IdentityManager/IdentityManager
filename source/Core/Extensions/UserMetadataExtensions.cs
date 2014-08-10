using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Thinktecture.IdentityManager
{
    public static class UserMetadataExtensions
    {
        public static string Validate(this UserMetadata userMetadata, string type, string value)
        {
            if (userMetadata == null) throw new ArgumentNullException("userMetadata");

            var prop = userMetadata.Properties.Where(x => x is ReflectedPropertyMetadata && x.Type == type).SingleOrDefault();
            if (prop != null)
            {
                var error = prop.Validate(value);
                if (error != null)
                {
                    return error;
                }
            }
            return null;
        }

        public static bool TrySet(this UserMetadata userMetadata, object instance, string type, string value)
        {
            if (userMetadata == null) throw new ArgumentNullException("userMetadata");

            var prop = (ReflectedPropertyMetadata)userMetadata.Properties.Where(x => x is ReflectedPropertyMetadata && x.Type == type).SingleOrDefault();
            if (prop != null)
            {
                prop.Set(instance, value);
                return true;
            }

            var expressionProperty = (ExpressionPropertyMetadata)userMetadata.Properties.Where(x => x is ExpressionPropertyMetadata && x.Type == type).SingleOrDefault();
            if (expressionProperty != null)
            {
                expressionProperty.Set(instance, value);
                return true;
            }

            return false;
        }
        
        public static bool TryGet(this UserMetadata userMetadata, object instance, string type, out string value)
        {
            if (userMetadata == null) throw new ArgumentNullException("userMetadata");

            var reflectedProperty = (ReflectedPropertyMetadata)userMetadata.Properties.Where(x => x is ReflectedPropertyMetadata && x.Type == type).SingleOrDefault();
            if (reflectedProperty != null)
            {
                value = reflectedProperty.Get(instance);
                return true;
            }

            var expressionProperty = (ExpressionPropertyMetadata)userMetadata.Properties.Where(x => x is ExpressionPropertyMetadata && x.Type == type).SingleOrDefault();
            if (expressionProperty != null)
            {
                value = expressionProperty.Get(instance);
                return true;
            }

            value = null;
            return false;
        }

        public static IEnumerable<UserClaim> GetUserClaims(this IEnumerable<ReflectedPropertyMetadata> userMetadata, object instance)
        {
            userMetadata = userMetadata ?? Enumerable.Empty<ReflectedPropertyMetadata>();

            var query =
                from m in userMetadata
                select new UserClaim
                {
                    Type = m.Type,
                    Value = m.Get(instance)
                };
            return query.ToArray();
        }
    }
}
