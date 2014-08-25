using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Thinktecture.IdentityManager.Resources;

namespace Thinktecture.IdentityManager.Configuration.Hosting.LocalAuthenticationMiddleware
{
    public class LocalAuthenticationHandler : AuthenticationHandler<LocalAuthenticationOptions>
    {
        protected override Task<Microsoft.Owin.Security.AuthenticationTicket> AuthenticateCoreAsync()
        {
            var ctx = this.Context;
            var localAddresses = new string[] { "127.0.0.1", "::1", ctx.Request.LocalIpAddress };
            if (localAddresses.Contains(ctx.Request.RemoteIpAddress))
            {
                var id = new ClaimsIdentity(Constants.LocalAuthenticationType);
                id.AddClaim(new Claim(ClaimTypes.Name, Messages.LocalUsername));
                id.AddClaim(new Claim(ClaimTypes.Role, this.Options.RoleToAssign));

                var ticket = new AuthenticationTicket(id, new AuthenticationProperties());
                return Task.FromResult(ticket);
            }

            return Task.FromResult<AuthenticationTicket>(null);
        }
    }
}
