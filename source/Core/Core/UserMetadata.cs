/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Linq;
using System.Collections.Generic;

namespace Thinktecture.IdentityManager
{
    public class UserMetadata
    {
        public bool SupportsCreate { get; set; }
        public bool SupportsDelete { get; set; }

        public bool SupportsClaims { get; set; }
        public IEnumerable<PropertyMetadata> Properties { get; set; }

        internal void Validate()
        {
            if (Properties == null) Properties = Enumerable.Empty<PropertyMetadata>();
            foreach (var prop in Properties) prop.Validate();
        }
    }
}
