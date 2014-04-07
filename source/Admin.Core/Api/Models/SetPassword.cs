/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System.ComponentModel.DataAnnotations;

namespace Thinktecture.IdentityManager.Api.Models
{
    public class SetPassword
    {
        [Required]
        public string Subject { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
