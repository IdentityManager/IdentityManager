using System;
using Core.Tests.Core;
using Thinktecture.IdentityManager.Core;
using Thinktecture.IdentityManager.MembershipReboot;
using BrockAllen.MembershipReboot;

namespace MembershipReboot.Tests
{
    public class MembershipRebootSemanticsTests : IdentityManagerSemanticsTests
    {
        protected override IIdentityManagerService CreateIdentityManager()
        {
            var repository = new TestUserAccountRepository();
            var service = new UserAccountService<TestUserAccount>(repository);
            return null;// new UserManager<TestUserAccount>(service, null, null);
        }
    }
}
