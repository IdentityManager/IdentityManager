/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System.ComponentModel.DataAnnotations;
using Thinktecture.IdentityManager.Core.Resources;

namespace Thinktecture.IdentityManager.Api.Models
{
    public class PhoneModel
    {
        [Required(ErrorMessageResourceType = typeof(Messages), ErrorMessageResourceName = "PhoneRequired")]
        public string Phone { get; set; }
    }
}
