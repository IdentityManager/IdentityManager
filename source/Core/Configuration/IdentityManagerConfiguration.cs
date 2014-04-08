/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Security.Claims;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Thinktecture.IdentityManager.Core;

namespace Thinktecture.IdentityManager
{
    public class IdentityManagerConfiguration
    {
        public IdentityManagerConfiguration()
        {
            this.AdminRoleName = "IdentityManagerAdministrator";
        }

        public Func<IUserManager> UserManagerFactory { get; set; }

        public EmbeddedAuthentication EmbeddedAuthentication { get; set; }
        public ExternalAuthentication ExternalAuthentication { get; set; }

        public string AdminRoleName { get; set; }

        internal void Validate()
        {
            if (this.UserManagerFactory == null)
            {
                throw new Exception("UserManagerFactory is required.");
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
    
    public class EmbeddedAuthentication
    {
        public string EmbeddedAdminUsername { get; set; }
        public string EmbeddedAdminPassword { get; set; }
    }
    
    public class ExternalAuthentication
    {
        public Func<ClaimsPrincipal, Task<ClaimsPrincipal>> ExternalClaimsTransformer { get; set; }
        public string OAuthAuthorizationEndpoint { get; set; }
        public string OAuthIssuer { get; set; }
        public string OAuthAudience { get; set; }
        public string OAuthSigningKey { get; set; }
        public X509Certificate2 OAuthSigningCertificate { get; set; }
    }
}
