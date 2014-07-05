using System;
using Thinktecture.IdentityManager.Core;
using Xunit;

namespace Core.Tests.Core
{
    public abstract class IdentityManagerSemanticsTests
    {
        public IdentityManagerSemanticsTests()
        {
            subject = CreateIdentityManager();
        }

        IIdentityManagerService subject;
        abstract protected IIdentityManagerService CreateIdentityManager();

        [Fact]
        public void Subject_IsNotNull()
        {
            Assert.NotNull(subject);
        }
        
    }
}
