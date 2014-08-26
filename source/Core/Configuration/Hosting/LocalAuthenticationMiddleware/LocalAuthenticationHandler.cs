using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Infrastructure;
using System.Linq;
using System.Security.Claims;
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
                var id = new ClaimsIdentity(Constants.LocalAuthenticationType, Constants.ClaimTypes.Name, Constants.ClaimTypes.Role);
                id.AddClaim(new Claim(Constants.ClaimTypes.Name, Messages.LocalUsername));
                id.AddClaim(new Claim(Constants.ClaimTypes.Role, this.Options.RoleToAssign));

                var ticket = new AuthenticationTicket(id, new AuthenticationProperties());
                return Task.FromResult(ticket);
            }

            return Task.FromResult<AuthenticationTicket>(null);
        }
    }
}
