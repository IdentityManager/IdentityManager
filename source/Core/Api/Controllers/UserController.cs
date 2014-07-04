/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Thinktecture.IdentityManager.Core;
using Thinktecture.IdentityManager.Core.Api.Filters;
using Thinktecture.IdentityManager.Core.Resources;

namespace Thinktecture.IdentityManager.Api.Models.Controllers
{
    [RoutePrefix("api/users")]
    [NoCache]
    public class UserController : ApiController
    {
        IUserManager userManager;
        public UserController(IUserManager userManager)
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

        [HttpGet, Route("")]
        public async Task<IHttpActionResult> GetUsersAsync(string filter = null, int start = 0, int count = 100)
        {
            var result = await userManager.QueryUsersAsync(filter, start, count);
            if (result.IsSuccess)
            {
                return Ok(result.Result);
            }

            return BadRequest(result.ToError());
        }

        [HttpPost, Route("")]
        public async Task<IHttpActionResult> CreateUserAsync(CreateUserModel model)
        {
            if (model == null)
            {
                ModelState.AddModelError("", Messages.UserDataRequired);
            }

            if (ModelState.IsValid)
            {
                var result = await this.userManager.CreateUserAsync(model.Username, model.Password);
                if (result.IsSuccess)
                {
                    return Created(Url.Link("user", new { subject = result.Result.Subject }));
                }

                ModelState.AddErrors(result);
            }

            return BadRequest(ModelState.ToError());
        }

        [HttpGet, Route("{subject}", Name="user")]
        public async Task<IHttpActionResult> GetUserAsync(string subject)
        {
            var result = await this.userManager.GetUserAsync(subject);
            if (result.IsSuccess)
            {
                if (result.Result == null)
                {
                    return NotFound();
                }

                return Ok(result.Result);
            }

            return BadRequest(result.ToError());
        }
        
        [HttpDelete, Route("{subject}")]
        public async Task<IHttpActionResult> DeleteUserAsync(string subject)
        {
            var result = await this.userManager.DeleteUserAsync(subject);
            if (result.IsSuccess)
            {
                return NoContent();
            }

            return BadRequest(result.ToError());
        }

        [HttpPut, Route("{subject}/password")]
        public async Task<IHttpActionResult> SetPasswordAsync(string subject, PasswordModel model)
        {
            if (model == null)
            {
                ModelState.AddModelError("", Messages.PasswordDataRequired);
            }

            if (ModelState.IsValid)
            {
                var result = await this.userManager.SetPasswordAsync(subject, model.Password);
                if (result.IsSuccess)
                {
                    return NoContent();
                }

                ModelState.AddErrors(result);
            }

            return BadRequest(ModelState.ToError());
        }

        [HttpPut, Route("{subject}/email")]
        public async Task<IHttpActionResult> SetEmailAsync(string subject, EmailModel model)
        {
            if (model == null)
            {
                ModelState.AddModelError("", Messages.EmailDataRequired);
            }

            if (ModelState.IsValid)
            {
                var result = await this.userManager.SetEmailAsync(subject, model.Email);
                if (result.IsSuccess)
                {
                    return NoContent();
                }

                ModelState.AddErrors(result);
            }

            return BadRequest(ModelState.ToError());
        }

        [HttpPut, Route("{subject}/phone")]
        public async Task<IHttpActionResult> SetPhoneAsync(string subject, PhoneModel model)
        {
            if (model == null)
            {
                ModelState.AddModelError("", Messages.PhoneDataRequired);
            }

            if (ModelState.IsValid)
            {
                var result = await this.userManager.SetPhoneAsync(subject, model.Phone);
                if (result.IsSuccess)
                {
                    return NoContent();
                }

                ModelState.AddErrors(result);
            }

            return BadRequest(ModelState.ToError());
        }
        
        [HttpPost, Route("{subject}/claims")]
        public async Task<IHttpActionResult> AddClaim(string subject, ClaimModel model)
        {
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

        [HttpDelete, Route("{subject}/claims/{type}/{value}")]
        public async Task<IHttpActionResult> RemoveClaim(string subject, string type, string value)
        {
            var result = await this.userManager.DeleteClaimAsync(subject, type, value);
            if (result.IsSuccess)
            {
                return NoContent();
            }

            return BadRequest(result.ToError());
        }
    }
}
