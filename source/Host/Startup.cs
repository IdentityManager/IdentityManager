/*
 * Copyright 2014 Dominick Baier, Brock Allen
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

using Owin;
using System.Collections;
using System.Collections.Generic;
using System.Security.Claims;
using IdentityManager.Configuration;
using IdentityManager.Core.Logging;
using IdentityManager.Host.IdSvr;
using IdentityManager.Host.InMemoryService;
using IdentityManager.Logging;

namespace IdentityManager.Host
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // this configures IdentityManager
            // we're using a Map just to test hosting not at the root
            app.Map("/idm", idm =>
            {
                LogProvider.SetCurrentLogProvider(new DiagnosticsTraceLogProvider());

                var factory = new IdentityManagerServiceFactory();

                var rand = new System.Random();
                var users = Users.Get(rand.Next(5000, 20000));
                var roles = Roles.Get(rand.Next(15));

                factory.Register(new Registration<ICollection<InMemoryUser>>(users));
                factory.Register(new Registration<ICollection<InMemoryRole>>(roles));
                factory.IdentityManagerService = new Registration<IIdentityManagerService, InMemoryIdentityManagerService>();

                idm.UseIdentityManager(new IdentityManagerOptions
                {
                    Factory = factory,
                    SecurityMode = SecurityMode.LocalMachine,
                    OAuth2Configuration = new OAuth2Configuration
                    {
                        AuthorizationUrl = "http://localhost:17457/ids/connect/authorize",
                        Issuer = "https://idsrv3.com",
                        Audience = "https://idsrv3.com/resources",
                        ClientId = "idmgr",
                        SigningCert = Cert.Load(),
                        Scope = "idmgr",
                        ClaimsTransformation = user =>
                        {
                            if (user.IsInRole("Foo"))
                            {
                                ((ClaimsIdentity)user.Identity).AddClaim(new Claim("role", "IdentityManagerAdministrator"));
                            }
                            
                            return user;
                        },
                        //PersistToken = true,
                        //AutomaticallyRenewToken = true
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
