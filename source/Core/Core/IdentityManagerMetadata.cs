/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
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
    }

    public class UserMetadata
    {
        public UserMetadata()
        {
            this.RequiredProperties = new HashSet<PropertyMetadata>();
        }

        public bool SupportsCreate { get; set; }
        public bool SupportsDelete { get; set; }

        public bool SupportsUsername { get; set; }
        public bool SupportsPassword { get; set; }
        public bool SupportsEmail { get; set; }
        public bool SupportsPhone { get; set; }
        public bool SupportsClaims { get; set; }

        public ICollection<PropertyMetadata> RequiredProperties { get; set; }
    }
}
