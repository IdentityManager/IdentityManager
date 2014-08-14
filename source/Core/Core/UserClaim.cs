/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

using System.ComponentModel.DataAnnotations;
using Thinktecture.IdentityManager.Resources;
namespace Thinktecture.IdentityManager
{
    public class UserClaim
    {
        [Required(ErrorMessageResourceType = typeof(Messages), ErrorMessageResourceName = "PropertyTypeRequired")]
        public string Type { get; set; }
        public string Value { get; set; }
    }
}
