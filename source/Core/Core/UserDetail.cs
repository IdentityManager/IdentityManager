/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System.Collections.Generic;

namespace Thinktecture.IdentityManager
{
    public class UserDetail : UserSummary
    {
        public IEnumerable<PropertyValue> Properties { get; set; }
        public IEnumerable<ClaimValue> Claims { get; set; }
    }
}
