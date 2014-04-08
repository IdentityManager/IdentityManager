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
            return new UserManager<IdentityUser>(mgr, db);
        }
    }
}
