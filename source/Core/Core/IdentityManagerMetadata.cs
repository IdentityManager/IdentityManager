/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System.Collections.Generic;

namespace Thinktecture.IdentityManager.Core
{
    public class IdentityManagerMetadata
    {
        public string UniqueIdentitiferClaimType { get; set; }
        public IEnumerable<ClaimMetadata> Claims { get; set; }
    }
}
