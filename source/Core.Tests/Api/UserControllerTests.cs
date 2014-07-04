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
        public void GetUsersAsync_NoParams_CallsUserManager()
        {
            Get("api/users");
            userManager.VerifyQueryUsersAsync();
        }
        [TestMethod]
        public void GetUsersAsync_WithParams_PassesParamsToUserManager()
        {
            Get("api/users?filter=foo&start=7&count=25");
            userManager.VerifyQueryUsersAsync("foo", 7, 25);
        }
        [TestMethod]
        public void GetUsersAsync_SuccessfulResult_ReturnsResults()
        {
            ConfigureQueryUsers(53);
            var result = Get<QueryResult>("api/users");
            Assert.AreEqual(53, result.Users.Count());
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
        public void CreateUserAsync_InvalidModel_DoesNotCallUserManager()
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
        public void CreateUserAsync_UserManagerThrows_ReturnsErrors()
        {
            userManager.SetupCreateUserAsync(new Exception("Boom"));
            var response = Post("api/users", new CreateUserModel() { Username = "user", Password = "pass" });
            Assert.AreEqual(HttpStatusCode.InternalServerError, response.StatusCode);
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
        [TestMethod]
        public void GetUserAsync_UserManagerThrows_ReturnsErrors()
        {
            userManager.SetupGetUserAsync(new Exception("Boom"));
            var response = Get("api/users/123");
            Assert.AreEqual(HttpStatusCode.InternalServerError, response.StatusCode);
        }
        [TestMethod]
        public void GetUser_MissingSubject_ReturnsError()
        {
            var resp = Get("api/users/ /");
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.SubjectRequired);
        }

        [TestMethod]
        public void DeleteUserAsync_CallsUserManager()
        {
            Delete("api/users/123");
            userManager.VerifyDeleteUserAsync("123");
        }
        [TestMethod]
        public void DeleteUserAsync_UserManagerReturnsSuccess_ReturnsNoContent()
        {
            var resp = Delete("api/users/123");
            Assert.AreEqual(HttpStatusCode.NoContent, resp.StatusCode);
        }
        [TestMethod]
        public void DeleteUserAsync_UserManagerReturnsError_ReturnsError()
        {
            userManager.SetupDeleteUserAsync("foo", "bar");
            var resp = Delete("api/users/123");
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            Assert.AreEqual(2, error.Errors.Length);
            CollectionAssert.Contains(error.Errors, "foo");
            CollectionAssert.Contains(error.Errors, "bar");
        }
        [TestMethod]
        public void DeleteUserAsync_UserManagerThrows_ReturnsErrors()
        {
            userManager.SetupDeleteUserAsync(new Exception("Boom"));
            var response = Delete("api/users/123");
            Assert.AreEqual(HttpStatusCode.InternalServerError, response.StatusCode);
        }
        [TestMethod]
        public void DeleteUser_MissingSubject_ReturnsError()
        {
            var resp = Delete("api/users/ /");
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.SubjectRequired);
        }

        [TestMethod]
        public void SetPasswordAsync_CallsUserManager()
        {
            Put("api/users/123/password", new PasswordModel { Password = "pass" });
            userManager.VerifySetPasswordAsync("123", "pass");
        }
        [TestMethod]
        public void SetPasswordAsync_UserManagerReturnsSuccess_ReturnsNoContent()
        {
            var resp = Put("api/users/123/password", new PasswordModel { Password = "pass" });
            Assert.AreEqual(HttpStatusCode.NoContent, resp.StatusCode);
        }
        [TestMethod]
        public void SetPasswordAsync_UserManagerReturnsError_ReturnsError()
        {
            userManager.SetupSetPasswordAsync("foo", "bar");
            var resp = Put("api/users/123/password", new PasswordModel { Password = "pass" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            Assert.AreEqual(2, error.Errors.Length);
            CollectionAssert.Contains(error.Errors, "foo");
            CollectionAssert.Contains(error.Errors, "bar");
        }
        [TestMethod]
        public void SetPasswordAsync_UserManagerThrows_ReturnsErrors()
        {
            userManager.SetupSetPasswordAsync(new Exception("Boom"));
            var resp = Put("api/users/123/password", new PasswordModel { Password = "pass" });
            Assert.AreEqual(HttpStatusCode.InternalServerError, resp.StatusCode);
        }
        [TestMethod]
        public void SetPasswordAsync_InvalidModel_DoesNotCallUserManager()
        {
            Put("api/users/123/password", new PasswordModel { Password = "" });
            Put("api/users/ /password", new PasswordModel { Password = "pass" });
            Put("api/users/123/password", (PasswordModel)null);
            userManager.VerifySetPasswordAsyncNotCalled();
        }
        [TestMethod]
        public void SetPasswordAsync_MissingModel_ReturnsError()
        {
            var resp = Put("api/users/123/password", (PasswordModel)null);
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.PasswordDataRequired);
        }
        [TestMethod]
        public void SetPasswordAsync_MissingPassword_ReturnsError()
        {
            var resp = Put("api/users/123/password", new PasswordModel { Password = "" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.PasswordRequired);
        }
        [TestMethod]
        public void SetPasswordAsync_MissingSubject_ReturnsError()
        {
            var resp = Put("api/users/ /password", new PasswordModel { Password = "pass" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.SubjectRequired);
        }


        [TestMethod]
        public void SetEmailAsync_CallsUserManager()
        {
            Put("api/users/123/email", new EmailModel { Email = "user@test.com" });
            userManager.VerifySetEmailAsync("123", "user@test.com");
        }
        [TestMethod]
        public void SetEmailAsync_UserManagerReturnsSuccess_ReturnsNoContent()
        {
            var resp = Put("api/users/123/email", new EmailModel { Email = "user@test.com" });
            Assert.AreEqual(HttpStatusCode.NoContent, resp.StatusCode);
        }
        [TestMethod]
        public void SetEmailAsync_UserManagerReturnsError_ReturnsError()
        {
            userManager.SetupSetEmailAsync("foo", "bar");
            var resp = Put("api/users/123/email", new EmailModel { Email = "user@test.com" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            Assert.AreEqual(2, error.Errors.Length);
            CollectionAssert.Contains(error.Errors, "foo");
            CollectionAssert.Contains(error.Errors, "bar");
        }
        [TestMethod]
        public void SetEmailAsync_UserManagerThrows_ReturnsErrors()
        {
            userManager.SetupSetEmailAsync(new Exception("Boom"));
            var resp = Put("api/users/123/email", new EmailModel { Email = "user@test.com" });
            Assert.AreEqual(HttpStatusCode.InternalServerError, resp.StatusCode);
        }
        [TestMethod]
        public void SetEmailAsync_InvalidModel_DoesNotCallUserManager()
        {
            Put("api/users/123/email", new EmailModel { Email = "" });
            Put("api/users/ /email", new EmailModel { Email = "user@test.com" });
            Put("api/users/123/email", (EmailModel)null);
            userManager.VerifySetEmailAsyncNotCalled();
        }
        [TestMethod]
        public void SetEmailAsync_MissingModel_ReturnsError()
        {
            var resp = Put("api/users/123/email", (EmailModel)null);
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.EmailDataRequired);
        }
        [TestMethod]
        public void SetEmailAsync_MissingEmail_ReturnsError()
        {
            var resp = Put("api/users/123/email", new EmailModel { Email = "" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.EmailRequired);
        }
        [TestMethod]
        public void SetEmailAsync_InvalidEmail_ReturnsError()
        {
            var resp = Put("api/users/123/email", new EmailModel { Email = "foo" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.InvalidEmail);
        }
        [TestMethod]
        public void SetEmailAsync_MissingSubject_ReturnsError()
        {
            var resp = Put("api/users/ /email", new EmailModel { Email = "user@test.com" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.SubjectRequired);
        }

        [TestMethod]
        public void SetPhoneAsync_CallsUserManager()
        {
            Put("api/users/123/phone", new PhoneModel { Phone = "555" });
            userManager.VerifySetPhoneAsync("123", "555");
        }
        [TestMethod]
        public void SetPhoneAsync_UserManagerReturnsSuccess_ReturnsNoContent()
        {
            var resp = Put("api/users/123/phone", new PhoneModel { Phone = "555" });
            Assert.AreEqual(HttpStatusCode.NoContent, resp.StatusCode);
        }
        [TestMethod]
        public void SetPhoneAsync_UserManagerReturnsError_ReturnsError()
        {
            userManager.SetupSetPhoneAsync("foo", "bar");
            var resp = Put("api/users/123/phone", new PhoneModel { Phone = "555" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            Assert.AreEqual(2, error.Errors.Length);
            CollectionAssert.Contains(error.Errors, "foo");
            CollectionAssert.Contains(error.Errors, "bar");
        }
        [TestMethod]
        public void SetPhoneAsync_UserManagerThrows_ReturnsErrors()
        {
            userManager.SetupSetPhoneAsync(new Exception("Boom"));
            var resp = Put("api/users/123/phone", new PhoneModel { Phone = "555" });
            Assert.AreEqual(HttpStatusCode.InternalServerError, resp.StatusCode);
        }
        [TestMethod]
        public void SetPhoneAsync_InvalidModel_DoesNotCallUserManager()
        {
            Put("api/users/123/phone", new PhoneModel { Phone = "" });
            Put("api/users/ /phone", new PhoneModel { Phone = "555" });
            Put("api/users/123/phone", (PhoneModel)null);
            userManager.VerifySetPhoneAsyncNotCalled();
        }
        [TestMethod]
        public void SetPhoneAsync_MissingModel_ReturnsError()
        {
            var resp = Put("api/users/123/phone", (PhoneModel)null);
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.PhoneDataRequired);
        }
        [TestMethod]
        public void SetPhoneAsync_MissingPhone_ReturnsError()
        {
            var resp = Put("api/users/123/phone", new PhoneModel { Phone = "" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.PhoneRequired);
        }
        [TestMethod]
        public void SetPhoneAsync_MissingSubject_ReturnsError()
        {
            var resp = Put("api/users/ /phone", new PhoneModel { Phone = "555" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.SubjectRequired);
        }


        [TestMethod]
        public void AddClaimAsync_CallsUserManager()
        {
            Post("api/users/123/claims", new ClaimModel { Type="color", Value="blue" });
            userManager.VerifyAddClaimAsync("123", "color", "blue");
        }
        [TestMethod]
        public void AddClaimAsync_UserManagerReturnsSuccess_ReturnsNoContent()
        {
            var resp = Post("api/users/123/claims", new ClaimModel { Type="color", Value="blue" });
            Assert.AreEqual(HttpStatusCode.NoContent, resp.StatusCode);
        }
        [TestMethod]
        public void AddClaimAsync_UserManagerReturnsError_ReturnsError()
        {
            userManager.SetupAddClaimAsync("foo", "bar");
            var resp = Post("api/users/123/claims", new ClaimModel { Type = "color", Value = "blue" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            Assert.AreEqual(2, error.Errors.Length);
            CollectionAssert.Contains(error.Errors, "foo");
            CollectionAssert.Contains(error.Errors, "bar");
        }
        [TestMethod]
        public void AddClaimAsync_UserManagerThrows_ReturnsErrors()
        {
            userManager.SetupAddClaimAsync(new Exception("Boom"));
            var resp = Post("api/users/123/claims", new ClaimModel { Type = "color", Value = "blue" });
            Assert.AreEqual(HttpStatusCode.InternalServerError, resp.StatusCode);
        }
        [TestMethod]
        public void AddClaimAsync_InvalidModel_DoesNotCallUserManager()
        {
            Post("api/users/123/claims", new ClaimModel { Type = "", Value = "blue" });
            Post("api/users/123/claims", new ClaimModel { Type = "color", Value = "" });
            Post("api/users/ /claims", new ClaimModel { Type = "color", Value = "blue" });
            Post("api/users/123/claims", (ClaimModel)null);
            userManager.VerifyAddClaimAsyncNotCalled();
        }
        [TestMethod]
        public void AddClaimAsync_MissingModel_ReturnsError()
        {
            var resp =  Post("api/users/123/claims", (ClaimModel)null);
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.ClaimDataRequired);
        }
        [TestMethod]
        public void AddClaimAsync_MissingType_ReturnsError()
        {
            var resp = Post("api/users/123/claims", new ClaimModel { Type = "", Value = "blue" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.ClaimTypeRequired);
        }
        [TestMethod]
        public void AddClaimAsync_MissingValue_ReturnsError()
        {
            var resp = Post("api/users/123/claims", new ClaimModel { Type = "color", Value = "" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.ClaimValueRequired);
        }
        [TestMethod]
        public void AddClaimAsync_MissingSubject_ReturnsError()
        {
            var resp = Post("api/users/ /claims", new ClaimModel{ Type="color", Value="blue" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.SubjectRequired);
        }

        [TestMethod]
        public void RemoveClaimAsync_CallsUserManager()
        {
            Delete("api/users/123/claims/color/blue");
            userManager.VerifyRemoveClaimAsync("123", "color", "blue");
        }
        [TestMethod]
        public void RemoveClaimAsync_UserManagerReturnsSuccess_ReturnsNoContent()
        {
            var resp = Delete("api/users/123/claims/color/blue");
            Assert.AreEqual(HttpStatusCode.NoContent, resp.StatusCode);
        }
        [TestMethod]
        public void RemoveClaimAsync_UserManagerReturnsError_ReturnsError()
        {
            userManager.SetupRemoveClaimAsync("foo", "bar");
            var resp = Delete("api/users/123/claims/color/blue");
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            Assert.AreEqual(2, error.Errors.Length);
            CollectionAssert.Contains(error.Errors, "foo");
            CollectionAssert.Contains(error.Errors, "bar");
        }
        [TestMethod]
        public void RemoveClaimAsync_UserManagerThrows_ReturnsErrors()
        {
            userManager.SetupRemoveClaimAsync(new Exception("Boom"));
            var resp = Delete("api/users/123/claims/color/blue");
            Assert.AreEqual(HttpStatusCode.InternalServerError, resp.StatusCode);
        }
        [TestMethod]
        public void RemoveClaimAsync_InvalidModel_DoesNotCallUserManager()
        {
            Delete("api/users/ /claims/color/blue");
            Delete("api/users/123/claims/ /blue");
            Delete("api/users/123/claims/color/ ");
            userManager.VerifyRemoveClaimAsyncNotCalled();
        }
        [TestMethod]
        public void RemoveClaimAsync_MissingType_ReturnsError()
        {
            var resp = Delete("api/users/123/claims/ /blue"); 
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.ClaimTypeRequired);
        }
        [TestMethod]
        public void RemoveClaimAsync_MissingValue_ReturnsError()
        {
            var resp = Delete("api/users/123/claims/color/ /");
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.ClaimValueRequired);
        }
        [TestMethod]
        public void RemoveClaimAsync_MissingSubject_ReturnsError()
        {
            var resp = Delete("api/users/ /claims/color/blue");
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.SubjectRequired);
        }
    }
}
