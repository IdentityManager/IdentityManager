/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Linq;
using System.Threading.Tasks;
using Thinktecture.IdentityManager.Core;

namespace Thinktecture.IdentityManager.AspNetIdentity
{
    public class UserManagerFactory
    {
        static UserManagerFactory()
        {
            System.Data.Entity.Database.SetInitializer(new System.Data.Entity.CreateDatabaseIfNotExists<IdentityDbContext>());
        }
        
        public static IUserManager Create()
        {
            var db = new IdentityDbContext<IdentityUser>("DefaultConnection");
            var store = new UserStore<IdentityUser>(db);
            var mgr = new Microsoft.AspNet.Identity.UserManager<IdentityUser>(store);
            mgr.UserTokenProvider = new TokenProvider();
            return new UserManager<IdentityUser>(mgr, db);
        }
    }

    public class TokenProvider : IUserTokenProvider<IdentityUser, string>
    {
        public Task<string> GenerateAsync(string purpose, UserManager<IdentityUser, string> manager, IdentityUser user)
        {
            return Task.FromResult(purpose + user.SecurityStamp);
        }

        public Task<bool> IsValidProviderForUserAsync(UserManager<IdentityUser, string> manager, IdentityUser user)
        {
            return Task.FromResult(true);
        }

        public System.Threading.Tasks.Task NotifyAsync(string token, UserManager<IdentityUser, string> manager, IdentityUser user)
        {
            return Task.FromResult(0);
        }

        public System.Threading.Tasks.Task<bool> ValidateAsync(string purpose, string token, UserManager<IdentityUser, string> manager, IdentityUser user)
        {
            return Task.FromResult((purpose + user.SecurityStamp) == token);
        }
    }
}
