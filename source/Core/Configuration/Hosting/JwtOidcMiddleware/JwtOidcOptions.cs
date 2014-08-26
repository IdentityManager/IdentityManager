using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Jwt;
using Microsoft.Owin.Security.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Thinktecture.IdentityManager.Configuration.Hosting.JwtOidcMiddleware
{
    public class JwtOidcOptions : AuthenticationOptions
    {
        public JwtOidcOptions()
            : base(Constants.BearerAuthenticationType)
        {
        }

        public string Audience { get; set; }
        public string Authority { get; set; }
    }
}
