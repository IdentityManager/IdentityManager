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
using System.Security.Claims;
using System.Security.Cryptography.X509Certificates;

namespace IdentityManager.Configuration
{
    public class OAuth2Configuration
    {
        public OAuth2Configuration()
        {
            Scope = Constants.IdMgrScope;
            NameClaimType = Constants.ClaimTypes.Name;
            RoleClaimType = Constants.ClaimTypes.Role;
        }

        public string AuthorizationUrl { get; set; }
        public string Scope { get; set; }
        public string ClientId { get; set; }

        public string Audience { get; set; }
        public string Issuer { get; set; }
        
        public string SigningKey { get; set; }
        public X509Certificate2 SigningCert { get; set; }

        public bool PersistToken { get; set; }
        public bool AutomaticallyRenewToken { get; set; }

        public string NameClaimType { get; set; }
        public string RoleClaimType { get; set; }

        public Func<ClaimsPrincipal, ClaimsPrincipal> ClaimsTransformation { get; set; }

        internal void Validate()
        {
            if (String.IsNullOrWhiteSpace(AuthorizationUrl)) throw new InvalidOperationException("OAuth2Configuration : AuthorizationUrl not configured");
            if (String.IsNullOrWhiteSpace(Scope)) throw new InvalidOperationException("OAuth2Configuration : Scope not configured");
            if (String.IsNullOrWhiteSpace(ClientId)) throw new InvalidOperationException("OAuth2Configuration : ClientId not configured");

            if (String.IsNullOrWhiteSpace(Audience)) throw new InvalidOperationException("OAuth2Configuration : Audience not configured");
            if (String.IsNullOrWhiteSpace(Issuer)) throw new InvalidOperationException("OAuth2Configuration : Issuer not configured");

            if (String.IsNullOrWhiteSpace(SigningKey) && SigningCert == null) throw new InvalidOperationException("OAuth2Configuration : Signing key not configured");
        }
    }
}
