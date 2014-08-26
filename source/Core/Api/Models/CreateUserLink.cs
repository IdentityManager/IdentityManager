/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System.Collections.Generic;
using System.Web.Http.Routing;

namespace Thinktecture.IdentityManager.Api.Models
{
    public class CreateUserLink : Dictionary<string, object>
    {
        public CreateUserLink(UrlHelper url, UserMetadata userMetadata)
        {
            this["href"] = url.Link(Constants.RouteNames.CreateUser, null);
            this["meta"] = userMetadata.GetCreateProperties();
        }
    }
}
