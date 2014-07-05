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
            app.UseIdentityManager(new IdentityManagerConfiguration()
            {
                IdentityManagerFactory = Thinktecture.IdentityManager.MembershipReboot.IdentityManagerFactory.Create
                //UserManagerFactory = Thinktecture.IdentityManager.AspNetIdentity.UserManagerFactory.Create
            });
        }
    }

    
}