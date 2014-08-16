/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Linq;
using System.Collections.Generic;
using Thinktecture.IdentityManager.Resources;

namespace Thinktecture.IdentityManager
{
    public class RoleMetadata
    {
        public bool SupportsListing
        {
            get
            {
                return SupportsCreate || SupportsDelete;
            }
        }

        public bool SupportsCreate { get; set; }
        public bool SupportsDelete { get; set; }

        internal void Validate()
        {
        }
    }
}
