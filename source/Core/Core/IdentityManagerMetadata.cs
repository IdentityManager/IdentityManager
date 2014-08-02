/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System.Collections.Generic;

namespace Thinktecture.IdentityManager.Core
{
    public class IdentityManagerMetadata
    {
        public bool SupportsPassword { get; set; }
        public bool SupportsEmail { get; set; }
        public bool SupportsPhone { get; set; }
        
        public IEnumerable<ClaimMetadata> Claims { get; set; }
        
        public bool SupportsRoleDefinitions { get; set; }
        
    }
}
