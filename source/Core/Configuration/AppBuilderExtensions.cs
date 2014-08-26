/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

using Microsoft.Owin;
using Microsoft.Owin.Extensions;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.Infrastructure;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OpenIdConnect;
using Microsoft.Owin.StaticFiles;
using System;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web.Http;
using Thinktecture.IdentityManager;
using Thinktecture.IdentityManager.Configuration.Hosting.JwtOidcMiddleware;
using Thinktecture.IdentityManager.Configuration.Hosting.LocalAuthenticationMiddleware;

namespace Owin
{
    public static class AppBuilderExtensions
    {
        public static void UseIdentityManager(this IAppBuilder app, IdentityManagerConfiguration config)
        {
            if (app == null) throw new ArgumentNullException("app");
            if (config == null) throw new ArgumentNullException("config");
            config.Validate();

            if (config.SecurityMode == SecurityMode.LocalMachine)
            {
                var local = new LocalAuthenticationOptions(config.AdminRoleName);
                app.Use<LocalAuthenticationMiddleware>(local);
            }
            else if (config.SecurityMode == SecurityMode.Oidc)
            {
                var cookie = new CookieAuthenticationOptions
                {
                    AuthenticationType = Constants.CookieAuthenticationType,
                    CookieName = Constants.CookieAuthenticationType,
                    AuthenticationMode = Microsoft.Owin.Security.AuthenticationMode.Active
                };
                app.UseCookieAuthentication(cookie);

                var oidc = new OpenIdConnectAuthenticationOptions
                {
                    AuthenticationType = Constants.ExternalOidcAuthenticationType,
                    ClientId = config.OidcConfiguration.ClientId,
                    Scope = "openid " + config.OidcConfiguration.RoleScope,
                    ResponseType = "id_token",
                    Authority = config.OidcConfiguration.Authority,
                    RedirectUri = config.OidcConfiguration.RedirectUri,
                    SignInAsAuthenticationType = Constants.CookieAuthenticationType,
                    Notifications = new OpenIdConnectAuthenticationNotifications
                    {
                        SecurityTokenValidated = ctx =>
                        {
                            if (ctx.ProtocolMessage.IdToken != null)
                            {
                                ctx.AuthenticationTicket.Identity.AddClaim(new Claim(Constants.ClaimTypes.BootstrapToken, ctx.ProtocolMessage.IdToken));
                            }
                            return Task.FromResult(0);
                        }
                    }
                };
                app.UseOpenIdConnectAuthentication(oidc);

                app.Use<JwtOidcMiddleware>(app, new JwtOidcOptions()
                {
                    AuthenticationType = Constants.BearerAuthenticationType,
                    Audience = config.OidcConfiguration.ClientId,
                    Authority = config.OidcConfiguration.Authority,
                });
            }

            if (!config.DisableUserInterface)
            {
                app.UseFileServer(new FileServerOptions
                {
                    RequestPath = new PathString("/assets"),
                    FileSystem = new EmbeddedResourceFileSystem(typeof(AppBuilderExtensions).Assembly, "Thinktecture.IdentityManager.Assets")
                });
                app.UseFileServer(new FileServerOptions
                {
                    RequestPath = new PathString("/assets/libs/fonts"),
                    FileSystem = new EmbeddedResourceFileSystem(typeof(AppBuilderExtensions).Assembly, "Thinktecture.IdentityManager.Assets.Content.fonts")
                });
                app.UseStageMarker(PipelineStage.MapHandler);
            }

            SignatureConversions.AddConversions(app);

            var httpConfig = new HttpConfiguration();
            WebApiConfig.Configure(httpConfig, config);
            app.UseWebApi(httpConfig);
            app.UseStageMarker(PipelineStage.MapHandler);
        }
    }
}
