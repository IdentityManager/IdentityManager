/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Claims;
using System.Web;

namespace Thinktecture.IdentityManager.Host
{
    public struct Foo { }

    public class InMemoryUserBase
    {
        public int BaseInt { get; set; }
        public int BaseString { get; set; }

        // subject is not editable, so no metadata
        public string Subject { get; set; }

        // these all be included in the metadata
        [Required]
        public string Username { get; set; }

        [DataType(DataType.Password)]
        [Required]
        public string Password { get; set; }

        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        public string Mobile { get; set; }
    }

    public enum Bar {
        A, B, C
    }

    public class InMemoryUser : InMemoryUserBase
    {
        public InMemoryUser()
        {
            Claims = new HashSet<Claim>();
            Subject = Guid.NewGuid().ToString();
        }

        // these should all be ignored in the metadata
        public Bar Bar { get; set; }
        public int[] ints { get; set; }
        public InMemoryUser other { get; set; }
        public Foo foo { get; set; }
        public Foo? nullablefoo { get; set; }

        [ReadOnly(true)]
        public int someintreadonly { get; set; }
        public int someintnoset { get { return 5; } }

        // these primitives should be included in the metadata
        public int someint { get; set; }
        public int? somenullint { get; set; }
        [Required]
        public int? requirednullableint { get; set; }

        // these custom properties should be included in the metadata
        [Display(Name="First Name")]
        public string FirstName { get; set; }
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        // non-primitives not included in meta
        public ICollection<Claim> Claims { get; set; }
    }
}