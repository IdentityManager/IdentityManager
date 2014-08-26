using Microsoft.Owin.Security;

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
