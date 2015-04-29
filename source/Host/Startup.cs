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
using Microsoft.Owin.Logging;
using Microsoft.Owin;
using IdentityManager.Host;
using System.Threading.Tasks;
using System.IdentityModel.Tokens;

[assembly: OwinStartup(typeof(StartupWithLocalhostSecurity))]
//[assembly: OwinStartup(typeof(StartupWithHostCookiesSecurity))]

namespace IdentityManager.Host
{
    public class StartupWithLocalhostSecurity
    {
        public void Configuration(IAppBuilder app)
        {
            LogProvider.SetCurrentLogProvider(new TraceSourceLogProvider());

            // this configures IdentityManager
            // we're using a Map just to test hosting not at the root
            app.Map("/idm", idm =>
            {
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
                });
            });
        }
    }

    public class StartupWithHostCookiesSecurity
    {
        public void Configuration(IAppBuilder app)
        {
            LogProvider.SetCurrentLogProvider(new TraceSourceLogProvider());
            
            JwtSecurityTokenHandler.InboundClaimTypeMap = new Dictionary<string, string>();
            app.UseCookieAuthentication(new Microsoft.Owin.Security.Cookies.CookieAuthenticationOptions
            {
                AuthenticationType = "Cookies"
            });
            
            app.UseOpenIdConnectAuthentication(new Microsoft.Owin.Security.OpenIdConnect.OpenIdConnectAuthenticationOptions
            {
                AuthenticationType = "oidc",
                Authority = "https://localhost:44337/ids",
                ClientId = "idmgr_client",
                RedirectUri = "https://localhost:44337",
                ResponseType = "id_token",
                UseTokenLifetime = false,
                Scope = "openid idmgr",
                SignInAsAuthenticationType = "Cookies"
            });

            app.Map("/idm", idm =>
            {
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
                    SecurityConfiguration = new HostSecurityConfiguration
                    {
                        HostAuthenticationType = "Cookies",
                        //AdditionalSignOutType = "oidc"
                    }
                });
            });

            // this configures an embedded IdentityServer to act as an external authentication provider
            // when using IdentityManager in Token security mode. normally you'd configure this elsewhere.
            app.Map("/ids", ids =>
            {
                IdSvrConfig.Configure(ids);
            });
        }
    }

}
