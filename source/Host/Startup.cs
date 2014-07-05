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
                IdentityManagerFactory = Thinktecture.IdentityManager.Host.MembershipReboot.MembershipRebootIdentityManagerFactory.Create
                //IdentityManagerFactory = Thinktecture.IdentityManager.Host.AspNetIdentity.AspNetIdentityIdentityManagerFactory.Create
            });
        }
    }

    
}