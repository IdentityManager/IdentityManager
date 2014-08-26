using Microsoft.Owin.Security;

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
