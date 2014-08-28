/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

using Microsoft.Owin;
using Microsoft.Owin.Extensions;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.Infrastructure;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.StaticFiles;
using System;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web.Http;
using Thinktecture.IdentityManager;
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
            else if (config.SecurityMode == SecurityMode.OAuth2)
            {
                if (config.OAuth2Configuration.SigningCert != null)
                {
                    app.UseJsonWebToken(config.OAuth2Configuration.Issuer,
                        config.OAuth2Configuration.Audience,
                        config.OAuth2Configuration.SigningCert);
                }
                else
                {
                    app.UseJsonWebToken(config.OAuth2Configuration.Issuer,
                        config.OAuth2Configuration.Audience,
                        config.OAuth2Configuration.SigningKey);
                    //app.RequireScopes(config.OAuth2Configuration.Scope);
                }
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
