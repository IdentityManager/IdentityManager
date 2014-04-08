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
            config = new MembershipRebootConfiguration();
            config.PasswordHashingIterationCount = 10000;
            config.RequireAccountVerification = false;
        }
        
        public static IUserManager Create()
        {
            var repo = new DefaultUserAccountRepository();
            repo.QueryFilter = Filter;
            repo.QuerySort = Sort;
            var svc = new UserAccountService(config, repo);
            return new UserManager<UserAccount>(svc, repo, repo);
        }

        static IQueryable<RelationalUserAccount> Filter(IQueryable<RelationalUserAccount> query, string filter)
        {
            return
                from acct in query
                let claims = (from claim in acct.ClaimCollection
                              where claim.Type == Constants.ClaimTypes.Name && claim.Value.Contains(filter)
                              select claim)
                where
                    acct.Username.Contains(filter) || claims.Any()
                select acct;
        }

        static IQueryable<RelationalUserAccount> Sort(IQueryable<RelationalUserAccount> query)
        {
            return
                from acct in query
                let display = (from claim in acct.ClaimCollection
                               where claim.Type == Constants.ClaimTypes.Name
                               select claim.Value).FirstOrDefault()
                orderby display ?? acct.Username
                select acct;
        }
    }
}
