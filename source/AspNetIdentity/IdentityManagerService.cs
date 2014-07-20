/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Thinktecture.IdentityManager.Core;

namespace Thinktecture.IdentityManager.AspNetIdentity
{
    public class IdentityManagerService<TUser, TKey> : IIdentityManagerService, IDisposable
        where TUser : class, IUser<TKey>, new()
        where TKey : IEquatable<TKey>
    {
        protected readonly Microsoft.AspNet.Identity.UserManager<TUser, TKey> userManager;
        IDisposable cleanup;

        protected readonly Func<string, TKey> ConvertSubjectToKey;

        public IdentityManagerService(
            UserManager<TUser, TKey> userManager, 
            IDisposable cleanup = null)
        {
            if (userManager == null) throw new ArgumentNullException("userManager");

            if (!userManager.SupportsQueryableUsers)
            {
                throw new InvalidOperationException("UserManager must support queryable users.");
            }

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
                orderby user.UserName
                select user;

            if (!String.IsNullOrWhiteSpace(filter))
            {
                query =
                    from user in query
                    where user.UserName.Contains(filter)
                    orderby user.UserName
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
            var name = claims.Where(x => x.Type == Thinktecture.IdentityManager.Core.Constants.ClaimTypes.Name).Select(x => x.Value).FirstOrDefault();
            return name ?? user.UserName;
        }

        public async Task<IdentityManagerResult<UserDetail>> GetUserAsync(string subject)
        {
            TKey key = ConvertSubjectToKey(subject);
            var user = await this.userManager.FindByIdAsync(key);
            if (user == null)
            {
                return new IdentityManagerResult<UserDetail>((UserDetail)null);
            }

            var result = new UserDetail
            {
                Subject = subject,
                Username = user.UserName,
                DisplayName = DisplayNameFromUser(user),
            };
            if (userManager.SupportsUserEmail)
            {
                result.Email = await userManager.GetEmailAsync(key);
            }
            if (userManager.SupportsUserPhoneNumber)
            {
                result.Phone = await userManager.GetPhoneNumberAsync(key);
            }
            if (userManager.SupportsUserClaim)
            {
                var userClaims = await userManager.GetClaimsAsync(key);
                var claims = new List<Thinktecture.IdentityManager.Core.UserClaim>();
                if (userClaims != null)
                {
                    claims.AddRange(userClaims.Select(x => new Thinktecture.IdentityManager.Core.UserClaim { Type = x.Type, Value = x.Value }));
                }
                result.Claims = claims.ToArray();
            }

            return new IdentityManagerResult<UserDetail>(result);
        }

        public async Task<IdentityManagerResult<CreateResult>> CreateUserAsync(string username, string password)
        {
            TUser user = new TUser { UserName = username };
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
            var user = await this.userManager.FindByIdAsync(key);
            if (user == null)
            {
                return new IdentityManagerResult("Invalid subject");
            } 
            
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
            var user = await this.userManager.FindByIdAsync(key);
            if (user == null)
            {
                return new IdentityManagerResult("Invalid subject");
            }

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
            var user = await this.userManager.FindByIdAsync(key);
            if (user == null)
            {
                return new IdentityManagerResult("Invalid subject");
            } 
            
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
            var user = await this.userManager.FindByIdAsync(key);
            if (user == null)
            {
                return new IdentityManagerResult("Invalid subject");
            } 
            
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
            var user = await this.userManager.FindByIdAsync(key);
            if (user == null)
            {
                return new IdentityManagerResult("Invalid subject");
            } 
            
            var result = await this.userManager.RemoveClaimAsync(key, new System.Security.Claims.Claim(type, value));
            if (!result.Succeeded)
            {
                return new IdentityManagerResult<CreateResult>(result.Errors.ToArray());
            }

            return IdentityManagerResult.Success;
        }
    }
}
