using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Thinktecture.IdentityManager.Core;

namespace Core.Tests.Api
{
    public class FakeUserManager : Mock<IUserManager>
    {
        public FakeUserManager()
        {
            this.SetReturnsDefault(Task.FromResult(new UserManagerResult()));
            this.SetReturnsDefault(Task.FromResult(new UserManagerResult<QueryResult>(new QueryResult())));
            this.SetReturnsDefault(Task.FromResult(new UserManagerResult<CreateResult>(new CreateResult())));
            this.SetReturnsDefault(Task.FromResult(new UserManagerResult<UserResult>(new UserResult())));
        }


        public void SetupQueryUsersAsync(QueryResult result)
        {
            Setup(x => x.QueryUsersAsync(It.IsAny<string>(), It.IsAny<int>(), It.IsAny<int>()))
                .Returns(Task.FromResult(new UserManagerResult<QueryResult>(result)));
        }
        public void SetupQueryUsersAsync(params string[] errors)
        {
            Setup(x => x.QueryUsersAsync(It.IsAny<string>(), It.IsAny<int>(), It.IsAny<int>()))
                .Returns(Task.FromResult(new UserManagerResult<QueryResult>(errors)));
        }
        public void SetupQueryUsersAsync(Exception ex)
        {
            Setup(x => x.QueryUsersAsync(It.IsAny<string>(), It.IsAny<int>(), It.IsAny<int>()))
                .Throws(ex);
        }
        

        public void VerifyQueryUsersAsync()
        {
            Verify(x=>x.QueryUsersAsync(It.IsAny<string>(), It.IsAny<int>(), It.IsAny<int>()));
        }
        public void VerifyQueryUsersAsync(string filter, int start, int count)
        {
            Verify(x=>x.QueryUsersAsync(filter, start, count));
        }


        public void SetupCreateUserAsync(CreateResult result)
        {
            Setup(x => x.CreateUserAsync(It.IsAny<string>(), It.IsAny<string>()))
               .Returns(Task.FromResult(new UserManagerResult<CreateResult>(result)));
        }
        public void SetupCreateUserAsync(params string[] errors)
        {
            Setup(x => x.CreateUserAsync(It.IsAny<string>(), It.IsAny<string>()))
               .Returns(Task.FromResult(new UserManagerResult<CreateResult>(errors)));
        }
        public void VerifyCreateUserAsync(string username, string password)
        {
            Verify(x => x.CreateUserAsync(username, password));
        }
        public void VerifyCreateUserAsyncNotCalled()
        {
            Verify(x => x.CreateUserAsync(It.IsAny<string>(), It.IsAny<string>()), Times.Never());
        }

        
        internal void VerifyGetUserAsync(string subject)
        {
            Verify(x => x.GetUserAsync(subject));
        }
        internal void SetupGetUserAsync(UserResult userResult)
        {
            Setup(x => x.GetUserAsync(It.IsAny<string>()))
                .Returns(Task.FromResult(new UserManagerResult<UserResult>(userResult)));
        }
        internal void SetupGetUserAsync(params string[] errors)
        {
            Setup(x => x.GetUserAsync(It.IsAny<string>()))
                .Returns(Task.FromResult(new UserManagerResult<UserResult>(errors)));
        }

        
        internal void VerifyDeleteUserAsync(string subject)
        {
            Verify(x => x.DeleteUserAsync(subject));
        }
        internal void SetupDeleteUserAsync(params string[] errors)
        {
            Setup(x => x.DeleteUserAsync(It.IsAny<string>()))
                .Returns(Task.FromResult(new UserManagerResult(errors)));
        }
    }
}
