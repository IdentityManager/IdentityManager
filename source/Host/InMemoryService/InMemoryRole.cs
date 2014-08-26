/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

using System;
using System.ComponentModel.DataAnnotations;

namespace Thinktecture.IdentityManager.Host.InMemoryService
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