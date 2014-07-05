using BrockAllen.MembershipReboot;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MembershipReboot.Tests
{
    public class TestUserAccountRepository : QueryableUserAccountRepository<TestUserAccount>
    {
        public TestUserAccountRepository()
        {
            this.UseEqualsOrdinalIgnoreCaseForQueries = true;
        }

        public List<TestUserAccount> UserAccounts = new List<TestUserAccount>();

        protected override IQueryable<TestUserAccount> Queryable
        {
            get { return UserAccounts.AsQueryable(); }
        }

        public override TestUserAccount Create()
        {
            return new TestUserAccount();
        }

        public override void Add(TestUserAccount item)
        {
            UserAccounts.Add(item);
        }

        public override void Remove(TestUserAccount item)
        {
            UserAccounts.Remove(item);
        }

        public override void Update(TestUserAccount item)
        {
        }

        public override TestUserAccount GetByLinkedAccount(string tenant, string provider, string id)
        {
            var query =
                from a in UserAccounts
                where a.Tenant == tenant
                from la in a.LinkedAccounts
                where la.ProviderName == provider && la.ProviderAccountID == id
                select a;
            return query.SingleOrDefault();
        }

        public override TestUserAccount GetByCertificate(string tenant, string thumbprint)
        {
            var query =
                from a in UserAccounts
                where a.Tenant == tenant
                from c in a.Certificates
                where c.Thumbprint == thumbprint
                select a;
            return query.SingleOrDefault();
        }
    }
}
