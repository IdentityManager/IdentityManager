using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Thinktecture.IdentityManager.Core;

namespace Core.Tests.Core
{
    public abstract class UserManagerSemanticsTests
    {
        IUserManager subject;
        abstract protected IUserManager CreateUserManager();

        [TestInitialize]
        public void Init()
        {
            subject = CreateUserManager();
        }


    }
}
