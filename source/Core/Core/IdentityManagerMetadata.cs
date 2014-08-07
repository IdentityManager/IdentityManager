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

    public class UserMetadata
    {
        public UserMetadata()
        {
            this.Properties = new HashSet<PropertyMetadata>();
        }

        public bool SupportsCreate { get; set; }
        public bool SupportsDelete { get; set; }

        public bool SupportsClaims { get; set; }
        public ICollection<PropertyMetadata> Properties { get; set; }

        internal void Validate()
        {
            if (Properties == null) throw new InvalidOperationException("Properties not assigned.");
            foreach (var prop in Properties) prop.Validate();
        }
    }
}
