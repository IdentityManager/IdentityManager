/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System.Collections.Generic;
using System.Linq;

namespace Thinktecture.IdentityManager.Core
{
    public class UserManagerResult
    {
        public static readonly UserManagerResult Success = new UserManagerResult();

        public UserManagerResult(params string[] errors)
        {
            this.Errors = errors;
        }

        public IEnumerable<string> Errors { get; private set; }
        
        public bool IsSuccess
        {
            get { return Errors == null || !Errors.Any(); }
        }

        public bool IsError
        {
            get { return !IsSuccess; }
        }
    }
}
