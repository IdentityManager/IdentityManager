/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Claims;
using System.Web;

namespace Thinktecture.IdentityManager.Host
{
    public class InMemoryRole
    {
        public InMemoryRole()
        {
            ID = Guid.NewGuid().ToString();
        }

        public string ID { get; set; }

        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
    }
}