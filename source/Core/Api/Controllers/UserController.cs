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
using Thinktecture.IdentityManager.Core;
using Thinktecture.IdentityManager.Core.Api.Filters;
using Thinktecture.IdentityManager.Core.Api.Models;
using Thinktecture.IdentityManager.Core.Resources;

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

        [HttpGet, Route("", Name=Constants.RouteNames.GetUsers)]
        public async Task<IHttpActionResult> GetUsersAsync(string filter = null, int start = 0, int count = 100)
        {
            var result = await userManager.QueryUsersAsync(filter, start, count);
            if (result.IsSuccess)
            {
                var meta = await userManager.GetMetadataAsync();
                var resource = new QueryResultResource(result.Result, Url, meta.UserMetadata);
                return Ok(resource);
            }

            return BadRequest(result.ToError());
        }

        [HttpPost, Route("", Name = Constants.RouteNames.CreateUser)]
        public async Task<IHttpActionResult> CreateUserAsync(CreateUserModel model)
        {
            var meta = await userManager.GetMetadataAsync();
            if (!meta.UserMetadata.SupportsCreate)
            {
                return MethodNotAllowed();
            } 
            
            if (model == null)
            {
                ModelState.AddModelError("", Messages.UserDataRequired);
            }

            if (ModelState.IsValid)
            {
                var result = await this.userManager.CreateUserAsync(model.Username, model.Password);
                if (result.IsSuccess)
                {
                    var url = Url.Link(Constants.RouteNames.GetUser, new { subject = result.Result.Subject });
                    var resource = new Resource
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

                var meta = await userManager.GetMetadataAsync();
                return Ok(new UserDetailResource(result.Result, Url, meta.UserMetadata));
            }

            return BadRequest(result.ToError());
        }

        [HttpDelete, Route("{subject}", Name = Constants.RouteNames.DeleteUser)]
        public async Task<IHttpActionResult> DeleteUserAsync(string subject)
        {
            var meta = await userManager.GetMetadataAsync();
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
            var meta = await this.userManager.GetMetadataAsync();
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

        private void ValidateProperty(string type, string value, UserMetadata userMetadata)
        {
            var prop = userMetadata.Properties.SingleOrDefault(x => x.Type == type);
            if (prop == null)
            {
                ModelState.AddModelError("", String.Format(Messages.PropertyInvalid, type));
            }
            else if (prop.Required && String.IsNullOrWhiteSpace(value))
            {
                ModelState.AddModelError("", String.Format(Messages.PropertyRequired, prop.Name));
            }
            else if (!String.IsNullOrWhiteSpace(value))
            {
                if (prop.DataType == PropertyDataType.Boolean)
                {
                    bool val;
                    if (!Boolean.TryParse(value, out val))
                    {
                        ModelState.AddModelError("", Messages.InvalidBoolean);
                    }
                }

                if (prop.DataType == PropertyDataType.Email)
                {
                    if (!value.Contains("@"))
                    {
                        ModelState.AddModelError("", Messages.InvalidEmail);
                    }
                }

                if (prop.DataType == PropertyDataType.Number)
                {
                    double d;
                    if (!Double.TryParse(value, out d))
                    {
                        ModelState.AddModelError("", Messages.InvalidNumber);
                    }
                }
                
                if (prop.DataType == PropertyDataType.Url)
                {
                    Uri uri;
                    if (!Uri.TryCreate(value, UriKind.Absolute, out uri) || 
                        (uri.Scheme != Uri.UriSchemeHttp && uri.Scheme != Uri.UriSchemeHttps))
                    {
                        ModelState.AddModelError("", Messages.InvalidUrl);
                    }
                }
            }
        }

        [HttpPost, Route("{subject}/claims", Name = Constants.RouteNames.AddClaim)]
        public async Task<IHttpActionResult> AddClaimAsync(string subject, ClaimModel model)
        {
            var meta = await userManager.GetMetadataAsync();
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
            var meta = await userManager.GetMetadataAsync();
            if (!meta.UserMetadata.SupportsClaims)
            {
                return NotFound();
            }
            
            if (String.IsNullOrWhiteSpace(subject))
            {
                ModelState["subject.String"].Errors.Clear();
                ModelState.AddModelError("", Messages.SubjectRequired);
            }
            if (String.IsNullOrWhiteSpace(type))
            {
                ModelState["type.String"].Errors.Clear();
                ModelState.AddModelError("", Messages.ClaimTypeRequired);
            }
            if (String.IsNullOrWhiteSpace(value))
            {
                ModelState["value.String"].Errors.Clear();
                ModelState.AddModelError("", Messages.ClaimValueRequired);
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState.ToError());
            }

            var result = await this.userManager.RemoveClaimAsync(subject, type, value);
            if (result.IsSuccess)
            {
                return NoContent();
            }

            return BadRequest(result.ToError());
        }
    }
}
