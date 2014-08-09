/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System.ComponentModel.DataAnnotations;
using Thinktecture.IdentityManager.Resources;

namespace Thinktecture.IdentityManager.Api.Models
{
    public class ClaimModel
    {
        [Required(ErrorMessageResourceType = typeof(Messages), ErrorMessageResourceName = "ClaimTypeRequired")]
        public string Type { get; set; }
        [Required(ErrorMessageResourceType = typeof(Messages), ErrorMessageResourceName = "ClaimValueRequired")]
        public string Value { get; set; }
    }
}
