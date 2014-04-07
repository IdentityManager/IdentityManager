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

namespace Thinktecture.IdentityManager.Core.Api.Controllers
{
    public class PageController : ApiController
    {
        [Route("")]
        [HttpGet]
        public IHttpActionResult Index()
        {
            return new EmbeddedHtmlResult(Request, "Thinktecture.IdentityManager.Core.Assets.Templates.index.html");
        }
    }
}
