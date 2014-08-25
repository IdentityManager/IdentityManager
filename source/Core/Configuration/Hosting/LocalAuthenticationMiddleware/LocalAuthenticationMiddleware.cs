using Microsoft.Owin;
using Microsoft.Owin.Security.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Thinktecture.IdentityManager.Configuration.Hosting.LocalAuthenticationMiddleware
{
    public class LocalAuthenticationMiddleware : AuthenticationMiddleware<LocalAuthenticationOptions>
    {
        public LocalAuthenticationMiddleware(OwinMiddleware next, LocalAuthenticationOptions options)
            : base(next, options)
        {
        }

        protected override AuthenticationHandler<LocalAuthenticationOptions> CreateHandler()
        {
            return new LocalAuthenticationHandler();
        }
    }
}
