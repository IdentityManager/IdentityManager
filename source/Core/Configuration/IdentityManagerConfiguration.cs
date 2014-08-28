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

    public class IdentityManagerConfiguration
    {
        public IdentityManagerConfiguration()
        {
            AdminRoleName = Constants.AdminRoleName;
        }

        public Func<IIdentityManagerService> IdentityManagerFactory { get; set; }

        public string AdminRoleName { get; set; }
        public SecurityMode SecurityMode { get; set; }
        public OAuth2Configuration OAuth2Configuration { get; set; }

        public bool DisableUserInterface { get; set; }

        internal void Validate()
        {
            if (this.IdentityManagerFactory == null)
            {
                throw new Exception("IdentityManagerFactory is required.");
            }

            if (this.SecurityMode == IdentityManager.SecurityMode.OAuth2)
            {
                if (this.OAuth2Configuration == null)
                {
                    throw new InvalidOperationException("OidcConfiguration is required.");
                }
                this.OAuth2Configuration.Validate();
            }
            else
            {
                this.OAuth2Configuration = null;
            }

            if (String.IsNullOrWhiteSpace(AdminRoleName))
            {
                throw new InvalidOperationException("AdminRoleName not configured");
            }
        }
    }
}
