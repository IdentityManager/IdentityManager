/*
 * Copyright 2014 Dominick Baier, Brock Allen
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

using IdentityManager.Core.Logging;
using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using Owin;
using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace IdentityManager.Configuration.Hosting
{
    static class OAuthServerExtensions
    {
        private readonly static ILog Logger = LogProvider.GetCurrentClassLogger();

        public static void UseOAuthAuthorizationServer(this IAppBuilder app, HostSecurityConfiguration config)
        {
            app.UseOAuthAuthorizationServer(new OAuthAuthorizationServerOptions
            {
                AllowInsecureHttp = !config.RequireSsl,
                AccessTokenExpireTimeSpan = config.TokenExpiration,
                AuthorizeEndpointPath = new PathString(Constants.AuthorizePath),
                Provider = new OAuthAuthorizationServerProvider
                {
                    OnValidateClientRedirectUri = ctx =>
                    {
                        if (ctx.ClientId == Constants.IdMgrClientId)
                        {
                            var path = ctx.Request.PathBase.ToString();
                            if (String.IsNullOrWhiteSpace(path)) path = "/";
                            var callbackUrl = new Uri(ctx.Request.Uri, path);
                            var url = callbackUrl.AbsoluteUri;
                            if (url.EndsWith("/")) url = url.Substring(0, url.Length - 1);
                            url += Constants.CallbackFragment;
                            ctx.Validated(url);
                        }
                        else
                        {
                            ctx.Rejected();
                        }

                        return Task.FromResult(0);
                    },
                    OnAuthorizeEndpoint = ctx =>
                    {
                        var owin = ctx.OwinContext;
                        var result = owin.Authentication.AuthenticateAsync(config.HostAuthenticationType).Result;
                        if (result != null)
                        {
                            Logger.InfoFormat("User is authenticated from {0}", config.HostAuthenticationType);

                            // we only want name and role claims
                            var expected = new[]{config.NameClaimType, config.RoleClaimType};
                            var claims = result.Identity.Claims.Where(x => expected.Contains(x.Type));
                            var id = new ClaimsIdentity(claims, Constants.BearerAuthenticationType, config.NameClaimType, config.RoleClaimType);
                            owin.Authentication.SignIn(id);
                        }
                        else
                        {
                            Logger.InfoFormat("User is authenticated from {0}; issuing challenge", config.HostAuthenticationType);
                            owin.Authentication.Challenge();
                        };

                        ctx.RequestCompleted();
                        return Task.FromResult(0);
                    }
                }
            });

            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions
            {
                AuthenticationType = config.BearerAuthenticationType,
                AuthenticationMode = Microsoft.Owin.Security.AuthenticationMode.Passive
            });
        }
    }
}
