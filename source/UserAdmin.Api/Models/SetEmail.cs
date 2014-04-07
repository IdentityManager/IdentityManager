/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System.ComponentModel.DataAnnotations;

namespace Thinktecture.IdentityManager.Api.Models
{
    public class SetEmail
    {
        [Required]
        public string Subject { get; set; }
        [Required]
        public string Email { get; set; }
    }
}
