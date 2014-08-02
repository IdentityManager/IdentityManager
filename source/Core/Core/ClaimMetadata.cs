/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Thinktecture.IdentityManager.Core
{
    public class ClaimMetadata
    {
        public string ClaimType { get; set; }
        public ClaimDataType DataType { get; set; }
        public string DisplayName { get; set; }
        public bool Required { get; set; }
        public IEnumerable<string> AllowedValues { get; set; }
    }
}
