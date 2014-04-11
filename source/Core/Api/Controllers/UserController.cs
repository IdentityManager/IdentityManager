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

namespace Thinktecture.IdentityManager.Api.Models.Controllers
{
    [RoutePrefix("api")]
    [NoCache]
    public class UserController : ApiController
    {
        IUserManager userManager;
        public UserController(IUserManager userManager)
        {
            if (userManager == null) throw new ArgumentNullException("userManager");

            this.userManager = userManager;
        }

        [Route("users")]
        [HttpGet]
        public async Task<IHttpActionResult> GetUsersAsync(string filter = null, int start = 0, int count = 100)
        {
            var result = await userManager.QueryUsersAsync(filter, start, count);
            if (result.IsSuccess)
            {
                return Ok(result.Result);
            }

            return ResponseMessage(Request.CreateResponse(HttpStatusCode.InternalServerError, result.Errors));
        }

        [Route("users")]
        public async Task<IHttpActionResult> GetUserAsync(string subject)
        {
            var result = await this.userManager.GetUserAsync(subject);
            if (result.IsSuccess)
            {
                return Ok(result.Result);
            }

            return ResponseMessage(Request.CreateResponse(HttpStatusCode.InternalServerError, result.Errors));
        }

        [Route("users")]
        [HttpPost]
        public async Task<IHttpActionResult> Create(CreateUser model)
        {
            if (model == null)
            {
                ModelState.AddModelError("", "Data required");
            }

            if (ModelState.IsValid)
            {
                var result = await this.userManager.CreateUserAsync(model.Username, model.Password);
                if (result.IsSuccess)
                {
                    return Ok(result.Result);
                }

                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("", error);
                }
            }

            return BadRequest(ModelState.GetErrorMessage());
        }

        [Route("users/delete")]
        [HttpPost]
        public async Task<IHttpActionResult> DeleteUserAsync(DeleteUser model)
        {
            if (model == null)
            {
                ModelState.AddModelError("", "Data required");
            }

            if (ModelState.IsValid)
            {
                var result = await this.userManager.DeleteUserAsync(model.Subject);
                if (result.IsSuccess)
                {
                    return Ok();
                }

                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("", error);
                }
            }

            return BadRequest(ModelState.GetErrorMessage());
        }

        [Route("password")]
        [HttpPost]
        public async Task<IHttpActionResult> SetPassword(SetPassword model)
        {
            if (model == null)
            {
                ModelState.AddModelError("", "Data required");
            }

            if (ModelState.IsValid)
            {
                var result = await this.userManager.SetPasswordAsync(model.Subject, model.Password);
                if (result.IsSuccess)
                {
                    return Ok(UserManagerResult.Success);
                }

                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("", error);
                }
            }

            return BadRequest(ModelState.GetErrorMessage());
        }

        [Route("email")]
        [HttpPost]
        public async Task<IHttpActionResult> SetEmail(SetEmail model)
        {
            if (model == null)
            {
                ModelState.AddModelError("", "Data required");
            }

            if (ModelState.IsValid)
            {
                var result = await this.userManager.SetEmailAsync(model.Subject, model.Email);
                if (result.IsSuccess)
                {
                    return Ok(UserManagerResult.Success);
                }

                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("", error);
                }
            }

            return BadRequest(ModelState.GetErrorMessage());
        }

        [Route("phone")]
        [HttpPost]
        public async Task<IHttpActionResult> SetPhone(SetPhone model)
        {
            if (model == null)
            {
                ModelState.AddModelError("", "Data required");
            }

            if (ModelState.IsValid)
            {
                var result = await this.userManager.SetPhoneAsync(model.Subject, model.Phone);
                if (result.IsSuccess)
                {
                    return Ok(UserManagerResult.Success);
                }

                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("", error);
                }
            }

            return BadRequest(ModelState.GetErrorMessage());
        }
        
        [Route("claims/add")]
        [HttpPost]
        public async Task<IHttpActionResult> AddClaim(Claim model)
        {
            if (model == null)
            {
                ModelState.AddModelError("", "Data required");
            }

            if (ModelState.IsValid)
            {
                var result = await this.userManager.AddClaimAsync(model.Subject, model.Type, model.Value);
                if (result.IsSuccess)
                {
                    return Ok(UserManagerResult.Success);
                }

                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("", error);
                }
            }

            return BadRequest(ModelState.GetErrorMessage());
        }

        [Route("claims/remove")]
        [HttpPost]
        public async Task<IHttpActionResult> RemoveClaim(Claim model)
        {
            if (model == null)
            {
                ModelState.AddModelError("", "Data required");
            }

            if (ModelState.IsValid)
            {
                var result = await this.userManager.DeleteClaimAsync(model.Subject, model.Type, model.Value);
                if (result.IsSuccess)
                {
                    return Ok(UserManagerResult.Success);
                }

                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("", error);
                }
            }

            return BadRequest(ModelState.GetErrorMessage());
        }
    }
}
