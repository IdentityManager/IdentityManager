using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Thinktecture.IdentityManager;

namespace Core.Tests.Core
{
    [TestClass]
    public class IdentityManagerResultTests
    {
        IdentityManagerResult subject;

        [TestMethod]
        public void IsSuccess_NoErrors_ReturnsTrue()
        {
            subject = new IdentityManagerResult();
            Assert.IsTrue(subject.IsSuccess);
        }

        [TestMethod]
        public void IsSuccess_WithErrors_ReturnsFalse()
        {
            subject = new IdentityManagerResult("error");
            Assert.IsFalse(subject.IsSuccess);
        }

        [TestMethod]
        public void ctor_WithErrors_HasErrors()
        {
            subject = new IdentityManagerResult("error1", "error2", "error3");
            Assert.AreEqual(3, subject.Errors.Count());
            Assert.IsTrue(subject.Errors.Contains("error1"));
            Assert.IsTrue(subject.Errors.Contains("error2"));
            Assert.IsTrue(subject.Errors.Contains("error3"));
        }
       
    }
}
