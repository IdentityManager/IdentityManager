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

namespace Thinktecture.IdentityManager.Api.Models.Controllers
{
    [RoutePrefix(Constants.UserRoutePrefix)]
    [NoCache]
    public class UserController : ApiController
    {
        IIdentityManagerService userManager;
        public UserController(IIdentityManagerService userManager)
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
            return ResponseMessage(Request.CreateResponse(HttpStatusCode.NoContent));
        }

        public IHttpActionResult Created(string location)
        {
            var response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Location = new Uri(location);
            return ResponseMessage(response);
        }
        
        public IHttpActionResult MethodNotAllowed()
        {
            return ResponseMessage(Request.CreateResponse(HttpStatusCode.MethodNotAllowed));
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
        
        [HttpGet, Route("", Name = Constants.RouteNames.GetUsers)]
        public async Task<IHttpActionResult> GetUsersAsync(string filter = null, int start = 0, int count = 100)
        {
            var result = await userManager.QueryUsersAsync(filter, start, count);
            if (result.IsSuccess)
            {
                var meta = await GetMetadataAsync();
                var resource = new QueryResultResource(result.Result, Url, meta.UserMetadata);
                return Ok(resource);
            }

            return BadRequest(result.ToError());
        }

        [HttpPost, Route("", Name = Constants.RouteNames.CreateUser)]
        public async Task<IHttpActionResult> CreateUserAsync(CreateProperty[] properties)
        {
            var meta = await GetMetadataAsync();
            if (!meta.UserMetadata.SupportsCreate)
            {
                return MethodNotAllowed();
            }

            if (properties == null)
            {
                ModelState.AddModelError("", Messages.UserDataRequired);
            }

            ValidateProperties(meta.UserMetadata, properties);

            if (ModelState.IsValid)
            {
                var claims = properties.Select(x => new UserClaim { Type = x.Type, Value = x.Value });
                var result = await this.userManager.CreateUserAsync(claims);
                if (result.IsSuccess)
                {
                    var url = Url.Link(Constants.RouteNames.GetUser, new { subject = result.Result.Subject });
                    var resource = new 
                    {
                        Data = new { subject = result.Result.Subject },
                        Links = new { detail = url }
                    };
                    return Created(url, resource);
                }

                ModelState.AddErrors(result);
            }

            return BadRequest(ModelState.ToError());
        }

        [HttpGet, Route("{subject}", Name = Constants.RouteNames.GetUser)]
        public async Task<IHttpActionResult> GetUserAsync(string subject)
        {
            if (String.IsNullOrWhiteSpace(subject))
            {
                ModelState["subject.String"].Errors.Clear();
                ModelState.AddModelError("", Messages.SubjectRequired);
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState.ToError());
            } 
            
            var result = await this.userManager.GetUserAsync(subject);
            if (result.IsSuccess)
            {
                if (result.Result == null)
                {
                    return NotFound();
                }

                var meta = await GetMetadataAsync();
                return Ok(new UserDetailResource(result.Result, Url, meta.UserMetadata));
            }

            return BadRequest(result.ToError());
        }

        [HttpDelete, Route("{subject}", Name = Constants.RouteNames.DeleteUser)]
        public async Task<IHttpActionResult> DeleteUserAsync(string subject)
        {
            var meta = await GetMetadataAsync();
            if (!meta.UserMetadata.SupportsDelete)
            {
                return MethodNotAllowed();
            }

            if (String.IsNullOrWhiteSpace(subject))
            {
                ModelState["subject.String"].Errors.Clear();
                ModelState.AddModelError("", Messages.SubjectRequired);
            }
            
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState.ToError());
            }

            var result = await this.userManager.DeleteUserAsync(subject);
            if (result.IsSuccess)
            {
                return NoContent();
            }

            return BadRequest(result.ToError());
        }

        [HttpPut, Route("{subject}/properties/{type}", Name = Constants.RouteNames.UpdateProperty)]
        public async Task<IHttpActionResult> SetPropertyAsync(string subject, string type)
        {
            if (String.IsNullOrWhiteSpace(subject))
            {
                ModelState["subject.String"].Errors.Clear();
                ModelState.AddModelError("", Messages.SubjectRequired);
            }

            string value = await Request.Content.ReadAsStringAsync();
            var meta = await this.GetMetadataAsync();
            ValidateProperty(type, value, meta.UserMetadata);

            if (ModelState.IsValid)
            {
                var result = await this.userManager.SetPropertyAsync(subject, type, value);
                if (result.IsSuccess)
                {
                    return NoContent();
                }

                ModelState.AddErrors(result);
            }

            return BadRequest(ModelState.ToError());
        }

        [HttpPost, Route("{subject}/claims", Name = Constants.RouteNames.AddClaim)]
        public async Task<IHttpActionResult> AddClaimAsync(string subject, ClaimModel model)
        {
            var meta = await GetMetadataAsync();
            if (!meta.UserMetadata.SupportsClaims)
            {
                return NotFound();
            }
            
            if (String.IsNullOrWhiteSpace(subject))
            {
                ModelState["subject.String"].Errors.Clear();
                ModelState.AddModelError("", Messages.SubjectRequired);
            }

            if (model == null)
            {
                ModelState.AddModelError("", Messages.ClaimDataRequired);
            }

            if (ModelState.IsValid)
            {
                var result = await this.userManager.AddClaimAsync(subject, model.Type, model.Value);
                if (result.IsSuccess)
                {
                    return NoContent();
                }

                ModelState.AddErrors(result);
            }

            return BadRequest(ModelState.ToError());
        }

        [HttpDelete, Route("{subject}/claims/{type}/{value}", Name = Constants.RouteNames.RemoveClaim)]
        public async Task<IHttpActionResult> RemoveClaimAsync(string subject, string type, string value)
        {
            type = type.FromBase64UrlEncoded();
            value = value.FromBase64UrlEncoded();

            var meta = await GetMetadataAsync();
            if (!meta.UserMetadata.SupportsClaims)
            {
                return NotFound();
            }
            
            if (String.IsNullOrWhiteSpace(subject) || 
                String.IsNullOrWhiteSpace(type) || 
                String.IsNullOrWhiteSpace(value))
            {
                return NotFound();
            }

            var result = await this.userManager.RemoveClaimAsync(subject, type, value);
            if (result.IsSuccess)
            {
                return NoContent();
            }

            return BadRequest(result.ToError());
        }
        
        private void ValidateProperties(UserMetadata userMetadata, CreateProperty[] properties)
        {
            if (userMetadata == null) throw new ArgumentNullException("userMetadata");

            properties = properties ?? new CreateProperty[0];

            var required = userMetadata.UpdateProperties
                .Where(x => x.Required && x.Type != Constants.ClaimTypes.Username && x.Type != Constants.ClaimTypes.Password)
                .Select(x => x.Type)
                .ToArray();
            var provided = properties.Select(x => x.Type).ToArray();
            var missing = required.Except(provided);
            if (missing.Any())
            {
                var types = missing.Aggregate((x, y) => x + ", " + y);
                ModelState.AddModelError("", String.Format(Messages.MissingRequiredProperties, types));
            }
            
            foreach (var property in properties)
            {
                ValidateProperty(property.Type, property.Value, userMetadata);
            }
        }

        private void ValidateProperty(string type, string value, UserMetadata userMetadata)
        {
            if (userMetadata == null) throw new ArgumentNullException("userMetadata");

            if (String.IsNullOrWhiteSpace(type))
            {
                ModelState.AddModelError("", Messages.PropertyTypeRequired);
                return;
            }

            var prop = userMetadata.UpdateProperties.SingleOrDefault(x => x.Type == type);
            if (prop == null)
            {
                ModelState.AddModelError("", String.Format(Messages.PropertyInvalid, type));
            }
            else
            {
                var error = prop.Validate(value);
                if (error != null)
                {
                    ModelState.AddModelError("", error);
                }
            }
        }
    }
}
