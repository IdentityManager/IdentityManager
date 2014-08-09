using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Security.Claims
{
    public static class ClaimsExtensions
    {
        public static bool HasValue(this IEnumerable<Claim> claims, string type, string value)
        {
            if (claims == null) throw new ArgumentNullException("type");
            if (String.IsNullOrWhiteSpace(type)) throw new ArgumentNullException("type");
            if (String.IsNullOrWhiteSpace(value)) throw new ArgumentNullException("value");

            return claims.Any(x => x.Type == type && x.Value == value);
        }

        public static bool HasClaim(this IEnumerable<Claim> claims, string type)
        {
            if (claims == null) throw new ArgumentNullException("type");
            if (String.IsNullOrWhiteSpace(type)) throw new ArgumentNullException("type");

            return claims.Any(x => x.Type == type);
        }

        public static string GetValue(this IEnumerable<Claim> claims, string type)
        {
            if (claims == null) throw new ArgumentNullException("type");
            if (String.IsNullOrWhiteSpace(type)) throw new ArgumentNullException("type");

            var claim = claims.FirstOrDefault(x => x.Type == type);
            if (claim != null)
            {
                return claim.Value;
            }

            return null;
        }

        public static void SetValue(this ICollection<Claim> claims, string type, string value)
        {
            if (claims == null) throw new ArgumentNullException("type");
            if (String.IsNullOrWhiteSpace(type)) throw new ArgumentNullException("type");

            claims.RemoveClaim(type);

            if (!String.IsNullOrWhiteSpace(value))
            {
                claims.AddClaim(type, value);
            }
        }
        
        public static void AddClaim(this ICollection<Claim> claims, string type, string value)
        {
            if (claims == null) throw new ArgumentNullException("type");
            if (String.IsNullOrWhiteSpace(type)) throw new ArgumentNullException("type");
            if (String.IsNullOrWhiteSpace(value)) throw new ArgumentNullException("value");

            if (!claims.HasValue(type, value))
            {
                claims.Add(new Claim(type, value));
            }
        }

        public static void RemoveClaim(this ICollection<Claim> claims, string type)
        {
            if (claims == null) throw new ArgumentNullException("type");
            if (String.IsNullOrWhiteSpace(type)) throw new ArgumentNullException("type");

            foreach (var claim in claims.Where(x => x.Type == type).ToArray())
            {
                claims.Remove(claim);
            }
        }
        
        public static void RemoveClaim(this ICollection<Claim> claims, string type, string value)
        {
            if (claims == null) throw new ArgumentNullException("type");
            if (String.IsNullOrWhiteSpace(type)) throw new ArgumentNullException("type");
            if (String.IsNullOrWhiteSpace(value)) throw new ArgumentNullException("value");

            foreach (var claim in claims.Where(x => x.Type == type && x.Value == value).ToArray())
            {
                claims.Remove(claim);
            }
        }

        public static void RemoveClaims(this ICollection<Claim> claims, string type)
        {
            if (claims == null) throw new ArgumentNullException("type");
            if (String.IsNullOrWhiteSpace(type)) throw new ArgumentNullException("type");

            var found = claims.Where(x => x.Type == type).ToArray();
            foreach (var claim in found)
            {
                claims.Remove(claim);
            }
        }

        public static void RemoveClaims(this ICollection<Claim> claims, string type, string value)
        {
            if (claims == null) throw new ArgumentNullException("type");
            if (String.IsNullOrWhiteSpace(type)) throw new ArgumentNullException("type");
            if (String.IsNullOrWhiteSpace(value)) throw new ArgumentNullException("value");

            var found = claims.Where(x => x.Type == type && x.Value == value).ToArray();
            foreach (var claim in found)
            {
                claims.Remove(claim);
            }
        }
    }
}
