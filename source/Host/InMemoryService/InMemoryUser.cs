/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;

namespace Thinktecture.IdentityManager.Host.InMemoryService
{
    public class InMemoryUserBase
    {
        public InMemoryUserBase()
        {
            Claims = new HashSet<Claim>();
            Subject = Guid.NewGuid().ToString();
        }

        public string Subject { get; set; }

        [Required]
        public string Username { get; set; }

        [DataType(DataType.Password)]
        [Required]
        public string Password { get; set; }

        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        public string Mobile { get; set; }

        public ICollection<Claim> Claims { get; set; }
    }

    public class InMemoryUser : InMemoryUserBase
    {
        [Display(Name="First Name")]
        public string FirstName { get; set; }
        [Display(Name = "Last Name")]
        public string LastName { get; set; }
        public int Age { get; set; }
        public bool IsNice { get; set; }
    }
}