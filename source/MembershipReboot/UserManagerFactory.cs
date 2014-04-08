/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using BrockAllen.MembershipReboot;
using BrockAllen.MembershipReboot.Ef;
using BrockAllen.MembershipReboot.Relational;
using System.Linq;
using Thinktecture.IdentityManager.Core;

namespace Thinktecture.IdentityManager.MembershipReboot
{
    public class UserManagerFactory
    {
        static MembershipRebootConfiguration config;
        static UserManagerFactory()
        {
            System.Data.Entity.Database.SetInitializer(new System.Data.Entity.MigrateDatabaseToLatestVersion<DefaultMembershipRebootDatabase, BrockAllen.MembershipReboot.Ef.Migrations.Configuration>());

            config = new MembershipRebootConfiguration();
            config.PasswordHashingIterationCount = 10000;
            config.RequireAccountVerification = false;
        }
        
        public static IUserManager Create()
        {
            var repo = new DefaultUserAccountRepository();
            repo.QueryFilter = RelationalUserAccountQuery.Filter;
            repo.QuerySort = RelationalUserAccountQuery.Sort;
            var svc = new UserAccountService(config, repo);
            return new UserManager<UserAccount>(svc, repo, repo);
        }
    }
}
