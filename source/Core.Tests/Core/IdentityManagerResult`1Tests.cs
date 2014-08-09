using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Thinktecture.IdentityManager;

namespace Core.Tests.Core
{
    [TestClass]
    public class IdentityManagerResult_Of_T_Tests
    {
        public class FooResult{}

        IdentityManagerResult<FooResult> subject;

        [TestMethod]
        public void ctor_WithResult_HasResult()
        {
            var r = new FooResult();
            subject = new IdentityManagerResult<FooResult>(r);
            Assert.AreSame(r, subject.Result);
        }

        [TestMethod]
        public void ctor_WithErrors_HasNoResult()
        {
            subject = new IdentityManagerResult<FooResult>("error");
            Assert.IsNull(subject.Result);
        }
    }
}
