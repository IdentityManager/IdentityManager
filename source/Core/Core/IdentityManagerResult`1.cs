/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

namespace Thinktecture.IdentityManager.Core
{
    public class IdentityManagerResult<T> : IdentityManagerResult
    {
        public IdentityManagerResult(T result)
        {
            Result = result;
        }
        
        public IdentityManagerResult(params string[] errors)
            : base(errors)
        {
        }

        public T Result { get; private set; }
    }
}
