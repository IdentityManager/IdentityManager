using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Thinktecture.IdentityManager.Configuration.Hosting.LocalAuthenticationMiddleware
{
    public class LocalAuthenticationOptions : AuthenticationOptions
    {
        public LocalAuthenticationOptions(string roleToAssign)
            : base(Constants.LocalAuthenticationType)
        {
            this.RoleToAssign = roleToAssign;
        }

        public string RoleToAssign { get; private set; }
    }
}
