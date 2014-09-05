/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Security.Cryptography.X509Certificates;

namespace Thinktecture.IdentityManager
{
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
