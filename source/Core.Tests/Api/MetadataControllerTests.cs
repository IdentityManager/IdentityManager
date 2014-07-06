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
            Get("api/metadata");
            identityManager.GetMetadataAsync();
        }
        [TestMethod]
        public void GetMetadata_ReturnsCorrectMetadata()
        {
            identityManager.SetupGetMetadataAsync(new IdentityManagerMetadata
            {
                UniqueIdentitiferClaimType = "foo",
            });
            var result = Get<IdentityManagerMetadata>("api/metadata");
            Assert.AreEqual("foo", result.UniqueIdentitiferClaimType);
        }
    }
}
