using Core.Tests.Core;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Thinktecture.IdentityManager.AspNetIdentity;
using Thinktecture.IdentityManager.Core;

namespace AspNetIdentity.Tests
{
    //public class AspNetIdentitySemanticsTests : IdentityManagerSemanticsTests
    //{
    //    UserManager<TestUser> userManager;

    //    protected override IIdentityManagerService CreateIdentityManager()
    //    {
    //        var store = new TestStore();
    //        userManager = new UserManager<TestUser>(store);
    //        return new IdentityManager<TestUser>(userManager);
    //    }

    //    protected override bool ValidatePassword(string uid, string pwd)
    //    {
    //        return userAccountService.Authenticate(uid, pwd);
    //    }
    //}
}
