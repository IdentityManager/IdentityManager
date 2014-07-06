using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AspNetIdentity.Tests
{
    public class TestStore : IUserStore<TestUser>
    {
        List<TestUser> users = new List<TestUser>();

        public Task CreateAsync(TestUser user)
        {
            users.Add(user);
            return Task.FromResult(0);
        }

        public Task DeleteAsync(TestUser user)
        {
            users.Remove(user);
            return Task.FromResult(0);
        }

        public Task<TestUser> FindByIdAsync(string userId)
        {
            return Task.FromResult(users.SingleOrDefault(x=>x.Id == userId));
        }

        public Task<TestUser> FindByNameAsync(string userName)
        {
            return Task.FromResult(users.SingleOrDefault(x => userName.Equals(x.UserName, StringComparison.OrdinalIgnoreCase)));
        }

        public Task UpdateAsync(TestUser user)
        {
            return Task.FromResult(0);
        }

        public void Dispose()
        {
        }
    }
}
