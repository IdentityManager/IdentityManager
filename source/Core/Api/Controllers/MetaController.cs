/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using Thinktecture.IdentityManager.Core;
using Thinktecture.IdentityManager.Core.Api.Filters;
using Thinktecture.IdentityManager.Core.Api.Models;

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

        [Route("")]
        public async Task<IHttpActionResult> Get()
        {
            var meta = await userManager.GetMetadataAsync();

            var links = new Dictionary<string, string>();
            links["users"] = Url.Link(Constants.RouteNames.GetUsers, null);
            if (meta.UserMetadata.SupportsCreate)
            {
                links["createUser"] = Url.Link(Constants.RouteNames.CreateUser, null);
            }

            var resource = new Resource
            {
                Data = new {
                    //metadata = meta,
                    currentUser = new
                    {
                        username = User.Identity.Name
                    },
                },
                Links = links
            };
            return Ok(resource);
        }
    }
}
