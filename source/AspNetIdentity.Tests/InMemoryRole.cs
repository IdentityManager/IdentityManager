using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AspNetIdentity.Tests
{
    public class InMemoryRole : IRole
    {
        public InMemoryRole(string roleName)
        {
            Id = Guid.NewGuid().ToString();
            Name = roleName;
        }

        public virtual string Id { get; set; }
        public virtual string Name { get; set; }
    }

}
