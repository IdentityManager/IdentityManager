using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AspNetIdentity.Tests
{
    public class TestUser : IUser
    {
        public string Id { get; set; }
        public string UserName { get; set; }
    }
}
