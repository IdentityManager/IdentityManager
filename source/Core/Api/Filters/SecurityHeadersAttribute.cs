/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Web.Http.Filters;

namespace Thinktecture.IdentityManager.Api.Filters
{
    class SecurityHeadersAttribute : ActionFilterAttribute
    {
        public SecurityHeadersAttribute()
        {
            EnableXfo = true;
            EnableCto = true;
            EnableCsp = true;
        }

        public bool EnableXfo { get; set; }
        public bool EnableCto { get; set; }
        public bool EnableCsp { get; set; }

        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
            base.OnActionExecuted(actionExecutedContext);
            if (actionExecutedContext != null &&
                actionExecutedContext.Response != null &&
                actionExecutedContext.Response.IsSuccessStatusCode &&
                (actionExecutedContext.Response.Content == null ||
                 "text/html".Equals(actionExecutedContext.Response.Content.Headers.ContentType.MediaType, StringComparison.OrdinalIgnoreCase))
            )
            {
                if (EnableCto)
                {
                    actionExecutedContext.Response.Headers.Add("X-Content-Type-Options", "nosniff");
                }

                if (EnableXfo)
                {
                    actionExecutedContext.Response.Headers.Add("X-Frame-Options", "SAMEORIGIN");
                }

                if (EnableCsp)
                {
                    actionExecutedContext.Response.Headers.Add("Content-Security-Policy", "default-src 'self'; style-src 'self' 'unsafe-inline'; img-src *");
                }
            }
        }
    }
}
