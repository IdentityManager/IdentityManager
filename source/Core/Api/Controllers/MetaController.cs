/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using Thinktecture.IdentityManager;
using Thinktecture.IdentityManager.Api.Filters;
using Thinktecture.IdentityManager.Api.Models;

namespace Thinktecture.IdentityManager.Api.Models.Controllers
{
    [NoCache]
    [RoutePrefix(Constants.MetadataRoutePrefix)]
    public class MetaController : ApiController
    {
        IIdentityManagerService userManager;
        IdentityManagerConfiguration config;
        public MetaController(IdentityManagerConfiguration config, IIdentityManagerService userManager)
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

            var links = new Dictionary<string, string>();
            links["users"] = Url.Link(Constants.RouteNames.GetUsers, null);
            if (meta.UserMetadata.SupportsCreate)
            {
                links["createUser"] = Url.Link(Constants.RouteNames.CreateUser, null);
            }

            var resource = new 
            {
                Data = new {
                    currentUser = new
                    {
                        username = User.Identity.Name
                    },
                    metadata = meta,
                },
                Links = links
            };
            return Ok(resource);
        }
    }
}
