/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

using System;
using System.Linq;
using Thinktecture.IdentityManager;
using Microsoft.Owin.Extensions;
using Microsoft.Owin;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;

namespace Owin
{
    public static class AppBuilderExtensions
    {
        public static void UseIdentityManager(this IAppBuilder app, IdentityManagerConfiguration config)
        {
            if (app == null) throw new ArgumentNullException("app");
            if (config == null) throw new ArgumentNullException("config");
            config.Validate();

            app.Use(async (ctx, next) =>
            {
                var localAddresses = new string[]{"127.0.0.1", "::1", ctx.Request.LocalIpAddress};
                if (localAddresses.Contains(ctx.Request.RemoteIpAddress))
                {
                    await next();
                }
            });

            app.UseFileServer(new FileServerOptions
            {
                RequestPath = new PathString("/assets"),
                FileSystem = new EmbeddedResourceFileSystem(typeof(AppBuilderExtensions).Assembly, "Thinktecture.IdentityManager.Core.Assets")
            });
            app.UseFileServer(new FileServerOptions
            {
                RequestPath = new PathString("/assets/libs/fonts"),
                FileSystem = new EmbeddedResourceFileSystem(typeof(AppBuilderExtensions).Assembly, "Thinktecture.IdentityManager.Core.Assets.Content.fonts")
            });
            app.UseStageMarker(PipelineStage.MapHandler);

            //app.UseJsonWebToken();
            var resolver = AutofacConfig.Configure(config);
            WebApiConfig.Configure(app, resolver, config);
        }
    }
}
