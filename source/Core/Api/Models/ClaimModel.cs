/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System.ComponentModel.DataAnnotations;
using Thinktecture.IdentityManager.Core.Api.Validation;
using Thinktecture.IdentityManager.Core.Resources;

namespace Thinktecture.IdentityManager.Api.Models
{
    public class ClaimModel
    {
        [Required(ErrorMessageResourceType = typeof(Messages), ErrorMessageResourceName = "ClaimTypeRequired")]
        [NoUrlCharactersAttribute]
        public string Type { get; set; }
        [Required(ErrorMessageResourceType = typeof(Messages), ErrorMessageResourceName = "ClaimValueRequired")]
        [NoUrlCharactersAttribute]
        public string Value { get; set; }
    }
}
