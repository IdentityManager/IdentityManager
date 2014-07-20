using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace AspNetIdentity.Tests
{
    public class InMemoryUserStore :
     IUserStore<InMemoryUser>,
     IUserLoginStore<InMemoryUser>,
     IUserRoleStore<InMemoryUser>,
     IUserClaimStore<InMemoryUser>,
     IUserPasswordStore<InMemoryUser>,
     IUserSecurityStampStore<InMemoryUser>,
     IUserEmailStore<InMemoryUser>,
     IUserLockoutStore<InMemoryUser, string>,
     IUserPhoneNumberStore<InMemoryUser>,
     IQueryableUserStore<InMemoryUser>
    {
        private readonly Dictionary<UserLoginInfo, InMemoryUser> _logins =
            new Dictionary<UserLoginInfo, InMemoryUser>(new LoginComparer());

        private readonly Dictionary<string, InMemoryUser> _users = new Dictionary<string, InMemoryUser>();

        public IQueryable<InMemoryUser> Users
        {
            get { return _users.Values.AsQueryable(); }
        }

        public Task<IList<Claim>> GetClaimsAsync(InMemoryUser user)
        {
            return Task.FromResult(user.Claims);
        }

        public Task AddClaimAsync(InMemoryUser user, Claim claim)
        {
            user.Claims.Add(claim);
            return Task.FromResult(0);
        }

        public Task RemoveClaimAsync(InMemoryUser user, Claim claim)
        {
            user.Claims.Remove(claim);
            return Task.FromResult(0);
        }

        public Task AddLoginAsync(InMemoryUser user, UserLoginInfo login)
        {
            user.Logins.Add(login);
            _logins[login] = user;
            return Task.FromResult(0);
        }

        public Task RemoveLoginAsync(InMemoryUser user, UserLoginInfo login)
        {
            var logs =
                user.Logins.Where(l => l.ProviderKey == login.ProviderKey && l.LoginProvider == login.LoginProvider)
                .ToList();
            foreach (var l in logs)
            {
                user.Logins.Remove(l);
                _logins[l] = null;
            }
            return Task.FromResult(0);
        }

        public Task<IList<UserLoginInfo>> GetLoginsAsync(InMemoryUser user)
        {
            return Task.FromResult(user.Logins);
        }

        public Task<InMemoryUser> FindAsync(UserLoginInfo login)
        {
            if (_logins.ContainsKey(login))
            {
                return Task.FromResult(_logins[login]);
            }
            return Task.FromResult<InMemoryUser>(null);
        }

        public Task SetPasswordHashAsync(InMemoryUser user, string passwordHash)
        {
            user.PasswordHash = passwordHash;
            return Task.FromResult(0);
        }

        public Task<string> GetPasswordHashAsync(InMemoryUser user)
        {
            return Task.FromResult(user.PasswordHash);
        }

        public Task<bool> HasPasswordAsync(InMemoryUser user)
        {
            return Task.FromResult(user.PasswordHash != null);
        }

        public Task AddToRoleAsync(InMemoryUser user, string role)
        {
            user.Roles.Add(role);
            return Task.FromResult(0);
        }

        public Task RemoveFromRoleAsync(InMemoryUser user, string role)
        {
            user.Roles.Remove(role);
            return Task.FromResult(0);
        }

        public Task<IList<string>> GetRolesAsync(InMemoryUser user)
        {
            return Task.FromResult(user.Roles);
        }

        public Task<bool> IsInRoleAsync(InMemoryUser user, string role)
        {
            return Task.FromResult(user.Roles.Contains(role));
        }

        public Task SetSecurityStampAsync(InMemoryUser user, string stamp)
        {
            user.SecurityStamp = stamp;
            return Task.FromResult(0);
        }

        public Task<string> GetSecurityStampAsync(InMemoryUser user)
        {
            return Task.FromResult(user.SecurityStamp);
        }

        public Task CreateAsync(InMemoryUser user)
        {
            _users[user.Id] = user;
            return Task.FromResult(0);
        }

        public Task UpdateAsync(InMemoryUser user)
        {
            _users[user.Id] = user;
            return Task.FromResult(0);
        }

        public Task<InMemoryUser> FindByIdAsync(string userId)
        {
            if (_users.ContainsKey(userId))
            {
                return Task.FromResult(_users[userId]);
            }
            return Task.FromResult<InMemoryUser>(null);
        }

        public void Dispose()
        {
        }

        public Task<InMemoryUser> FindByNameAsync(string userName)
        {
            return Task.FromResult(Users.FirstOrDefault(u => String.Equals(u.UserName, userName, StringComparison.OrdinalIgnoreCase)));
        }

        public Task DeleteAsync(InMemoryUser user)
        {
            if (user == null || !_users.ContainsKey(user.Id))
            {
                throw new InvalidOperationException("Unknown user");
            }
            _users.Remove(user.Id);
            return Task.FromResult(0);
        }

        public Task SetEmailAsync(InMemoryUser user, string email)
        {
            user.Email = email;
            return Task.FromResult(0);
        }

        public Task<string> GetEmailAsync(InMemoryUser user)
        {
            return Task.FromResult(user.Email);
        }

        public Task<bool> GetEmailConfirmedAsync(InMemoryUser user)
        {
            return Task.FromResult(user.EmailConfirmed);
        }

        public Task SetEmailConfirmedAsync(InMemoryUser user, bool confirmed)
        {
            user.EmailConfirmed = confirmed;
            return Task.FromResult(0);
        }

        public Task<InMemoryUser> FindByEmailAsync(string email)
        {
            return Task.FromResult(Users.FirstOrDefault(u => String.Equals(u.Email, email, StringComparison.OrdinalIgnoreCase)));
        }

        public Task<DateTimeOffset> GetLockoutEndDateAsync(InMemoryUser user)
        {
            return Task.FromResult(user.LockoutEnd);
        }

        public Task SetLockoutEndDateAsync(InMemoryUser user, DateTimeOffset lockoutEnd)
        {
            user.LockoutEnd = lockoutEnd;
            return Task.FromResult(0);
        }

        public Task<int> IncrementAccessFailedCountAsync(InMemoryUser user)
        {
            user.AccessFailedCount++;
            return Task.FromResult(user.AccessFailedCount);
        }

        public Task ResetAccessFailedCountAsync(InMemoryUser user)
        {
            user.AccessFailedCount = 0;
            return Task.FromResult(0);
        }

        public Task<int> GetAccessFailedCountAsync(InMemoryUser user)
        {
            return Task.FromResult(user.AccessFailedCount);
        }

        public Task<bool> GetLockoutEnabledAsync(InMemoryUser user)
        {
            return Task.FromResult(user.LockoutEnabled);
        }

        public Task SetLockoutEnabledAsync(InMemoryUser user, bool enabled)
        {
            user.LockoutEnabled = enabled;
            return Task.FromResult(0);
        }

        public Task SetPhoneNumberAsync(InMemoryUser user, string phoneNumber)
        {
            user.PhoneNumber = phoneNumber;
            return Task.FromResult(0);
        }

        public Task<string> GetPhoneNumberAsync(InMemoryUser user)
        {
            return Task.FromResult(user.PhoneNumber);
        }

        public Task<bool> GetPhoneNumberConfirmedAsync(InMemoryUser user)
        {
            return Task.FromResult(user.PhoneNumberConfirmed);
        }

        public Task SetPhoneNumberConfirmedAsync(InMemoryUser user, bool confirmed)
        {
            user.PhoneNumberConfirmed = confirmed;
            return Task.FromResult(0);
        }
    }

}
