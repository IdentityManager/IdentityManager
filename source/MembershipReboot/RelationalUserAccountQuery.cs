using BrockAllen.MembershipReboot.Relational;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Thinktecture.IdentityManager.Core;

namespace Thinktecture.IdentityManager.MembershipReboot
{
    public class RelationalUserAccountQuery
    {
        public static IQueryable<RelationalUserAccount> Filter(IQueryable<RelationalUserAccount> query, string filter)
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

        public static IQueryable<RelationalUserAccount> Sort(IQueryable<RelationalUserAccount> query)
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
