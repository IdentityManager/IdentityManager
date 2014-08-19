/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Security.Claims;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Thinktecture.IdentityManager;

namespace Thinktecture.IdentityManager
{
    public class OpenIdConnectProviderConfiguration
    {
        public OpenIdConnectProviderConfiguration()
        {
            RoleScope = Constants.RoleScope;
        }

        public string Authority { get; set; }
        public string ClientId { get; set; }
        public string RedirectUri { get; set; }
        public string RoleScope { get; set; }

        internal void Validate()
        {
            if (String.IsNullOrWhiteSpace(Authority)) throw new InvalidOperationException("OpenIdConnectProviderConfiguration : Authority not configured");
            if (String.IsNullOrWhiteSpace(ClientId)) throw new InvalidOperationException("OpenIdConnectProviderConfiguration : ClientId not configured");
            if (String.IsNullOrWhiteSpace(RedirectUri)) throw new InvalidOperationException("OpenIdConnectProviderConfiguration : RedirectUri not configured");
            if (String.IsNullOrWhiteSpace(RoleScope)) throw new InvalidOperationException("OpenIdConnectProviderConfiguration : RoleScope not configured");
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
        public OpenIdConnectProviderConfiguration OidcConfiguration { get; set; }

        public bool DisableUserInterface { get; set; }

        internal void Validate()
        {
            if (this.IdentityManagerFactory == null)
            {
                throw new Exception("IdentityManagerFactory is required.");
            }

            if (this.SecurityMode == IdentityManager.SecurityMode.ExternalOidc)
            {
                if (this.OidcConfiguration == null)
                {
                    throw new InvalidOperationException("OidcConfiguration is required.");
                }
                this.OidcConfiguration.Validate();
            }
            if (String.IsNullOrWhiteSpace(AdminRoleName))
            {
                throw new InvalidOperationException("AdminRoleName not configured");
            }
        }
    }
}
