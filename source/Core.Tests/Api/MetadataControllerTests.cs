using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Thinktecture.IdentityManager;

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
    }
}
