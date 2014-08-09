/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System.Collections.Generic;
using System.Linq;

namespace Thinktecture.IdentityManager
{
    public class IdentityManagerResult
    {
        public static readonly IdentityManagerResult Success = new IdentityManagerResult();

        public IdentityManagerResult()
        {
        }

        public IdentityManagerResult(params string[] errors)
        {
            this.Errors = errors;
        }

        public IEnumerable<string> Errors { get; private set; }
        
        public bool IsSuccess
        {
            get { return Errors == null || !Errors.Any(); }
        }
    }
}
