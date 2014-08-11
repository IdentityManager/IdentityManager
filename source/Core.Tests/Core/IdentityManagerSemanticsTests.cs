using System;
using System.Linq;
using Thinktecture.IdentityManager;
using Xunit;

namespace Core.Tests.Core
{
    public abstract class IdentityManagerSemanticsTests
    {
        abstract protected IIdentityManagerService CreateIdentityManager();
        abstract protected bool ValidatePassword(string uid, string pwd);

        IIdentityManagerService subject;

        public IdentityManagerSemanticsTests()
        {
            subject = CreateIdentityManager();
        }

        [Fact]
        public void GetMetadataAsync_ReturnsNonNullValue()
        {
            var task = subject.GetMetadataAsync();
            Assert.NotNull(task);
            Assert.NotNull(task.Result);
        }

        //[Fact]
        //public void GetUserAsync_InvalidSubject_ReturnsSuccessResultWithNullUser()
        //{
        //    var createResult = subject.CreateUserAsync("alice", "pass").Result;
        //    Assert.True(createResult.IsSuccess);
        //    Assert.NotNull(createResult.Result.Subject);

        //    subject = CreateIdentityManager();

        //    var getResult = subject.GetUserAsync(createResult.Result.Subject).Result;
        //    Assert.True(getResult.IsSuccess);
        //    Assert.Null(getResult.Result);
        //}

        //[Fact]
        //public void CreateUserAsync_CreatesUser()
        //{
        //    var createResult = subject.CreateUserAsync("alice", "pass").Result;
        //    Assert.True(createResult.IsSuccess);
        //    Assert.NotNull(createResult.Result.Subject);

        //    var getResult = subject.GetUserAsync(createResult.Result.Subject).Result;
        //    Assert.True(getResult.IsSuccess);
        //    Assert.NotNull(getResult.Result);
        //    Assert.Equal("alice", getResult.Result.Username);
        //}
        
        //[Fact]
        //public void CreateUserAsync_DuplicateUsers_ReturnsError()
        //{
        //    var createResult = subject.CreateUserAsync("alice", "pass").Result;
        //    createResult = subject.CreateUserAsync("alice", "pass").Result;
        //    Assert.False(createResult.IsSuccess);
        //}
        
        //[Fact]
        //public void CreateUserAsync_UserCanLoginWithPassword()
        //{
        //    var createResult = subject.CreateUserAsync("alice", "pass").Result;
        //    Assert.True(ValidatePassword("alice", "pass"));
        //}
        //[Fact]
        //public void CreateUserAsync_NoUsername_ReturnsError()
        //{
        //    var createResult = subject.CreateUserAsync("", "pass").Result;
        //    Assert.False(createResult.IsSuccess);
        //}
        //[Fact]
        //public void CreateUserAsync_NoPassword_ReturnsError()
        //{
        //    var createResult = subject.CreateUserAsync("user", "").Result;
        //    Assert.False(createResult.IsSuccess);
        //}

        //[Fact]
        //public void DeleteUserAsync_DeletesUser()
        //{
        //    var createResult = subject.CreateUserAsync("alice", "pass").Result;
        //    Assert.True(createResult.IsSuccess);
        //    Assert.NotNull(createResult.Result.Subject);

        //    var deleteResult = subject.DeleteUserAsync(createResult.Result.Subject).Result;
        //    Assert.True(deleteResult.IsSuccess);
        //}
        [Fact]
        public void DeleteUserAsync_NoSubject_ReturnsError()
        {
            var result = subject.DeleteUserAsync("").Result;
            Assert.False(result.IsSuccess);
        }

        //[Fact]
        //public void SetPasswordAsync_SetsPassword()
        //{
        //    var id = subject.CreateUserAsync("alice", "pass").Result.Result.Subject;
        //    var result = subject.SetPasswordAsync(id, "pass2").Result;
        //    Assert.True(result.IsSuccess);
        //    Assert.True(ValidatePassword("alice", "pass2"));
        //}
        //[Fact]
        //public void SetPasswordAsync_NoSubject_ReturnsError()
        //{
        //    var result = subject.SetPasswordAsync("", "pass").Result;
        //    Assert.False(result.IsSuccess);
        //}
        //[Fact]
        //public void SetPasswordAsync_NoPassword_ReturnsError()
        //{
        //    var id = subject.CreateUserAsync("alice", "pass").Result.Result.Subject;
        //    var result = subject.SetPasswordAsync(id, "").Result;
        //    Assert.False(result.IsSuccess);
        //}

        //[Fact]
        //public void SetEmailAsync_SetsEmail()
        //{
        //    var id = subject.CreateUserAsync("alice", "pass").Result.Result.Subject;
        //    var result = subject.SetEmailAsync(id, "alice@foo.com").Result;
        //    Assert.True(result.IsSuccess);
        //    var user = subject.GetUserAsync(id).Result.Result;
        //    Assert.Equal("alice@foo.com", user.Email);
        //}
        //[Fact]
        //public void SetEmailAsync_NoSubject_ReturnsError()
        //{
        //    var result = subject.SetEmailAsync("", "alice@foo.com").Result;
        //    Assert.False(result.IsSuccess);
        //}
        
        //[Fact]
        //public void SetPhoneAsync_SetsPhone()
        //{
        //    var id = subject.CreateUserAsync("alice", "pass").Result.Result.Subject;
        //    var result = subject.SetPhoneAsync(id, "123").Result;
        //    Assert.True(result.IsSuccess);
        //    var user = subject.GetUserAsync(id).Result.Result;
        //    Assert.Equal("123", user.Phone);
        //}
        //[Fact]
        //public void SetPhoneAsync_NoSubject_ReturnsError()
        //{
        //    var result = subject.SetPhoneAsync("", "123").Result;
        //    Assert.False(result.IsSuccess);
        //}
        
        //public void AddClaimAsync_AddsClaim()
        //{
        //    var id = subject.CreateUserAsync("alice", "pass").Result.Result.Subject;
        //    var result = subject.AddClaimAsync(id, "color", "blue").Result;
        //    Assert.True(result.IsSuccess);
        //    var user = subject.GetUserAsync(id).Result.Result;
        //    Assert.NotEmpty(user.Claims);
        //    user.Claims.Single(x => x.Type == "color" && x.Value == "blue");
        //}
        
        //public void AddClaimAsync_DuplicateClaims_ReturnsSuccessButOnlyAddsClaimOnce()
        //{
        //    var id = subject.CreateUserAsync("alice", "pass").Result.Result.Subject;
        //    var result = subject.AddClaimAsync(id, "color", "blue").Result;
        //    result = subject.AddClaimAsync(id, "color", "blue").Result;
        //    Assert.True(result.IsSuccess);
        //    var user = subject.GetUserAsync(id).Result.Result;
        //    Assert.NotEmpty(user.Claims);
        //    user.Claims.Single(x => x.Type == "color" && x.Value == "blue");
        //}

        //public void RemoveClaimAsync_RemovesClaim()
        //{
        //    var id = subject.CreateUserAsync("alice", "pass").Result.Result.Subject;
        //    var result = subject.AddClaimAsync(id, "color", "blue").Result;
        //    result = subject.RemoveClaimAsync(id, "color", "blue").Result;
        //    Assert.True(result.IsSuccess);
        //    var user = subject.GetUserAsync(id).Result.Result;
        //    Assert.Empty(user.Claims);
        //}
        
        //public void RemoveClaimAsync_InvalidClaim_ReturnsSuccess()
        //{
        //    var id = subject.CreateUserAsync("alice", "pass").Result.Result.Subject;
        //    var result = subject.RemoveClaimAsync(id, "color", "blue").Result;
        //    Assert.True(result.IsSuccess);
        //    var user = subject.GetUserAsync(id).Result.Result;
        //    Assert.Empty(user.Claims);
        //}
    }
}
