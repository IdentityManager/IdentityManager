using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Thinktecture.IdentityManager.Core;

namespace Thinktecture.IdentityManager.Host.MembershipReboot
{
    public class MembershipRebootIdentityManagerFactory
    {
        //static MembershipRebootConfiguration config;
        //static IdentityManagerFactory()
        //{
        //    System.Data.Entity.Database.SetInitializer(new System.Data.Entity.MigrateDatabaseToLatestVersion<DefaultMembershipRebootDatabase, BrockAllen.MembershipReboot.Ef.Migrations.Configuration>());

        //    config = new MembershipRebootConfiguration();
        //    config.PasswordHashingIterationCount = 10000;
        //    config.RequireAccountVerification = false;
        //}
        
        public static IIdentityManagerService Create()
        {
            //var repo = new DefaultUserAccountRepository();
            //repo.QueryFilter = RelationalUserAccountQuery.Filter;
            //repo.QuerySort = RelationalUserAccountQuery.Sort;
            //var svc = new UserAccountService(config, repo);
            return null;
            //return new UserManager<UserAccount>(svc, repo, repo);
        }
    }
}