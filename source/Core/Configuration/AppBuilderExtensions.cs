/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

using System;
using Microsoft.Owin;
using System.Linq;
using Thinktecture.IdentityManager;
using Microsoft.Owin.Extensions;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using System.Web.Http;
using Microsoft.Owin.Infrastructure;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OpenIdConnect;

namespace Owin
{
    public static class AppBuilderExtensions
    {
        public static void UseIdentityManager(this IAppBuilder app, IdentityManagerConfiguration config)
        {
            if (app == null) throw new ArgumentNullException("app");
            if (config == null) throw new ArgumentNullException("config");
            config.Validate();

            if (config.SecurityMode == SecurityMode.ExternalOidc)
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
                    SignInAsAuthenticationType = Constants.CookieAuthenticationType
                };
                app.UseOpenIdConnectAuthentication(oidc);
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

            //app.UseJsonWebToken();

            SignatureConversions.AddConversions(app);

            var httpConfig = new HttpConfiguration();
            WebApiConfig.Configure(httpConfig, config);
            app.UseWebApi(httpConfig);
            app.UseStageMarker(PipelineStage.MapHandler);
        }
    }
}
