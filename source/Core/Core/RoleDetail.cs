/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System.Collections.Generic;

namespace Thinktecture.IdentityManager
{
    public class RoleDetail : RoleSummary
    {
        public IEnumerable<Property> Properties { get; set; }
    }
}
