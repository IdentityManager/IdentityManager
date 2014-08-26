/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Linq;
using System.Security.Claims;
using System.Web.Http;
using Thinktecture.IdentityManager.Api.Filters;
using Thinktecture.IdentityManager.Assets;

namespace Thinktecture.IdentityManager.Api.Controllers
{
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
            var token = cp.Claims.Where(x => x.Type == Constants.ClaimTypes.BootstrapToken).Select(x => x.Value).FirstOrDefault();
            return new EmbeddedHtmlResult(Request, "Thinktecture.IdentityManager.Assets.Templates.index.html", token);
        }
    }
}
