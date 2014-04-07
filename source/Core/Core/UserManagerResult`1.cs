/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

namespace Thinktecture.IdentityManager.Core
{
    public class UserManagerResult<T> : UserManagerResult
    {
        public UserManagerResult(T result)
        {
            Result = result;
        }
        
        public UserManagerResult(params string[] errors)
            : base(errors)
        {
        }

        public T Result { get; private set; }
    }
}
