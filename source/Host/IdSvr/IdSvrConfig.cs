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

using System;
using System.Collections.Generic;
using System.Security.Claims;
using IdentityServer3.Core.Configuration;
using IdentityServer3.Core.Models;
using IdentityServer3.Core.Services;
using IdentityServer3.Core.Services.Default;
using IdentityServer3.Core.Services.InMemory;
using Owin;

namespace IdentityManager.Host.IdSvr
{
    public class IdSvrConfig
    {
        public static void Configure(IAppBuilder app)
        {
            var factory = new IdentityServerServiceFactory();
            factory.UseInMemoryUsers(GetUsers());
            factory.UseInMemoryScopes(GetScopes());
            factory.UseInMemoryClients(GetClients());
            factory.CorsPolicyService = new Registration<ICorsPolicyService>(resolver => new DefaultCorsPolicyService() { AllowAll = true });
            var idsrvOptions = new IdentityServerOptions
            {
                SiteName = "IdentityServer v3",
                SigningCertificate = Cert.Load(),
                Endpoints = new EndpointOptions {
                    EnableCspReportEndpoint = true
                },
                Factory = factory
            };
            app.UseIdentityServer(idsrvOptions);
        }

        static List<InMemoryUser> GetUsers()
        {
            return new List<InMemoryUser>{
                new InMemoryUser{
                    Subject = Guid.Parse("951a965f-1f84-4360-90e4-3f6deac7b9bc").ToString(),
                    Username = "admin", 
                    Password = "admin",
                    Claims = new Claim[]{
                        new Claim(Constants.ClaimTypes.Name, "Admin"),
                        new Claim(Constants.ClaimTypes.Role, "IdentityManagerAdministrator"),
                    }
                },
                new InMemoryUser{
                    Subject = Guid.Parse("851a965f-1f84-4360-90e4-3f6deac7b9bc").ToString(),
                    Username = "alice", 
                    Password = "alice",
                    Claims = new Claim[]{
                        new Claim(Constants.ClaimTypes.Name, "Alice"),
                        new Claim(Constants.ClaimTypes.Role, "Foo"),
                    }
                }
            };
        }

        static Client[] GetClients()
        {
            return new Client[]{
                new Client{
                    ClientId = "idmgr_client",
                    ClientName = "IdentityManager",
                    Enabled = true,
                    Flow = Flows.Implicit,
                    RequireConsent = false,
                    RedirectUris = new List<string>{
                        "https://localhost:44337",
                    },
                    PostLogoutRedirectUris = new List<string>{
                        "https://localhost:44337/idm"
                    },
                    IdentityProviderRestrictions = new List<string>(){IdentityServer3.Core.Constants.PrimaryAuthenticationType},
                    AllowedScopes = {
                        IdentityServer3.Core.Constants.StandardScopes.OpenId,
                        IdentityManager.Constants.IdMgrScope
                    }
                },
            };
        }

        static Scope[] GetScopes()
        {
            return new Scope[] {
                StandardScopes.OpenId,
                 new Scope{
                    Name = IdentityManager.Constants.IdMgrScope,
                    DisplayName = "IdentityManager",
                    Description = "Authorization for IdentityManager",
                    Type = ScopeType.Identity,
                    Claims = new List<ScopeClaim>{
                        new ScopeClaim(Constants.ClaimTypes.Name),
                        new ScopeClaim(Constants.ClaimTypes.Role)
                    }
                },
            };
        }
    }
}