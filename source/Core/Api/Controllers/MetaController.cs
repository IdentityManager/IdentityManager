/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Threading.Tasks;
using System.Web.Http;
using Thinktecture.IdentityManager.Core;
using Thinktecture.IdentityManager.Core.Api.Filters;

namespace Thinktecture.IdentityManager.Api.Models.Controllers
{
    [RoutePrefix("api")]
    [NoCache]
    public class MetaController : ApiController
    {
        IIdentityManagerService userManager;
        public MetaController(IIdentityManagerService userManager)
        {
            if (userManager == null) throw new ArgumentNullException("userManager");

            this.userManager = userManager;
        }

        [Route("")]
        public IHttpActionResult Get()
        {
            return Ok(new {
                metadata = Url.Link("metadata", null),
                currentUser = Url.Link("currentUser", null),
                users = Url.Link("getUsers", null),
                createUser = Url.Link("createUser", null),
            });
        }

        [Route("metadata", Name = "metadata")]
        public async Task<IHttpActionResult> GetMetadataAsync()
        {
            return Ok(await userManager.GetMetadataAsync());
        }
        
        [Route("currentuser", Name="currentUser")]
        public IHttpActionResult GetCurrentUser()
        {
            return Ok(new
            {
                username = User.Identity.Name
            });
        }
    }
}
