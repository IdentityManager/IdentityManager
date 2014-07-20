using System;
using Core.Tests.Core;
using Thinktecture.IdentityManager.Core;
using Thinktecture.IdentityManager.MembershipReboot;
using BrockAllen.MembershipReboot;

namespace MembershipReboot.Tests
{
    public class MembershipRebootSemanticsTests : IdentityManagerSemanticsTests
    {
        UserAccountService<TestUserAccount> userAccountService;

        protected override IIdentityManagerService CreateIdentityManager()
        {
            var config = new MembershipRebootConfiguration<TestUserAccount>();
            config.RequireAccountVerification = false;
            config.PasswordHashingIterationCount = 100;
            
            var repository = new TestUserAccountRepository();
            userAccountService = new UserAccountService<TestUserAccount>(config, repository);
            return new IdentityManagerService<TestUserAccount>(userAccountService, repository);
        }

        protected override bool ValidatePassword(string uid, string pwd)
        {
            return userAccountService.Authenticate(uid, pwd);
        }
    }
}
