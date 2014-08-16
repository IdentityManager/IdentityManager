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
using Thinktecture.IdentityManager.Resources;

namespace Core.Tests.Api
{
    [TestClass]
    public class UserControllerTests : WebApiTestBase
    {
        [TestMethod]
        public void GetUsersAsync_NoParams_CallsIdentityManager()
        {
            Get("api/users");
            identityManager.VerifyQueryUsersAsync();
        }
        [TestMethod]
        public void GetUsersAsync_WithParams_PassesParamsToIdentityManager()
        {
            Get("api/users?filter=foo&start=7&count=25");
            identityManager.VerifyQueryUsersAsync("foo", 7, 25);
        }
        [TestMethod]
        public void GetUsersAsync_SuccessfulResult_ReturnsResults()
        {
            ConfigureQueryUsers(53);
            var result = Get<QueryResult<UserSummary>>("api/users");
            Assert.AreEqual(53, result.Items.Count());
        }        
        [TestMethod]
        public void GetUsersAsync_IdentityManagerFails_ReturnsErrors()
        {
            identityManager.SetupQueryUsersAsync("foo", "bar", "baz");

            var response = Get("api/users");

            Assert.AreEqual(HttpStatusCode.BadRequest, response.StatusCode);
            
            var error = response.Content.ReadAsAsync<ErrorModel>().Result;
            Assert.AreEqual(3, error.Errors.Length);
            CollectionAssert.Contains(error.Errors, "foo");
            CollectionAssert.Contains(error.Errors, "bar");
            CollectionAssert.Contains(error.Errors, "baz");
        }
        [TestMethod]
        public void GetUsersAsync_IdentityManagerThrows_ReturnsErrors()
        {
            identityManager.SetupQueryUsersAsync(new Exception("Boom"));
            var response = Get("api/users");
            Assert.AreEqual(HttpStatusCode.InternalServerError, response.StatusCode);
        }


        //[TestMethod]
        //public void CreateUserAsync_ValidModel_CallsIdentityManager()
        //{
        //    Post("api/users", new CreateUserModel() { Username = "user", Password = "pass" });
        //    identityManager.VerifyCreateUserAsync("user", "pass");
        //}
        //[TestMethod]
        //public void CreateUserAsync_IdentityManagerReturnsSuccess_CorrectResults()
        //{
        //    identityManager.SetupCreateUserAsync(new CreateResult { Subject = "123" });
        //    var response = Post("api/users", new CreateUserModel() { Username = "user", Password = "pass" });
        //    Assert.AreEqual(HttpStatusCode.Created, response.StatusCode);
        //    Assert.AreEqual(Url("api/users/123"), response.Headers.Location.AbsoluteUri);
        //}
        //[TestMethod]
        //public void CreateUserAsync_InvalidModel_DoesNotCallIdentityManager()
        //{
        //    Post("api/users", new CreateUserModel() { Username = "", Password = "pass" });
        //    Post("api/users", new CreateUserModel() { Username = "user", Password = "" });
        //    Post("api/users", (CreateUserModel)null);
        //    identityManager.VerifyCreateUserAsyncNotCalled();
        //}

        //[TestMethod]
        //public void CreateUserAsync_MissingModel_ReturnsError()
        //{
        //    var response = Post("api/users", (CreateUserModel)null);
        //    Assert.AreEqual(HttpStatusCode.BadRequest, response.StatusCode);
        //    var error = response.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.UserDataRequired);
        //}
        //[TestMethod]
        //public void CreateUserAsync_MissingUsername_ReturnsError()
        //{
        //    var response = Post("api/users", new CreateUserModel { Username = "", Password = "pass" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, response.StatusCode);
        //    var error = response.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.UsernameRequired);
        //}
        //[TestMethod]
        //public void CreateUserAsync_MissingPassword_ReturnsError()
        //{
        //    var response = Post("api/users", new CreateUserModel { Username = "user", Password = "" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, response.StatusCode);
        //    var error = response.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.PasswordRequired);
        //}
        //[TestMethod]
        //public void CreateUserAsync_IdentityManagerReturnsErrors_ReturnsErrors()
        //{
        //    identityManager.SetupCreateUserAsync("foo", "bar");
        //    var response = Post("api/users", new CreateUserModel() { Username="user", Password="pass" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, response.StatusCode);
        //    var error = response.Content.ReadAsAsync<ErrorModel>().Result;
        //    Assert.AreEqual(2, error.Errors.Length);
        //    CollectionAssert.Contains(error.Errors, "foo");
        //    CollectionAssert.Contains(error.Errors, "bar");
        //}
        //[TestMethod]
        //public void CreateUserAsync_IdentityManagerThrows_ReturnsErrors()
        //{
        //    identityManager.SetupCreateUserAsync(new Exception("Boom"));
        //    var response = Post("api/users", new CreateUserModel() { Username = "user", Password = "pass" });
        //    Assert.AreEqual(HttpStatusCode.InternalServerError, response.StatusCode);
        //}



        [TestMethod]
        public void GetUserAsync_CallsIdentityManager()
        {
            Get("api/users/123");
            identityManager.VerifyGetUserAsync("123");
        }
        [TestMethod]
        public void GetUserAsync_UserFound_ReturnsUser()
        {
            identityManager.SetupGetUserAsync(new UserDetail { Subject = "foo", Username = "user" });
            var result = Get<UserSummary>("api/users/123");
            Assert.AreEqual("foo", result.Subject);
            Assert.AreEqual("user", result.Username);
        }
        [TestMethod]
        public void GetUserAsync_UserNotFound_ReturnsNotFound()
        {
            identityManager.SetupGetUserAsync((UserDetail)null);
            var resp = Get("api/users/123");
            Assert.AreEqual(HttpStatusCode.NotFound, resp.StatusCode);
        }
        [TestMethod]
        public void GetUserAsync_IdentityManagerReturnsErrors_ReturnsErrors()
        {
            identityManager.SetupGetUserAsync("foo", "bar");
            var response = Get("api/users/123");
            Assert.AreEqual(HttpStatusCode.BadRequest, response.StatusCode);
            var error = response.Content.ReadAsAsync<ErrorModel>().Result;
            Assert.AreEqual(2, error.Errors.Length);
            CollectionAssert.Contains(error.Errors, "foo");
            CollectionAssert.Contains(error.Errors, "bar");
        }
        [TestMethod]
        public void GetUserAsync_IdentityManagerThrows_ReturnsErrors()
        {
            identityManager.SetupGetUserAsync(new Exception("Boom"));
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
        public void DeleteUserAsync_CallsIdentityManager()
        {
            Delete("api/users/123");
            identityManager.VerifyDeleteUserAsync("123");
        }
        [TestMethod]
        public void DeleteUserAsync_IdentityManagerReturnsSuccess_ReturnsNoContent()
        {
            var resp = Delete("api/users/123");
            Assert.AreEqual(HttpStatusCode.NoContent, resp.StatusCode);
        }
        [TestMethod]
        public void DeleteUserAsync_IdentityManagerReturnsError_ReturnsError()
        {
            identityManager.SetupDeleteUserAsync("foo", "bar");
            var resp = Delete("api/users/123");
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            Assert.AreEqual(2, error.Errors.Length);
            CollectionAssert.Contains(error.Errors, "foo");
            CollectionAssert.Contains(error.Errors, "bar");
        }
        [TestMethod]
        public void DeleteUserAsync_IdentityManagerThrows_ReturnsErrors()
        {
            identityManager.SetupDeleteUserAsync(new Exception("Boom"));
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

        //[TestMethod]
        //public void SetPasswordAsync_CallsIdentityManager()
        //{
        //    Put("api/users/123/password", new PasswordModel { Value = "pass" });
        //    identityManager.VerifySetPasswordAsync("123", "pass");
        //}
        //[TestMethod]
        //public void SetPasswordAsync_IdentityManagerReturnsSuccess_ReturnsNoContent()
        //{
        //    var resp = Put("api/users/123/password", new PasswordModel { Value = "pass" });
        //    Assert.AreEqual(HttpStatusCode.NoContent, resp.StatusCode);
        //}
        //[TestMethod]
        //public void SetPasswordAsync_IdentityManagerReturnsError_ReturnsError()
        //{
        //    identityManager.SetupSetPasswordAsync("foo", "bar");
        //    var resp = Put("api/users/123/password", new PasswordModel { Value = "pass" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    Assert.AreEqual(2, error.Errors.Length);
        //    CollectionAssert.Contains(error.Errors, "foo");
        //    CollectionAssert.Contains(error.Errors, "bar");
        //}
        //[TestMethod]
        //public void SetPasswordAsync_IdentityManagerThrows_ReturnsErrors()
        //{
        //    identityManager.SetupSetPasswordAsync(new Exception("Boom"));
        //    var resp = Put("api/users/123/password", new PasswordModel { Value = "pass" });
        //    Assert.AreEqual(HttpStatusCode.InternalServerError, resp.StatusCode);
        //}
        //[TestMethod]
        //public void SetPasswordAsync_InvalidModel_DoesNotCallIdentityManager()
        //{
        //    Put("api/users/123/password", new PasswordModel { Value = "" });
        //    Put("api/users/ /password", new PasswordModel { Value = "pass" });
        //    Put("api/users/123/password", (PasswordModel)null);
        //    identityManager.VerifySetPasswordAsyncNotCalled();
        //}
        //[TestMethod]
        //public void SetPasswordAsync_MissingModel_ReturnsError()
        //{
        //    var resp = Put("api/users/123/password", (PasswordModel)null);
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.PasswordDataRequired);
        //}
        //[TestMethod]
        //public void SetPasswordAsync_MissingPassword_ReturnsError()
        //{
        //    var resp = Put("api/users/123/password", new PasswordModel { Value = "" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.PasswordRequired);
        //}
        //[TestMethod]
        //public void SetPasswordAsync_MissingSubject_ReturnsError()
        //{
        //    var resp = Put("api/users/ /password", new PasswordModel { Value = "pass" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.SubjectRequired);
        //}


        //[TestMethod]
        //public void SetEmailAsync_CallsIdentityManager()
        //{
        //    Put("api/users/123/email", new EmailModel { Value = "user@test.com" });
        //    identityManager.VerifySetEmailAsync("123", "user@test.com");
        //}
        //[TestMethod]
        //public void SetEmailAsync_IdentityManagerReturnsSuccess_ReturnsNoContent()
        //{
        //    var resp = Put("api/users/123/email", new EmailModel { Value = "user@test.com" });
        //    Assert.AreEqual(HttpStatusCode.NoContent, resp.StatusCode);
        //}
        //[TestMethod]
        //public void SetEmailAsync_IdentityManagerReturnsError_ReturnsError()
        //{
        //    identityManager.SetupSetEmailAsync("foo", "bar");
        //    var resp = Put("api/users/123/email", new EmailModel { Value = "user@test.com" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    Assert.AreEqual(2, error.Errors.Length);
        //    CollectionAssert.Contains(error.Errors, "foo");
        //    CollectionAssert.Contains(error.Errors, "bar");
        //}
        //[TestMethod]
        //public void SetEmailAsync_IdentityManagerThrows_ReturnsErrors()
        //{
        //    identityManager.SetupSetEmailAsync(new Exception("Boom"));
        //    var resp = Put("api/users/123/email", new EmailModel { Value = "user@test.com" });
        //    Assert.AreEqual(HttpStatusCode.InternalServerError, resp.StatusCode);
        //}
        //[TestMethod]
        //public void SetEmailAsync_InvalidModel_DoesNotCallIdentityManager()
        //{
        //    Put("api/users/123/email", new EmailModel { Value = "" });
        //    Put("api/users/ /email", new EmailModel { Value = "user@test.com" });
        //    Put("api/users/123/email", (EmailModel)null);
        //    identityManager.VerifySetEmailAsyncNotCalled();
        //}
        //[TestMethod]
        //public void SetEmailAsync_MissingModel_ReturnsError()
        //{
        //    var resp = Put("api/users/123/email", (EmailModel)null);
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.EmailDataRequired);
        //}
        //[TestMethod]
        //public void SetEmailAsync_MissingEmail_ReturnsError()
        //{
        //    var resp = Put("api/users/123/email", new EmailModel { Value = "" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.EmailRequired);
        //}
        //[TestMethod]
        //public void SetEmailAsync_InvalidEmail_ReturnsError()
        //{
        //    var resp = Put("api/users/123/email", new EmailModel { Value = "foo" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.InvalidEmail);
        //}
        //[TestMethod]
        //public void SetEmailAsync_MissingSubject_ReturnsError()
        //{
        //    var resp = Put("api/users/ /email", new EmailModel { Value = "user@test.com" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.SubjectRequired);
        //}

        //[TestMethod]
        //public void SetPhoneAsync_CallsIdentityManager()
        //{
        //    Put("api/users/123/phone", new PhoneModel { Value = "555" });
        //    identityManager.VerifySetPhoneAsync("123", "555");
        //}
        //[TestMethod]
        //public void SetPhoneAsync_IdentityManagerReturnsSuccess_ReturnsNoContent()
        //{
        //    var resp = Put("api/users/123/phone", new PhoneModel { Value = "555" });
        //    Assert.AreEqual(HttpStatusCode.NoContent, resp.StatusCode);
        //}
        //[TestMethod]
        //public void SetPhoneAsync_IdentityManagerReturnsError_ReturnsError()
        //{
        //    identityManager.SetupSetPhoneAsync("foo", "bar");
        //    var resp = Put("api/users/123/phone", new PhoneModel { Value = "555" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    Assert.AreEqual(2, error.Errors.Length);
        //    CollectionAssert.Contains(error.Errors, "foo");
        //    CollectionAssert.Contains(error.Errors, "bar");
        //}
        //[TestMethod]
        //public void SetPhoneAsync_IdentityManagerThrows_ReturnsErrors()
        //{
        //    identityManager.SetupSetPhoneAsync(new Exception("Boom"));
        //    var resp = Put("api/users/123/phone", new PhoneModel { Value = "555" });
        //    Assert.AreEqual(HttpStatusCode.InternalServerError, resp.StatusCode);
        //}
        //[TestMethod]
        //public void SetPhoneAsync_InvalidModel_DoesNotCallIdentityManager()
        //{
        //    Put("api/users/123/phone", new PhoneModel { Value = "" });
        //    Put("api/users/ /phone", new PhoneModel { Value = "555" });
        //    Put("api/users/123/phone", (PhoneModel)null);
        //    identityManager.VerifySetPhoneAsyncNotCalled();
        //}
        //[TestMethod]
        //public void SetPhoneAsync_MissingModel_ReturnsError()
        //{
        //    var resp = Put("api/users/123/phone", (PhoneModel)null);
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.PhoneDataRequired);
        //}
        //[TestMethod]
        //public void SetPhoneAsync_MissingPhone_ReturnsError()
        //{
        //    var resp = Put("api/users/123/phone", new PhoneModel { Value = "" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.PhoneRequired);
        //}
        //[TestMethod]
        //public void SetPhoneAsync_MissingSubject_ReturnsError()
        //{
        //    var resp = Put("api/users/ /phone", new PhoneModel { Value = "555" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.SubjectRequired);
        //}


        [TestMethod]
        public void AddClaimAsync_CallsIdentityManager()
        {
            Post("api/users/123/claims", new ClaimModel { Type="color", Value="blue" });
            identityManager.VerifyAddClaimAsync("123", "color", "blue");
        }
        [TestMethod]
        public void AddClaimAsync_IdentityManagerReturnsSuccess_ReturnsNoContent()
        {
            var resp = Post("api/users/123/claims", new ClaimModel { Type="color", Value="blue" });
            Assert.AreEqual(HttpStatusCode.NoContent, resp.StatusCode);
        }
        [TestMethod]
        public void AddClaimAsync_IdentityManagerReturnsError_ReturnsError()
        {
            identityManager.SetupAddClaimAsync("foo", "bar");
            var resp = Post("api/users/123/claims", new ClaimModel { Type = "color", Value = "blue" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            Assert.AreEqual(2, error.Errors.Length);
            CollectionAssert.Contains(error.Errors, "foo");
            CollectionAssert.Contains(error.Errors, "bar");
        }
        [TestMethod]
        public void AddClaimAsync_IdentityManagerThrows_ReturnsErrors()
        {
            identityManager.SetupAddClaimAsync(new Exception("Boom"));
            var resp = Post("api/users/123/claims", new ClaimModel { Type = "color", Value = "blue" });
            Assert.AreEqual(HttpStatusCode.InternalServerError, resp.StatusCode);
        }
        [TestMethod]
        public void AddClaimAsync_InvalidModel_DoesNotCallIdentityManager()
        {
            Post("api/users/123/claims", new ClaimModel { Type = "", Value = "blue" });
            Post("api/users/123/claims", new ClaimModel { Type = "color", Value = "" });
            Post("api/users/ /claims", new ClaimModel { Type = "color", Value = "blue" });
            Post("api/users/123/claims", (ClaimModel)null);
            identityManager.VerifyAddClaimAsyncNotCalled();
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
        public void RemoveClaimAsync_CallsIdentityManager()
        {
            Delete("api/users/123/claims/color/blue");
            identityManager.VerifyRemoveClaimAsync("123", "color", "blue");
        }
        [TestMethod]
        public void RemoveClaimAsync_IdentityManagerReturnsSuccess_ReturnsNoContent()
        {
            var resp = Delete("api/users/123/claims/color/blue");
            Assert.AreEqual(HttpStatusCode.NoContent, resp.StatusCode);
        }
        [TestMethod]
        public void RemoveClaimAsync_IdentityManagerReturnsError_ReturnsError()
        {
            identityManager.SetupRemoveClaimAsync("foo", "bar");
            var resp = Delete("api/users/123/claims/color/blue");
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            Assert.AreEqual(2, error.Errors.Length);
            CollectionAssert.Contains(error.Errors, "foo");
            CollectionAssert.Contains(error.Errors, "bar");
        }
        [TestMethod]
        public void RemoveClaimAsync_IdentityManagerThrows_ReturnsErrors()
        {
            identityManager.SetupRemoveClaimAsync(new Exception("Boom"));
            var resp = Delete("api/users/123/claims/color/blue");
            Assert.AreEqual(HttpStatusCode.InternalServerError, resp.StatusCode);
        }
        [TestMethod]
        public void RemoveClaimAsync_InvalidModel_DoesNotCallIdentityManager()
        {
            Delete("api/users/ /claims/color/blue");
            Delete("api/users/123/claims/ /blue");
            Delete("api/users/123/claims/color/ ");
            identityManager.VerifyRemoveClaimAsyncNotCalled();
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
