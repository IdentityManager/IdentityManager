/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

namespace Thinktecture.IdentityManager
{
    public abstract class ExecutablePropertyMetadata : PropertyMetadata
    {
        public abstract string Get(object instance);
        public abstract void Set(object instance, string value);
    }
}
