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
using IdentityManager.Api.Filters;
using IdentityManager.Assets;
using IdentityManager.Configuration;

namespace IdentityManager.Api.Controllers
{
    [NoCache]
    [SecurityHeaders]
    public class PageController : ApiController
    {
        IdentityManagerOptions idmConfig;
        public PageController(IdentityManagerOptions idmConfig)
        {
            if (idmConfig == null) throw new ArgumentNullException("idmConfig");

            this.idmConfig = idmConfig;
        }

        [HttpGet]
        [AllowAnonymous]
        public IHttpActionResult Index()
        {
            return new EmbeddedHtmlResult(Request, "IdentityManager.Assets.Templates.index.html");
        }
        
        [HttpGet]
        [AllowAnonymous]
        public IHttpActionResult Frame()
        {
            return NotFound();
            //if (idmConfig.SecurityMode != SecurityMode.OAuth2)
            //{
                
            //}

            return new EmbeddedHtmlResult(Request, "IdentityManager.Assets.Templates.frame.html");
        }
    }
}
