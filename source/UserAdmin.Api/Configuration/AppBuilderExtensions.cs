/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using Thinktecture.IdentityManager.Api.Configuration;


namespace Owin
{
    public static class AppBuilderExtensions
    {
        public static void UseIdentityServerUserAdmin(this IAppBuilder app, IdentityServerUserAdminConfiguration config)
        {
            if (app == null) throw new ArgumentNullException("app");
            if (config == null) throw new ArgumentNullException("config");
            //config.Validate();

            //app.UseJsonWebToken();
            var resolver = AutofacConfig.Configure(config);
            WebApiConfig.Configure(app, resolver, config);
        }
    }
}
