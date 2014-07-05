/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Thinktecture.IdentityManager.Core;

namespace Thinktecture.IdentityManager.AspNetIdentity
{
    public class IdentityManager<TUser> : IdentityManager<TUser, string, IdentityUserLogin, IdentityUserRole, IdentityUserClaim>
        where TUser : IdentityUser, new()
    {
        public IdentityManager(Microsoft.AspNet.Identity.UserManager<TUser> userManager, IDisposable cleanup)
            : base(userManager, cleanup)
        {
        }
    }

    public class IdentityManager<TUser, TKey, TUserLogin, TUserRole, TUserClaim> : IIdentityManagerService, IDisposable
        where TUser : IdentityUser<TKey, TUserLogin, TUserRole, TUserClaim>, new()
        //where TRole : IdentityRole<TKey, TUserRole>
        where TUserLogin : IdentityUserLogin<TKey>
        where TUserRole : IdentityUserRole<TKey>
        where TUserClaim : IdentityUserClaim<TKey>
        where TKey : IEquatable<TKey>
    {
        protected readonly Microsoft.AspNet.Identity.UserManager<TUser, TKey> userManager;
        IDisposable cleanup;

        protected readonly Func<string, TKey> ConvertSubjectToKey;

        public IdentityManager(Microsoft.AspNet.Identity.UserManager<TUser, TKey> userManager, IDisposable cleanup)
        {
            if (userManager == null) throw new ArgumentNullException("userManager");

            this.userManager = userManager;
            this.cleanup = cleanup;

            if (userManager.UserTokenProvider == null)
            {
                userManager.UserTokenProvider = new TokenProvider<TUser, TKey>();
            }

            var keyType = typeof(TKey);
            if (keyType == typeof(string)) ConvertSubjectToKey = subject => (TKey)ParseString(subject);
            else if (keyType == typeof(int)) ConvertSubjectToKey = subject => (TKey)ParseInt(subject);
            else if (keyType == typeof(long)) ConvertSubjectToKey = subject => (TKey)ParseLong(subject);
            else if (keyType == typeof(Guid)) ConvertSubjectToKey = subject => (TKey)ParseGuid(subject);
            else
            {
                throw new InvalidOperationException("Key type not supported");
            }
        }

        object ParseString(string sub)
        {
            return sub;
        }
        object ParseInt(string sub)
        {
            int key;
            if (!Int32.TryParse(sub, out key)) return 0;
            return key;
        }
        object ParseLong(string sub)
        {
            long key;
            if (!Int64.TryParse(sub, out key)) return 0;
            return key;
        }
        object ParseGuid(string sub)
        {
            Guid key;
            if (!Guid.TryParse(sub, out key)) return Guid.Empty;
            return key;
        }
        
        public void Dispose()
        {
            if (this.cleanup != null)
            {
                cleanup.Dispose();
                cleanup = null;
            }
        }

        public Task<IdentityManagerMetadata> GetMetadataAsync()
        {
            var claims = new ClaimMetadata[]
            {
                new ClaimMetadata{
                    ClaimType = Thinktecture.IdentityManager.Core.Constants.ClaimTypes.Subject,
                    DisplayName = "Subject",
                }
            };

            return Task.FromResult(new IdentityManagerMetadata
            {
                UniqueIdentitiferClaimType = Thinktecture.IdentityManager.Core.Constants.ClaimTypes.Subject,
                Claims = claims
            });
        }

        public Task<IdentityManagerResult<QueryResult>> QueryUsersAsync(string filter, int start, int count)
        {
            var query =
                from user in userManager.Users
                let display = (from claim in user.Claims
                               where claim.ClaimType == Thinktecture.IdentityManager.Core.Constants.ClaimTypes.Name
                               select claim.ClaimValue).FirstOrDefault()
                orderby display ?? user.UserName
                select user;
            
            if (!String.IsNullOrWhiteSpace(filter))
            {
                query =
                    from user in query
                    let claims = (from claim in user.Claims
                                  where claim.ClaimType == Thinktecture.IdentityManager.Core.Constants.ClaimTypes.Name && claim.ClaimValue.Contains(filter)
                                  select claim)
                    where user.UserName.Contains(filter) || claims.Any()
                    select user;
            }

            int total = query.Count();
            var users = query.Skip(start).Take(count).ToArray();

            var result = new QueryResult();
            result.Start = start;
            result.Count = count;
            result.Total = total;
            result.Filter = filter;
            result.Users = users.Select(x =>
            {
                var user = new UserResult
                {
                    Subject = x.Id.ToString(),
                    Username = x.UserName,
                    DisplayName = DisplayNameFromUser(x)
                };
                
                return user;
            }).ToArray();

            return Task.FromResult(new IdentityManagerResult<QueryResult>(result));
        }

        string DisplayNameFromUser(TUser user)
        {
            var claims = userManager.GetClaims(user.Id);
            var name = claims.Where(x=>x.Type == Thinktecture.IdentityManager.Core.Constants.ClaimTypes.Name).Select(x=>x.Value).FirstOrDefault();
            return name ?? user.UserName;
        }

        public async Task<IdentityManagerResult<UserResult>> GetUserAsync(string subject)
        {
            TKey key = ConvertSubjectToKey(subject);
            var user = await this.userManager.FindByIdAsync(key);
            if (user == null)
            {
                return new IdentityManagerResult<UserResult>("Invalid subject");
            }

            var result = new UserResult
            {
                Subject = subject,
                Username = user.UserName,
                DisplayName = DisplayNameFromUser(user),
                Email = user.Email,
                Phone = user.PhoneNumber,
            };
            var claims = new List<Thinktecture.IdentityManager.Core.UserClaim>();
            if (user.Claims != null)
            {
                claims.AddRange(user.Claims.Select(x => new Thinktecture.IdentityManager.Core.UserClaim { Type = x.ClaimType, Value = x.ClaimValue }));
            }
            result.Claims = claims.ToArray();

            return new IdentityManagerResult<UserResult>(result);
        }

        public async Task<IdentityManagerResult<CreateResult>> CreateUserAsync(string username, string password)
        {
            TUser user = new TUser{UserName = username};
            var result = await this.userManager.CreateAsync(user, password);
            if (!result.Succeeded)
            {
                return new IdentityManagerResult<CreateResult>(result.Errors.ToArray());
            }

            return new IdentityManagerResult<CreateResult>(new CreateResult { Subject = user.Id.ToString() });
        }
        
        public async Task<IdentityManagerResult> DeleteUserAsync(string subject)
        {
            TKey key = ConvertSubjectToKey(subject);
            var user = await this.userManager.FindByIdAsync(key);
            if (user == null)
            {
                return new IdentityManagerResult("Invalid subject");
            }

            var result = await this.userManager.DeleteAsync(user);
            if (!result.Succeeded)
            {
                return new IdentityManagerResult<CreateResult>(result.Errors.ToArray());
            }

            return IdentityManagerResult.Success;
        }

        public async Task<IdentityManagerResult> SetPasswordAsync(string subject, string password)
        {
            TKey key = ConvertSubjectToKey(subject);
            var token = await this.userManager.GeneratePasswordResetTokenAsync(key);
            var result = await this.userManager.ResetPasswordAsync(key, token, password);
            if (!result.Succeeded)
            {
                return new IdentityManagerResult<CreateResult>(result.Errors.ToArray());
            }

            return IdentityManagerResult.Success;
        }

        public async Task<IdentityManagerResult> SetEmailAsync(string subject, string email)
        {
            TKey key = ConvertSubjectToKey(subject);
            var result = await this.userManager.SetEmailAsync(key, email);
            if (!result.Succeeded)
            {
                return new IdentityManagerResult<CreateResult>(result.Errors.ToArray());
            }
            
            var token = await this.userManager.GenerateEmailConfirmationTokenAsync(key);
            result = this.userManager.ConfirmEmail(key, token);
            if (!result.Succeeded)
            {
                return new IdentityManagerResult<CreateResult>(result.Errors.ToArray());
            }

            return IdentityManagerResult.Success;
        }

        public async Task<IdentityManagerResult> SetPhoneAsync(string subject, string phone)
        {
            TKey key = ConvertSubjectToKey(subject);
            var token = await this.userManager.GenerateChangePhoneNumberTokenAsync(key, phone);
            var result = await this.userManager.ChangePhoneNumberAsync(key, phone, token);
            if (!result.Succeeded)
            {
                return new IdentityManagerResult<CreateResult>(result.Errors.ToArray());
            }

            return IdentityManagerResult.Success;
        }

        public async Task<IdentityManagerResult> AddClaimAsync(string subject, string type, string value)
        {
            TKey key = ConvertSubjectToKey(subject);
            var existingClaims = await userManager.GetClaimsAsync(key);
            if (!existingClaims.Any(x => x.Type == type && x.Value == value))
            {
                var result = await this.userManager.AddClaimAsync(key, new System.Security.Claims.Claim(type, value));
                if (!result.Succeeded)
                {
                    return new IdentityManagerResult<CreateResult>(result.Errors.ToArray());
                }
            }

            return IdentityManagerResult.Success;
        }

        public async Task<IdentityManagerResult> RemoveClaimAsync(string subject, string type, string value)
        {
            TKey key = ConvertSubjectToKey(subject);
            var result = await this.userManager.RemoveClaimAsync(key, new System.Security.Claims.Claim(type, value));
            if (!result.Succeeded)
            {
                return new IdentityManagerResult<CreateResult>(result.Errors.ToArray());
            }

            return IdentityManagerResult.Success;
        }
    }
}
