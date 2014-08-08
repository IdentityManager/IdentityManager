/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Linq;
using System.Collections.Generic;

namespace Thinktecture.IdentityManager.Core
{
    public class IdentityManagerMetadata
    {
        public IdentityManagerMetadata()
        {
            this.UserMetadata = new UserMetadata();
        }

        public UserMetadata UserMetadata { get; set; }

        internal void Validate()
        {
            if (UserMetadata == null) throw new InvalidOperationException("UserMetadata not assigned.");
            UserMetadata.Validate();
        }
    }
}
