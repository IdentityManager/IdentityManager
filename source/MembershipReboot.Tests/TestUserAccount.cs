using BrockAllen.MembershipReboot;
using BrockAllen.MembershipReboot.Hierarchical;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MembershipReboot.Tests
{
    public class TestUserAccount : HierarchicalUserAccount
    {
        public int CustomIntProp { get; set; }
        public string CustomStringProp { get; set; }
    }
}
