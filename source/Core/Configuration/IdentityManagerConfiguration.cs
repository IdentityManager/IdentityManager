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
    public class IdentityManagerConfiguration
    {
        public IdentityManagerConfiguration()
        {
            this.AdminRoleName = Constants.AdminRoleName;
        }

        public Func<IIdentityManagerService> IdentityManagerFactory { get; set; }
        
        public SecurityMode SecurityMode { get; set; }
        public string TokenAuthenticationType { get; set; }

        public bool DisableUserInterface { get; set; }

        public string AdminRoleName { get; set; }

        internal void Validate()
        {
            if (this.IdentityManagerFactory == null)
            {
                throw new Exception("IdentityManagerFactory is required.");
            }
            //if (String.IsNullOrWhiteSpace(this.AdminRoleName))
            //{
            //    throw new Exception("AdminRoleName is required.");
            //}
            //if (this.EmbeddedAuthentication == null && this.ExternalAuthentication == null)
            //{
            //    throw new Exception("Neither EmbeddedAuthentication nor ExternalAuthentication was provided. One is required.");
            //}
            //if (this.EmbeddedAuthentication != null && this.ExternalAuthentication != null)
            //{
            //    throw new Exception("Both EmbeddedAuthentication and EmbeddedAuthentication was provided. Only one is allowed.");
            //}
        }
    }
}
