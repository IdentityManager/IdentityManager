/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Collections.Generic;
using System.Linq;

namespace Thinktecture.IdentityManager
{
    public static class UserMetadataExtensions
    {
        public static IEnumerable<PropertyMetadata> GetCreateProperties(this UserMetadata userMetadata)
        {
            if (userMetadata == null) throw new ArgumentNullException("userMetadata");
            
            var exclude = userMetadata.CreateProperties.Select(x => x.Type);
            var additional = userMetadata.UpdateProperties.Where(x => !exclude.Contains(x.Type) && x.Required);
            return userMetadata.CreateProperties.Union(additional);
        }
    }
}
