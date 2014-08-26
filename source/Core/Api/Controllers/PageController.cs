/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Net.Http;
using System.Linq;
using System.Security.Claims;
using System.Web.Http;
using Thinktecture.IdentityManager.Api.Filters;
using Thinktecture.IdentityManager.Assets;

namespace Thinktecture.IdentityManager.Api.Controllers
{
    [NoCache]
    [SecurityHeaders]
    [OverrideAuthorization, Authorize]
    [OverrideAuthentication]
    [HostAuthentication(Constants.LocalAuthenticationType)]
    [HostAuthentication(Constants.CookieAuthenticationType)]
    [HostAuthentication(Constants.ExternalOidcAuthenticationType)]
    public class PageController : ApiController
    {
        IdentityManagerConfiguration idmConfig;
        public PageController(IdentityManagerConfiguration idmConfig)
        {
            if (idmConfig == null) throw new ArgumentNullException("idmConfig");

            this.idmConfig = idmConfig;
        }

        [HttpGet]
        public IHttpActionResult Index()
        {
            var cp = (ClaimsPrincipal)User;
            var name = cp.Claims.Where(x=>x.Type==Constants.ClaimTypes.Name).Select(x=>x.Value).FirstOrDefault();
            var token = cp.Claims.Where(x => x.Type == Constants.ClaimTypes.BootstrapToken).Select(x => x.Value).FirstOrDefault();
            var model = new EmbeddedHtmlModel
            {
                FileName = "Thinktecture.IdentityManager.Assets.Templates.index.html",
                Username = name,
                Token = token,
                PathBase = Request.GetOwinContext().Request.PathBase.Value
            };
            if (this.idmConfig.SecurityMode != SecurityMode.LocalMachine)
            {
                model.LogoutUrl = Url.Link("logout", null);
            }
            return new EmbeddedHtmlResult(model);
        }
        
        [HttpGet]
        [AllowAnonymous]
        public IHttpActionResult Logout()
        {
            Request.GetOwinContext().Authentication.SignOut(Constants.CookieAuthenticationType);
            
            var model = new EmbeddedHtmlModel
            {
                FileName = "Thinktecture.IdentityManager.Assets.Templates.loggedout.html",
                PathBase = Request.GetOwinContext().Request.PathBase.Value
            };
            return new EmbeddedHtmlResult(model);
        }
    }
}
