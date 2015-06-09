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
using System.Security.Claims;

namespace IdentityManager.Extensions
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
