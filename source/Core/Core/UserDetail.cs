/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System.Collections.Generic;

namespace Thinktecture.IdentityManager.Core
{
    public class UserDetail : UserResult
    {
        public string Email { get; set; }
        public string Phone { get; set; }

        public IEnumerable<UserClaim> Claims { get; set; }
    }
}
