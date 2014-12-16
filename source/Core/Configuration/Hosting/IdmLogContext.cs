using System;
using System.Collections.Generic;

namespace Thinktecture.IdentityManager.Configuration.Hosting
{
    public class IdmLogContext
    {
        public Exception Exception { get; set; }
        public Dictionary<string, IEnumerable<string>> RequestHeaders { get; set; }
        public Uri RequestUri { get; set; }
    }
}
