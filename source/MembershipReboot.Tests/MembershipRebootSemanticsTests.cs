using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Core.Tests.Core;
using Thinktecture.IdentityManager.Core;
using Thinktecture.IdentityManager.MembershipReboot;
using BrockAllen.MembershipReboot;

namespace MembershipReboot.Tests
{
    [TestClass]
    public class MembershipRebootSemanticsTests : UserManagerSemanticsTests
    {
        protected override IUserManager CreateUserManager()
        {
            var repository = new TestUserAccountRepository();
            var service = new UserAccountService<TestUserAccount>(repository);
            return new UserManager<TestUserAccount>(service, null, null);
        }
    }
}
