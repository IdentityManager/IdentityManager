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
            int numberOfRandomUsers = new System.Random().Next(5000, 20000);
            var svc = new InMemoryIdentityManagerService(Users.Get(numberOfRandomUsers));
            app.UseIdentityManager(new IdentityManagerConfiguration()
            {
                IdentityManagerFactory = () => svc
            });
        }
    }
}
