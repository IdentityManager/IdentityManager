/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http.Routing;

namespace Thinktecture.IdentityManager.Api.Models
{
    public class CreateUserLink : Dictionary<string, object>
    {
        public CreateUserLink(UrlHelper url, UserMetadata userMetadata)
        {
            this["href"] = url.Link(Constants.RouteNames.CreateUser, null);

            var exclude = userMetadata.CreateProperties.Select(x => x.Type);
            var additional = userMetadata.UpdateProperties.Where(x => !exclude.Contains(x.Type) && x.Required);
            this["meta"] = userMetadata.CreateProperties.Union(additional);
        }
    }
}
