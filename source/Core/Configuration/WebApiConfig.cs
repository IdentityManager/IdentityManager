/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using Owin;
using System;
using System.Diagnostics;
using System.IO;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Dependencies;
using System.Web.Http.ExceptionHandling;
using System.Web.Http.Filters;

namespace Thinktecture.IdentityManager
{
    public class WebApiConfig
    {
        public static void Configure(HttpConfiguration apiConfig, IdentityManagerConfiguration idmConfig)
        {
            if (apiConfig == null) throw new ArgumentNullException("apiConfig");
            if (idmConfig == null) throw new ArgumentNullException("idmConfig");

            var resolver = AutofacConfig.Configure(idmConfig);
            apiConfig.DependencyResolver = resolver;

            apiConfig.MapHttpAttributeRoutes();
            if (!idmConfig.DisableUserInterface)
            {
                apiConfig.Routes.MapHttpRoute("page",
                    "",
                    new { controller = "Page" });
            }

            apiConfig.SuppressDefaultHostAuthentication();
            if (idmConfig.SecurityMode != SecurityMode.Local)
            {
                apiConfig.Filters.Add(new HostAuthenticationAttribute(idmConfig.AuthenticationType));
            }
            else
            {
                apiConfig.Filters.Add(new LocalAuthenticationFilter(idmConfig.AdminRoleName));
            }

            apiConfig.Filters.Add(new AuthorizeAttribute() { Roles = idmConfig.AdminRoleName });
            
            apiConfig.Formatters.Remove(apiConfig.Formatters.XmlFormatter);
            apiConfig.Formatters.JsonFormatter.SerializerSettings.ContractResolver =
                new Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver();

            //apiConfig.Services.Add(typeof(IExceptionLogger), new UserAdminExceptionLogger());

#if DEBUG
            apiConfig.Services.Add(typeof(IExceptionLogger), new TraceLogger());
#endif
        }

        public class UserAdminExceptionLogger : ExceptionLogger
        {
            public override void Log(ExceptionLoggerContext context)
            {
                var path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "App_Data");
                path = Path.Combine(path, "UserAdminException.txt");
                Directory.CreateDirectory(path);
                var msg = DateTime.Now.ToString() + Environment.NewLine + context.Exception.ToString() + Environment.NewLine + Environment.NewLine;
                File.AppendAllText(path, msg);
            }
        }

        public class TraceLogger : ExceptionLogger
        {
            public override void Log(ExceptionLoggerContext context)
            {
                Trace.WriteLine(context.Exception.ToString());
            }
        }

        public class LocalAuthenticationFilter : IAuthenticationFilter
        {
            string role;
            public LocalAuthenticationFilter(string role)
            {
                this.role = role;
            }

            public System.Threading.Tasks.Task AuthenticateAsync(HttpAuthenticationContext context, System.Threading.CancellationToken cancellationToken)
            {
                var id = new ClaimsIdentity("local");
                id.AddClaim(new Claim(ClaimTypes.Name, "Local User"));
                id.AddClaim(new Claim(ClaimTypes.Role, this.role));
                var user = new ClaimsPrincipal(id);
                context.Principal = user;
                return Task.FromResult(0);
            }

            public System.Threading.Tasks.Task ChallengeAsync(HttpAuthenticationChallengeContext context, System.Threading.CancellationToken cancellationToken)
            {
                return Task.FromResult(0);
            }

            public bool AllowMultiple
            {
                get { return false; }
            }
        }
    }
}
