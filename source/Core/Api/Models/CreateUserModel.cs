/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System.ComponentModel.DataAnnotations;
using Thinktecture.IdentityManager.Core.Resources;

namespace Thinktecture.IdentityManager.Api.Models
{
    public class CreateUserModel
    {
        [Required(ErrorMessageResourceType = typeof(Messages), ErrorMessageResourceName = "UsernameRequired")]
        public string Username { get; set; }
        [Required(ErrorMessageResourceType = typeof(Messages), ErrorMessageResourceName = "PasswordRequired")]
        public string Password { get; set; }
    }
}
