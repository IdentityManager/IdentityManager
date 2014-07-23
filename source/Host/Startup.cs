/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

using Owin;

namespace Thinktecture.IdentityManager.Host
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.Use(async (ctx, next) =>
            {
                await next();
            });

            app.UseIdentityManager(new IdentityManagerConfiguration()
            {
            });
        }
    }
}