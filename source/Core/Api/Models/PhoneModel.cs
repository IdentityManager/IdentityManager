/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System.ComponentModel.DataAnnotations;

namespace Thinktecture.IdentityManager.Api.Models
{
    public class PhoneModel
    {
        [Required]
        public string Phone { get; set; }
    }
}
