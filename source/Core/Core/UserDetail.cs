/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System.Collections.Generic;

namespace Thinktecture.IdentityManager.Core
{
    public class UserDetail : UserResult
    {
        public IEnumerable<UserClaim> Properties { get; set; }
        public IEnumerable<UserClaim> Claims { get; set; }
    }
}
