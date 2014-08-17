using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http.Filters;
using Thinktecture.IdentityManager.Resources;

namespace Thinktecture.IdentityManager.Configuration.Hosting
{
    public class LocalAuthenticationFilter : IAuthenticationFilter
    {
        string role;
        public LocalAuthenticationFilter(string role)
        {
            if (String.IsNullOrWhiteSpace(role))
            {
                throw new ArgumentNullException("role");
            }

            this.role = role;
        }

        public System.Threading.Tasks.Task AuthenticateAsync(HttpAuthenticationContext context, System.Threading.CancellationToken cancellationToken)
        {
            var id = new ClaimsIdentity(Constants.LocalAuthenticationType);
            id.AddClaim(new Claim(ClaimTypes.Name, Messages.LocalUsername));
            id.AddClaim(new Claim(ClaimTypes.Role, this.role));
            
            var user = new ClaimsPrincipal(id);
            context.Principal = user;

            return Task.FromResult(0);
        }

        public System.Threading.Tasks.Task ChallengeAsync(HttpAuthenticationChallengeContext context, System.Threading.CancellationToken cancellationToken)
        {
            return Task.FromResult(0);
        }

        public bool AllowMultiple
        {
            get { return false; }
        }
    }

}
