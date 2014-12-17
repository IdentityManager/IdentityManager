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
using System.Web.Http;
using System.Web.Http.ExceptionHandling;
using Thinktecture.IdentityManager.Configuration.Hosting;

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
                apiConfig.Routes.MapHttpRoute(Constants.RouteNames.Home,
                    "",
                    new { controller = "Page", action = "Index" });
                apiConfig.Routes.MapHttpRoute(Constants.RouteNames.OAuthFrameCallback,
                    "frame",
                    new { controller = "Page", action = "Frame" });
            }

            apiConfig.SuppressDefaultHostAuthentication();
            
            if (idmConfig.SecurityMode == SecurityMode.LocalMachine)
            {
                apiConfig.Filters.Add(new HostAuthenticationAttribute(Constants.LocalAuthenticationType));
            }
            else
            {
                apiConfig.Filters.Add(new HostAuthenticationAttribute(Constants.BearerAuthenticationType));
            }

            apiConfig.Filters.Add(new AuthorizeAttribute() { Roles = idmConfig.AdminRoleName });

            apiConfig.Formatters.Remove(apiConfig.Formatters.XmlFormatter);
            apiConfig.Formatters.Remove(apiConfig.Formatters.FormUrlEncodedFormatter);
            apiConfig.Formatters.JsonFormatter.SerializerSettings.ContractResolver =
                new Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver();

            //apiConfig.Services.Add(typeof(IExceptionLogger), new UserAdminExceptionLogger());

//#if DEBUG
//            apiConfig.Services.Add(typeof(IExceptionLogger), new TraceLogger());
//#endif
            apiConfig.Services.Add(typeof(IExceptionLogger), new LogProviderExceptionLogger());
        }

        //public class UserAdminExceptionLogger : ExceptionLogger
        //{
        //    public override void Log(ExceptionLoggerContext context)
        //    {
        //        var path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "App_Data");
        //        path = Path.Combine(path, "UserAdminException.txt");
        //        Directory.CreateDirectory(path);
        //        var msg = DateTime.Now.ToString() + Environment.NewLine + context.Exception.ToString() + Environment.NewLine + Environment.NewLine;
        //        File.AppendAllText(path, msg);
        //    }
        //}
    }
}
