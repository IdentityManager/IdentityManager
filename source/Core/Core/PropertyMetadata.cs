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
    public class PropertyMetadata
    {
        public string Identifier { get; set; }
        public string DisplayName { get; set; }
        public ClaimDataType DataType { get; set; }
        public IEnumerable<string> AllowedValues { get; set; }
    }
}
