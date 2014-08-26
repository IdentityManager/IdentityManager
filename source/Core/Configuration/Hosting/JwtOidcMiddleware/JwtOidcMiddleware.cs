using Microsoft.IdentityModel.Protocols;
using Microsoft.Owin;
using Microsoft.Owin.Security.Infrastructure;
using Microsoft.Owin.Security.Jwt;
using Microsoft.Owin.Security.OAuth;
using Owin;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens;
using System.Linq;
using System.Threading.Tasks;

namespace Thinktecture.IdentityManager.Configuration.Hosting.JwtOidcMiddleware
{
    public class JwtOidcMiddleware : AuthenticationMiddleware<JwtOidcOptions>
    {
        class LazyIssuerSecurityTokenProvider : IIssuerSecurityTokenProvider
        {
            ConfigurationManager<OpenIdConnectConfiguration> config;

            public LazyIssuerSecurityTokenProvider(string authority)
            {
                if (!authority.EndsWith("/"))
                {
                    authority += "/";
                }
                authority += ".well-known/openid-configuration";
                config = new ConfigurationManager<OpenIdConnectConfiguration>(authority);
            }

            public async Task Load()
            {
                if (this._issuer == null)
                {
                    var results = await config.GetConfigurationAsync();
                    _tokens = results.SigningTokens.ToArray();
                    _issuer = results.Issuer;
                }
            }

            string _issuer;
            public string Issuer
            {
                get { return _issuer; }
            }

            SecurityToken[] _tokens;
            public IEnumerable<System.IdentityModel.Tokens.SecurityToken> SecurityTokens
            {
                get { return _tokens; }
            }
        }

        LazyIssuerSecurityTokenProvider lazyIssuerSecurityTokenProvider;
        OAuthBearerAuthenticationMiddleware inner;
        
        public JwtOidcMiddleware(OwinMiddleware next, IAppBuilder app, JwtOidcOptions options)
            : base(next, options)
        {
            lazyIssuerSecurityTokenProvider = new LazyIssuerSecurityTokenProvider(options.Authority);
            
            var tokenParams = new TokenValidationParameters(){
                ValidAudience = options.Audience,
                AuthenticationType = "JWT",
                NameClaimType= Constants.ClaimTypes.Name,
                //RoleClaimType = Constants.ClaimTypes.Role
            };
            
            var format = new JwtFormat(
                tokenParams,
                lazyIssuerSecurityTokenProvider);

            var bearer = new OAuthBearerAuthenticationOptions
            {
                AccessTokenFormat = format,
                AuthenticationMode = options.AuthenticationMode,
                AuthenticationType = options.AuthenticationType,
            };

            inner = new OAuthBearerAuthenticationMiddleware(next, app, bearer);
        }

        public override async Task Invoke(IOwinContext context)
        {
            await this.lazyIssuerSecurityTokenProvider.Load();
            await inner.Invoke(context);
        }

        protected override AuthenticationHandler<JwtOidcOptions> CreateHandler()
        {
            throw new NotImplementedException();
        }
    }
}
