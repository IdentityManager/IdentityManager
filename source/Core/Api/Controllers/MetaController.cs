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

using IdentityManager.Api.Filters;
using IdentityManager.Configuration;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web.Http;

namespace IdentityManager.Api.Models.Controllers
{
    [NoCache]
    [RoutePrefix(Constants.MetadataRoutePrefix)]
    public class MetaController : ApiController
    {
        IIdentityManagerService userManager;
        IdentityManagerOptions config;
        public MetaController(IdentityManagerOptions config, IIdentityManagerService userManager)
        {
            if (config == null) throw new ArgumentNullException("config");
            if (userManager == null) throw new ArgumentNullException("userManager");

            this.config = config;
            this.userManager = userManager;
        }

        IdentityManagerMetadata _metadata;
        async Task<IdentityManagerMetadata> GetMetadataAsync()
        {
            if (_metadata == null)
            {
                _metadata = await this.userManager.GetMetadataAsync();
                if (_metadata == null) throw new InvalidOperationException("GetMetadataAsync returned null");
                _metadata.Validate();
            }

            return _metadata;
        }

        [Route("")]
        public async Task<IHttpActionResult> Get()
        {
            var meta = await GetMetadataAsync();

            var data = new Dictionary<string, object>();
            
            var cp = (ClaimsPrincipal)User;
            var name = cp.Identity.Name;
            data.Add("currentUser", new {
                username = name
            });

            var links = new Dictionary<string, object>();
            links["users"] = Url.Link(Constants.RouteNames.GetUsers, null);
            if (meta.RoleMetadata.SupportsListing)
            {
                links["roles"] = Url.Link(Constants.RouteNames.GetRoles, null);
            }
            if (meta.UserMetadata.SupportsCreate)
            {
                links["createUser"] = new CreateUserLink(Url, meta.UserMetadata);
            }
            if (meta.RoleMetadata.SupportsCreate)
            {
                links["createRole"] = new CreateRoleLink(Url, meta.RoleMetadata);
            }

            return Ok(new 
            {
                Data = data,
                Links = links
            });
        }
    }
}
