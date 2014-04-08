using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Thinktecture.IdentityManager.AspNetIdentity
{
    class TokenProvider<TUser, TKey> : IUserTokenProvider<TUser, TKey>
        where TUser : class, IUser<TKey>, new()
        where TKey : System.IEquatable<TKey>
    {
        public Task<string> GenerateAsync(string purpose, Microsoft.AspNet.Identity.UserManager<TUser, TKey> manager, TUser user)
        {
            return Task.FromResult(purpose + user.Id);
        }

        public Task<bool> IsValidProviderForUserAsync(Microsoft.AspNet.Identity.UserManager<TUser, TKey> manager, TUser user)
        {
            return Task.FromResult(true);
        }

        public Task NotifyAsync(string token, Microsoft.AspNet.Identity.UserManager<TUser, TKey> manager, TUser user)
        {
            return Task.FromResult(0);
        }

        public Task<bool> ValidateAsync(string purpose, string token, Microsoft.AspNet.Identity.UserManager<TUser, TKey> manager, TUser user)
        {
            return Task.FromResult((purpose + user.Id) == token);
        }
    }
}
