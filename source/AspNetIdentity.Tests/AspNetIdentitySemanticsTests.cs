using Core.Tests.Core;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Thinktecture.IdentityManager.AspNetIdentity;
using Thinktecture.IdentityManager.Core;

namespace AspNetIdentity.Tests
{
    public class AspNetIdentitySemanticsTests : IdentityManagerSemanticsTests
    {
        UserManager<InMemoryUser> userManager;

        protected override IIdentityManagerService CreateIdentityManager()
        {
            var store = new InMemoryUserStore();
            userManager = new UserManager<InMemoryUser>(store);
            userManager.PasswordValidator = new PasswordValidator
            {
                RequiredLength = 4
            };
            return new IdentityManagerService<InMemoryUser, string>(userManager);
        }

        protected override bool ValidatePassword(string uid, string pwd)
        {
            return userManager.Find(uid, pwd) != null;
        }
    }
}
