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
            app.Map("/test", testApp =>
            {
                var rand = new System.Random();
                var svc = new InMemoryIdentityManagerService(Users.Get(rand.Next(5000, 20000)), Roles.Get(rand.Next(15)));
                testApp.UseIdentityManager(new IdentityManagerConfiguration
                {
                    IdentityManagerFactory = () => svc,
                    DisableUserInterface = false,
                    SecurityMode = SecurityMode.Local
                });
            });

            app.Run(ctx=>{
                ctx.Response.Redirect("/test/");
                return System.Threading.Tasks.Task.FromResult(0);
            });
        }
    }
}
