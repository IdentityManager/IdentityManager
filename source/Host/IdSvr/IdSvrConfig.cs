using Owin;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using Thinktecture.IdentityServer.Core.Configuration;
using Thinktecture.IdentityServer.Core.Models;
using Thinktecture.IdentityServer.Core.Services.InMemory;

namespace Thinktecture.IdentityManager.Host.IdSvr
{
    public class IdSvrConfig
    {
        public static void Configure(IAppBuilder app)
        {
            var factory = InMemoryFactory.Create(users:GetUsers(), scopes:GetScopes(), clients:GetClients());
            var idsrvOptions = new IdentityServerOptions
            {
                IssuerUri = "https://idsrv3.com",
                SiteName = "Thinktecture IdentityServer v3",
                SigningCertificate = Cert.Load(),
                CspReportEndpoint = EndpointSettings.Enabled,
                //AccessTokenValidationEndpoint = EndpointSettings.Enabled,
                PublicHostName = "http://localhost:17457",
                Factory = factory,
                CorsPolicy = CorsPolicy.AllowAll,
            };
            app.UseIdentityServer(idsrvOptions);
        }

        static InMemoryUser[] GetUsers()
        {
            return new InMemoryUser[]{
                new InMemoryUser{
                    Subject = Guid.Parse("951a965f-1f84-4360-90e4-3f6deac7b9bc").ToString(),
                    Username = "admin", 
                    Password = "admin",
                    Claims = new Claim[]{
                        new Claim("role", "IdentityManagerAdministrator"),                    
                    }
                }
            };
        }

        static Client[] GetClients()
        {
            return new Client[]{
                new Client{
                    ClientId = "idmgr",
                    ClientName = "IdentityManager",
                    Enabled = true,
                    Flow = Flows.Implicit,                    
                    RedirectUris = new List<Uri>{
                        new Uri("http://localhost:17457/idm/#/callback"),
                        new Uri("http://localhost:17457/idm/frame"),
                    },
                    AccessTokenType = AccessTokenType.Jwt,
                    AccessTokenLifetime = 50
                },
            };
        }

        static Scope[] GetScopes()
        {
            return new Scope[] {
                 new Scope{
                    Name = "idmgr",
                    DisplayName = "IdentityManager",
                    Description = "Authorization for IdentityManager",
                },
            };
        }
    }
}