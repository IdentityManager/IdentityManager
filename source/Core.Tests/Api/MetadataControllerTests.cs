using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Thinktecture.IdentityManager.Core;

namespace Core.Tests.Api
{
    [TestClass]
    public class MetadataControllerTests : WebApiTestBase
    {
        [TestMethod]
        public void GetMetadata_CallsUserManager()
        {
            Get("api");
            userManager.GetMetadataAsync();
        }
        [TestMethod]
        public void GetMetadata_ReturnsCorrectMetadata()
        {
            userManager.SetupGetMetadataAsync(new UserManagerMetadata
            {
                UniqueIdentitiferClaimType = "foo",
            });
            var result = Get<UserManagerMetadata>("api");
            Assert.AreEqual("foo", result.UniqueIdentitiferClaimType);
        }
    }
}
