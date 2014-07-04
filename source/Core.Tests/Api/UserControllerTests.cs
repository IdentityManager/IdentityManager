using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using Thinktecture.IdentityManager;
using Thinktecture.IdentityManager.Api.Models;
using Thinktecture.IdentityManager.Core;
using Thinktecture.IdentityManager.Core.Api.Models;
using Thinktecture.IdentityManager.Core.Resources;

namespace Core.Tests.Api
{
    [TestClass]
    public class UserControllerTests : WebApiTestBase
    {
        [TestMethod]
        public void GetUsersAsync_CallsUserManager()
        {
            Get("api/users");
            userManager.VerifyQueryUsersAsync();
        }

        [TestMethod]
        public void GetUsersAsync_SuccessfulResult_ReturnsResults()
        {
            ConfigureQueryUsers(53);
            var result = Get<QueryResult>("api/users");
            Assert.AreEqual(53, result.Users.Count());
        }
        
        [TestMethod]
        public void GetUsersAsync_PassesParamsToUserManager()
        {
            Get("api/users?filter=foo&start=7&count=25");
            userManager.VerifyQueryUsersAsync("foo", 7, 25);
        }

        [TestMethod]
        public void GetUsersAsync_UserManagerFails_ReturnsErrors()
        {
            userManager.SetupQueryUsersAsync("foo", "bar", "baz");

            var response = Get("api/users");

            Assert.AreEqual(HttpStatusCode.BadRequest, response.StatusCode);
            
            var error = response.Content.ReadAsAsync<ErrorModel>().Result;
            Assert.AreEqual(3, error.Errors.Length);
            CollectionAssert.Contains(error.Errors, "foo");
            CollectionAssert.Contains(error.Errors, "bar");
            CollectionAssert.Contains(error.Errors, "baz");
        }

        [TestMethod]
        public void GetUsersAsync_UserManagerThrows_ReturnsErrors()
        {
            userManager.SetupQueryUsersAsync(new Exception("Boom"));
            var response = Get("api/users");
            Assert.AreEqual(HttpStatusCode.InternalServerError, response.StatusCode);
        }

        [TestMethod]
        public void CreateUserAsync_ValidModel_CallsUserManager()
        {
            Post("api/users", new CreateUserModel() { Username = "foo", Password = "bar" });
            userManager.VerifyCreateUserAsync("foo", "bar");
        }

        [TestMethod]
        public void CreateUserAsync_InvalidModel_DoesNotCallsUserManager()
        {
            Post("api/users", new CreateUserModel() { Username = "", Password = "bar" });
            Post("api/users", new CreateUserModel() { Username = "foo", Password = "" });
            Post("api/users", (CreateUserModel)null);
            userManager.VerifyCreateUserAsync("foo", "bar", Times.Never());
        }

        [TestMethod]
        public void CreateUserAsync_MissingModel_ReturnsError()
        {
            var result = Post("api/users", (CreateUserModel)null);
            Assert.AreEqual(HttpStatusCode.BadRequest, result.StatusCode);
            var error = result.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.UserDataRequired);
        }

        [TestMethod]
        public void CreateUserAsync_MissingUsername_ReturnsError()
        {
            var result = Post("api/users", new CreateUserModel { Username = "", Password = "pass" });
            Assert.AreEqual(HttpStatusCode.BadRequest, result.StatusCode);
            var error = result.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.UsernameRequired);
        }

        [TestMethod]
        public void CreateUserAsync_MissingPassword_ReturnsError()
        {
            var result = Post("api/users", new CreateUserModel { Username = "user", Password = "" });
            Assert.AreEqual(HttpStatusCode.BadRequest, result.StatusCode);
            var error = result.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.PasswordRequired);
        }
    }
}
