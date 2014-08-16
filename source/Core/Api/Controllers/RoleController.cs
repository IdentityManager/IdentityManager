/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Thinktecture.IdentityManager;
using Thinktecture.IdentityManager.Api.Filters;
using Thinktecture.IdentityManager.Api.Models;
using Thinktecture.IdentityManager.Resources;
using System.Collections.Generic;

namespace Thinktecture.IdentityManager.Api.Models.Controllers
{
    [RoutePrefix(Constants.RoleRoutePrefix)]
    [NoCache]
    public class RoleController : ApiController
    {
        IIdentityManagerService userManager;
        public RoleController(IIdentityManagerService userManager)
        {
            if (userManager == null) throw new ArgumentNullException("userManager");

            this.userManager = userManager;
        }

        public IHttpActionResult BadRequest<T>(T data)
        {
            return ResponseMessage(Request.CreateResponse(HttpStatusCode.BadRequest, data));
        }
        
        public IHttpActionResult NoContent()
        {
            return StatusCode(HttpStatusCode.NoContent);
        }

        public IHttpActionResult MethodNotAllowed()
        {
            return StatusCode(HttpStatusCode.MethodNotAllowed);
        }

        IdentityManagerMetadata _metadata;
        async Task<IdentityManagerMetadata> GetMetadataAsync()
        {
            if (_metadata == null)
            {
                _metadata = await userManager.GetMetadataAsync();
                if (_metadata == null) throw new InvalidOperationException("GetMetadataAsync returned null");
                _metadata.Validate();
            }

            return _metadata;
        }
        
        [HttpGet, Route("", Name = Constants.RouteNames.GetRoles)]
        public async Task<IHttpActionResult> GetRolesAsync(string filter = null, int start = 0, int count = 100)
        {
            var meta = await GetMetadataAsync();
            if (!meta.RoleMetadata.SupportsListing)
            {
                return MethodNotAllowed();
            }

            var result = await userManager.QueryRolesAsync(filter, start, count);
            if (result.IsSuccess)
            {
                var resource = new RoleQueryResultResource(result.Result, Url, meta.RoleMetadata);
                return Ok(resource);
            }

            return BadRequest(result.ToError());
        }

        [HttpPost, Route("", Name = Constants.RouteNames.CreateRole)]
        public async Task<IHttpActionResult> CreateRoleAsync(Property[] properties)
        {
            var meta = await GetMetadataAsync();
            if (!meta.RoleMetadata.SupportsCreate)
            {
                return MethodNotAllowed();
            }

            return Ok();
        }

        [HttpDelete, Route("{subject}", Name = Constants.RouteNames.DeleteRole)]
        public async Task<IHttpActionResult> DeleteUserAsync(string subject)
        {
            var meta = await GetMetadataAsync();
            if (!meta.RoleMetadata.SupportsDelete)
            {
                return MethodNotAllowed();
            }

            return Ok();
        }
    }
}
