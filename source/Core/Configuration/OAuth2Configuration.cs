/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Security.Cryptography.X509Certificates;

namespace Thinktecture.IdentityManager
{
    public class OAuth2Configuration
    {
        public OAuth2Configuration()
        {
            Scope = Constants.IdMgrScope;
        }

        public string AuthorizationUrl { get; set; }
        public string Scope { get; set; }
        public string ClientId { get; set; }

        public string Audience { get; set; }
        public string Issuer { get; set; }
        
        public string SigningKey { get; set; }
        public X509Certificate2 SigningCert { get; set; }

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
