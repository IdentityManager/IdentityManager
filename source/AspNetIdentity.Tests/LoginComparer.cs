using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AspNetIdentity.Tests
{
    public class LoginComparer : IEqualityComparer<UserLoginInfo>
    {
        public bool Equals(UserLoginInfo x, UserLoginInfo y)
        {
            return x.LoginProvider == y.LoginProvider && x.ProviderKey == y.ProviderKey;
        }


        public int GetHashCode(UserLoginInfo obj)
        {
            return (obj.ProviderKey + "--" + obj.LoginProvider).GetHashCode();
        }
    }

}
