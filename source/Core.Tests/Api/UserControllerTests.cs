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
            Post("api/users", new CreateUserModel() { Username = "user", Password = "pass" });
            userManager.VerifyCreateUserAsync("user", "pass");
        }
        [TestMethod]
        public void CreateUserAsync_UserManagerReturnsSuccess_CorrectResults()
        {
            userManager.SetupCreateUserAsync(new CreateResult { Subject = "123" });
            var response = Post("api/users", new CreateUserModel() { Username = "user", Password = "pass" });
            Assert.AreEqual(HttpStatusCode.Created, response.StatusCode);
            Assert.AreEqual(Url("api/users/123"), response.Headers.Location.AbsoluteUri);
        }
        [TestMethod]
        public void CreateUserAsync_InvalidModel_DoesNotCallsUserManager()
        {
            Post("api/users", new CreateUserModel() { Username = "", Password = "pass" });
            Post("api/users", new CreateUserModel() { Username = "user", Password = "" });
            Post("api/users", (CreateUserModel)null);
            userManager.VerifyCreateUserAsyncNotCalled();
        }
        [TestMethod]
        public void CreateUserAsync_MissingModel_ReturnsError()
        {
            var response = Post("api/users", (CreateUserModel)null);
            Assert.AreEqual(HttpStatusCode.BadRequest, response.StatusCode);
            var error = response.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.UserDataRequired);
        }
        [TestMethod]
        public void CreateUserAsync_MissingUsername_ReturnsError()
        {
            var response = Post("api/users", new CreateUserModel { Username = "", Password = "pass" });
            Assert.AreEqual(HttpStatusCode.BadRequest, response.StatusCode);
            var error = response.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.UsernameRequired);
        }
        [TestMethod]
        public void CreateUserAsync_MissingPassword_ReturnsError()
        {
            var response = Post("api/users", new CreateUserModel { Username = "user", Password = "" });
            Assert.AreEqual(HttpStatusCode.BadRequest, response.StatusCode);
            var error = response.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.PasswordRequired);
        }
        [TestMethod]
        public void CreateUserAsync_UserManagerReturnsErrors_ReturnsErrors()
        {
            userManager.SetupCreateUserAsync("foo", "bar");
            var response = Post("api/users", new CreateUserModel() { Username="user", Password="pass" });
            Assert.AreEqual(HttpStatusCode.BadRequest, response.StatusCode);
            var error = response.Content.ReadAsAsync<ErrorModel>().Result;
            Assert.AreEqual(2, error.Errors.Length);
            CollectionAssert.Contains(error.Errors, "foo");
            CollectionAssert.Contains(error.Errors, "bar");
        }


        [TestMethod]
        public void GetUserAsync_CallsUserManager()
        {
            Get("api/users/123");
            userManager.VerifyGetUserAsync("123");
        }
        [TestMethod]
        public void GetUserAsync_UserFound_ReturnsUser()
        {
            userManager.SetupGetUserAsync(new UserResult { Subject = "foo", Username = "user" });
            var result = Get<UserResult>("api/users/123");
            Assert.AreEqual("foo", result.Subject);
            Assert.AreEqual("user", result.Username);
        }
        [TestMethod]
        public void GetUserAsync_UserNotFound_ReturnsNotFound()
        {
            userManager.SetupGetUserAsync((UserResult)null);
            var resp = Get("api/users/123");
            Assert.AreEqual(HttpStatusCode.NotFound, resp.StatusCode);
        }
        [TestMethod]
        public void GetUserAsync_UserManagerReturnsErrors_ReturnsErrors()
        {
            userManager.SetupGetUserAsync("foo", "bar");
            var response = Get("api/users/123");
            Assert.AreEqual(HttpStatusCode.BadRequest, response.StatusCode);
            var error = response.Content.ReadAsAsync<ErrorModel>().Result;
            Assert.AreEqual(2, error.Errors.Length);
            CollectionAssert.Contains(error.Errors, "foo");
            CollectionAssert.Contains(error.Errors, "bar");
        }
    }
}
