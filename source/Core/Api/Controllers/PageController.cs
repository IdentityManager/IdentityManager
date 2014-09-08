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
    public class PageController : ApiController
    {
        IdentityManagerConfiguration idmConfig;
        public PageController(IdentityManagerConfiguration idmConfig)
        {
            if (idmConfig == null) throw new ArgumentNullException("idmConfig");

            this.idmConfig = idmConfig;
        }

        [HttpGet]
        [AllowAnonymous]
        public IHttpActionResult Index()
        {
            if (idmConfig.SecurityMode == SecurityMode.LocalMachine &&
                (User == null || User.Identity == null || User.Identity.IsAuthenticated == false))
            {
                return new EmbeddedHtmlResult(Request, "Thinktecture.IdentityManager.Assets.Templates.accessdenied.html");
            }

            return new EmbeddedHtmlResult(Request, "Thinktecture.IdentityManager.Assets.Templates.index.html", idmConfig.OAuth2Configuration);
        }
        
        [HttpGet]
        [AllowAnonymous]
        public IHttpActionResult Frame()
        {
            if (idmConfig.SecurityMode != SecurityMode.OAuth2)
            {
                return NotFound();
            }

            return new EmbeddedHtmlResult(Request, "Thinktecture.IdentityManager.Assets.Templates.frame.html");
        }
    }
}
