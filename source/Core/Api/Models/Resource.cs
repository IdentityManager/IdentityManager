using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Thinktecture.IdentityManager.Api.Models
{
    public class Resource
    {
        public object Data { get; set; }
        public object Links { get; set; }
    }

    public class Property : Resource
    {
        public object Meta { get; set; }
    }
}
