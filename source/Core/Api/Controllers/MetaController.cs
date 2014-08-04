/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
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
            var resource = new Resource
            {
                Data = new {
                    metadata = await userManager.GetMetadataAsync(),
                    currentUser = new
                    {
                        username = User.Identity.Name
                    },
                },
                Links = new
                {
                    users = Url.Link(Constants.RouteNames.GetUsers, null),
                    createUser = Url.Link(Constants.RouteNames.CreateUser, null),
                }
            };
            return Ok(resource);
        }
    }
}
