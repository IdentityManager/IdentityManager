/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using Thinktecture.IdentityManager.Assets;
using Thinktecture.IdentityManager.Api.Filters;

namespace Thinktecture.IdentityManager.Api.Controllers
{
    [SecurityHeaders]
    public class PageController : ApiController
    {
        [HttpGet]
        public IHttpActionResult Index()
        {
            return new EmbeddedHtmlResult(Request, "Thinktecture.IdentityManager.Assets.Templates.index.html");
        }
    }
}
