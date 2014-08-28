/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

using Owin;
using Thinktecture.IdentityManager.Host.IdSvr;
using Thinktecture.IdentityManager.Host.InMemoryService;

namespace Thinktecture.IdentityManager.Host
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // this configures IdentityManager
            // we're using a Map just to test hosting not at the root
            app.Map("/idm", idm =>
            {
                var rand = new System.Random();
                var svc = new InMemoryIdentityManagerService(Users.Get(rand.Next(5000, 20000)), Roles.Get(rand.Next(15)));
                idm.UseIdentityManager(new IdentityManagerConfiguration
                {
                    IdentityManagerFactory = () => svc,
                    SecurityMode = SecurityMode.LocalMachine,
                    OAuth2Configuration = new OAuth2Configuration
                    {
                        AuthorizationUrl = "http://localhost:17457/ids/connect/authorize",
                        Issuer = "https://idsrv3.com",
                        Audience = "https://idsrv3.com/resources",
                        ClientId = "idmgr",
                        SigningCert = Cert.Load(),
                        Scope = "idmgr"
                    }
                });
            });

            // this configures an embedded IdentityServer to act as an external authentication provider
            // when using IdentityManager in Token security mode. normally you'd configure this elsewhere.
            app.Map("/ids", ids =>
            {
                IdSvrConfig.Configure(ids);
            });
            
            // used to redirect to the main admin page visiting the root of the host
            app.Run(ctx =>
            {
                ctx.Response.Redirect("/idm/");
                return System.Threading.Tasks.Task.FromResult(0);
            });
        }
    }
}
