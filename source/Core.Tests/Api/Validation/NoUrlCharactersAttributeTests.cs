using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Thinktecture.IdentityManager.Core.Api.Validation;

namespace Core.Tests.Api.Validation
{
    [TestClass]
    public class NoUrlCharactersAttributeTests
    {
        NoUrlCharactersAttribute subject;

        [TestInitialize]
        public void Init()
        {
            subject = new NoUrlCharactersAttribute();
        }

        [TestMethod]
        public void IsValid_Null_ReturnsTrue()
        {
            Assert.IsTrue(subject.IsValid(null));
        }
        [TestMethod]
        public void IsValid_EmptyString_ReturnsTrue()
        {
            Assert.IsTrue(subject.IsValid(""));
        }

        [TestMethod]
        public void IsValid_ValidChars_ReturnsTrue()
        {
            Assert.IsTrue(subject.IsValid("test"));
            Assert.IsTrue(subject.IsValid("!"), "!");
            Assert.IsTrue(subject.IsValid("'"), "'");
            Assert.IsTrue(subject.IsValid("("), "(");
            Assert.IsTrue(subject.IsValid(")"), ")");
            Assert.IsTrue(subject.IsValid(";"), ";");
            Assert.IsTrue(subject.IsValid("@"), "@");
            Assert.IsTrue(subject.IsValid("="), "=");
            Assert.IsTrue(subject.IsValid("$"), "$");
            Assert.IsTrue(subject.IsValid(","), ",");
            Assert.IsTrue(subject.IsValid("#"), "#");
            Assert.IsTrue(subject.IsValid("["), "[");
            Assert.IsTrue(subject.IsValid("]"), "]");
        }

        [TestMethod]
        public void IsValid_InvalidChars_ReturnsFalse()
        {
            Assert.IsFalse(subject.IsValid("&"), "&");
            Assert.IsFalse(subject.IsValid("*"), "*");
            Assert.IsFalse(subject.IsValid("+"), "+");
            Assert.IsFalse(subject.IsValid("/"), "/");
            Assert.IsFalse(subject.IsValid(":"), ":");
            Assert.IsFalse(subject.IsValid("?"), "?");
        }
    }
}
