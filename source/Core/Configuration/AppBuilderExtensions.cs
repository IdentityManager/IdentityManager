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

            if (config.SecurityMode == SecurityMode.LocalMachine)
            {
                app.Use(async (ctx, next) =>
                {
                    var localAddresses = new string[] { "127.0.0.1", "::1", ctx.Request.LocalIpAddress };
                    if (localAddresses.Contains(ctx.Request.RemoteIpAddress))
                    {
                        await next();
                    }
                });
            }
            else
            {
                var cookie = new CookieAuthenticationOptions
                {
                    AuthenticationType = Constants.CookieAuthenticationType
                };
                app.UseCookieAuthentication(cookie);

                var oidc = new OpenIdConnectAuthenticationOptions
                {
                    AuthenticationType = Constants.ExternalAuthenticationType,
                    ClientId = "test",
                    Scope = "openid foo",
                    ResponseType = "id_token token",
                    Authority = "http://localhost:3333/core/",
                    RedirectUri = "http://localhost:10152/",
                    SignInAsAuthenticationType = "cookie",
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
