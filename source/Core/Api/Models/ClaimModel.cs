/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System.ComponentModel.DataAnnotations;

namespace Thinktecture.IdentityManager.Api.Models
{
    public class ClaimModel
    {
        [Required]
        public string Type { get; set; }
        [Required]
        public string Value { get; set; }
    }
}
