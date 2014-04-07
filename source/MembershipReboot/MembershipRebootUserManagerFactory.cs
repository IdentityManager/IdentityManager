/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using BrockAllen.MembershipReboot;
using BrockAllen.MembershipReboot.Ef;
using Thinktecture.IdentityManager.Core;

namespace Thinktecture.IdentityManager.MembershipReboot
{
    public class MembershipRebootUserManagerFactory
    {
        static MembershipRebootConfiguration config;
        static MembershipRebootUserManagerFactory()
        {
            config = new MembershipRebootConfiguration();
            config.PasswordHashingIterationCount = 10000;
            config.RequireAccountVerification = false;
        }
        
        public static IUserManager Create()
        {
            var repo = new DefaultUserAccountRepository();
            var svc = new UserAccountService(config, repo);
            return new MembershipRebootUserManager(svc, repo, repo);
        }
    }
}
