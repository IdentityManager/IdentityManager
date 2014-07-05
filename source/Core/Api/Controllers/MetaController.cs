/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Threading.Tasks;
using System.Web.Http;
using Thinktecture.IdentityManager.Core;

namespace Thinktecture.IdentityManager.Api.Models.Controllers
{
    [RoutePrefix("api")]
    public class MetaController : ApiController
    {
        IIdentityManagerService userManager;
        public MetaController(IIdentityManagerService userManager)
        {
            if (userManager == null) throw new ArgumentNullException("userManager");

            this.userManager = userManager;
        }

        [Route("")]
        public async Task<IHttpActionResult> GetAsync()
        {
            return Ok(await userManager.GetMetadataAsync());
        }
        
        [Route("admin")]
        public IHttpActionResult Get()
        {
            return Ok(new
            {
                username = "Admin Username"
            });
        }
    }
}
