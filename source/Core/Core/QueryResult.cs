/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System.Collections.Generic;

namespace Thinktecture.IdentityManager
{
    public class QueryResult<T>
    {
        public int Start { get; set; }
        public int Count { get; set; }
        public int Total { get; set; }
        public string Filter { get; set; }
        public IEnumerable<T> Items { get; set; }
    }
}
