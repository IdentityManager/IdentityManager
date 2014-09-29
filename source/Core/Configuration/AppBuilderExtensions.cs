/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

using Microsoft.Owin;
using Microsoft.Owin.Extensions;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.Infrastructure;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.Jwt;
using Microsoft.Owin.StaticFiles;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens;
using System.Security.Claims;
using System.ServiceModel.Security.Tokens;
using System.Threading.Tasks;
using System.Web.Http;
using Thinktecture.IdentityManager;
using Thinktecture.IdentityManager.Configuration.Hosting.LocalAuthenticationMiddleware;
using Thinktecture.IdentityModel.Owin.ScopeValidation;

namespace Owin
{
    public static class IdentityManagerAppBuilderExtensions
    {
        public static void UseIdentityManager(this IAppBuilder app, IdentityManagerConfiguration config)
        {
            if (app == null) throw new ArgumentNullException("app");
            if (config == null) throw new ArgumentNullException("config");
            config.Validate();

            JwtSecurityTokenHandler.InboundClaimTypeMap = new Dictionary<string, string>();

            if (config.SecurityMode == SecurityMode.LocalMachine)
            {
                var local = new LocalAuthenticationOptions(config.AdminRoleName);
                app.Use<LocalAuthenticationMiddleware>(local);
            }
            else if (config.SecurityMode == SecurityMode.OAuth2)
            {
                var jwtParams = new System.IdentityModel.Tokens.TokenValidationParameters
                {
                    RoleClaimType = Constants.ClaimTypes.Role,
                    ValidAudience = config.OAuth2Configuration.Audience,
                    ValidIssuer = config.OAuth2Configuration.Issuer,
                };
                if (config.OAuth2Configuration.SigningCert != null)
                {
                    jwtParams.IssuerSigningToken = new X509SecurityToken(config.OAuth2Configuration.SigningCert);
                }
                else
                {
                    var bytes = Convert.FromBase64String(config.OAuth2Configuration.SigningKey);
                    jwtParams.IssuerSigningToken = new BinarySecretSecurityToken(bytes);
                }

                app.UseJwtBearerAuthentication(new JwtBearerAuthenticationOptions {
                    TokenValidationParameters = jwtParams
                });
                app.RequireScopes(new ScopeValidationOptions {
                    AllowAnonymousAccess = true,
                    Scopes = new string[] {
                        config.OAuth2Configuration.Scope
                    }
                });

                app.Use(async (ctx, next) =>
                {
                    await next();
                });
            }

            if (!config.DisableUserInterface)
            {
                app.UseFileServer(new FileServerOptions
                {
                    RequestPath = new PathString("/assets"),
                    FileSystem = new EmbeddedResourceFileSystem(typeof(IdentityManagerAppBuilderExtensions).Assembly, "Thinktecture.IdentityManager.Assets")
                });
                app.UseFileServer(new FileServerOptions
                {
                    RequestPath = new PathString("/assets/libs/fonts"),
                    FileSystem = new EmbeddedResourceFileSystem(typeof(IdentityManagerAppBuilderExtensions).Assembly, "Thinktecture.IdentityManager.Assets.Content.fonts")
                });
                app.UseStageMarker(PipelineStage.MapHandler);
            }

            SignatureConversions.AddConversions(app);

            var httpConfig = new HttpConfiguration();
            WebApiConfig.Configure(httpConfig, config);
            app.UseWebApi(httpConfig);
            app.UseStageMarker(PipelineStage.MapHandler);
        }
    }
}
