/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

using Thinktecture.IdentityManager.MembershipReboot;
using Owin;
using Thinktecture.IdentityManager.Api.Configuration;

namespace Thinktecture.IdentityManager.Host
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.Map("/api", api =>
            {
                api.UseIdentityServerUserAdmin(new IdentityServerUserAdminConfiguration()
                {
                    //OAuthAuthorizationEndpoint = "/authorize",
                    //AdminRoleName = "Foo",
                    UserManagerFactory = MembershipRebootUserManagerFactory.Create
                });
            });
        }
    }
}