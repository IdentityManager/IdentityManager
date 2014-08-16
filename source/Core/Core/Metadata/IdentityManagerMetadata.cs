/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Linq;
using System.Collections.Generic;

namespace Thinktecture.IdentityManager
{
    public class IdentityManagerMetadata
    {
        public IdentityManagerMetadata()
        {
            this.UserMetadata = new UserMetadata();
            this.RoleMetadata = new RoleMetadata();
        }

        public UserMetadata UserMetadata { get; set; }
        public RoleMetadata RoleMetadata { get; set; }

        internal void Validate()
        {
            if (UserMetadata == null) throw new InvalidOperationException("UserMetadata not assigned.");
            UserMetadata.Validate();
            
            if (RoleMetadata == null) throw new InvalidOperationException("RoleMetadata not assigned.");
            RoleMetadata.Validate();
        }
    }
}
