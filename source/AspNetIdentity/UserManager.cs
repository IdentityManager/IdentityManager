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
    public class UserManager<TUser> : IUserManager, IDisposable
        where TUser : IdentityUser, new()
    {
        protected readonly Microsoft.AspNet.Identity.UserManager<TUser> userManager;
        IDisposable cleanup;

        public UserManager(Microsoft.AspNet.Identity.UserManager<TUser> userManager, IDisposable cleanup)
        {
            if (userManager == null) throw new ArgumentNullException("userManager");

            this.userManager = userManager;
            this.cleanup = cleanup;

            if (userManager.UserTokenProvider == null)
            {
                userManager.UserTokenProvider = new TokenProvider<TUser, string>();
            }
        }

        public void Dispose()
        {
            if (this.cleanup != null)
            {
                cleanup.Dispose();
                cleanup = null;
            }
        }

        public Task<UserManagerMetadata> GetMetadataAsync()
        {
            var claims = new ClaimMetadata[]
            {
                new ClaimMetadata{
                    ClaimType = Thinktecture.IdentityManager.Core.Constants.ClaimTypes.Subject,
                    DisplayName = "Subject",
                }
            };

            return Task.FromResult(new UserManagerMetadata
            {
                UniqueIdentitiferClaimType = Thinktecture.IdentityManager.Core.Constants.ClaimTypes.Subject,
                Claims = claims
            });
        }

        public Task<UserManagerResult<QueryResult>> QueryUsersAsync(string filter, int start, int count)
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
                    Subject = x.Id,
                    Username = x.UserName,
                    DisplayName = DisplayNameFromUser(x)
                };
                
                return user;
            }).ToArray();

            return Task.FromResult(new UserManagerResult<QueryResult>(result));
        }

        string DisplayNameFromUser(TUser user)
        {
            var claims = userManager.GetClaims(user.Id);
            var name = claims.Where(x=>x.Type == Thinktecture.IdentityManager.Core.Constants.ClaimTypes.Name).Select(x=>x.Value).FirstOrDefault();
            return name ?? user.UserName;
        }

        public async Task<UserManagerResult<UserResult>> GetUserAsync(string subject)
        {
            var user = await this.userManager.FindByIdAsync(subject);
            if (user == null)
            {
                return new UserManagerResult<UserResult>("Invalid subject");
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

            return new UserManagerResult<UserResult>(result);
        }

        public async Task<UserManagerResult<CreateResult>> CreateUserAsync(string username, string password)
        {
            TUser user = new TUser{UserName = username};
            var result = await this.userManager.CreateAsync(user, password);
            if (!result.Succeeded)
            {
                return new UserManagerResult<CreateResult>(result.Errors.ToArray());
            }

            return new UserManagerResult<CreateResult>(new CreateResult { Subject = user.Id });
        }
        
        public async Task<UserManagerResult> DeleteUserAsync(string subject)
        {
            var user = await this.userManager.FindByIdAsync(subject);
            if (user == null)
            {
                return new UserManagerResult("Invalid subject");
            }

            var result = await this.userManager.DeleteAsync(user);
            if (!result.Succeeded)
            {
                return new UserManagerResult<CreateResult>(result.Errors.ToArray());
            }

            return UserManagerResult.Success;
        }

        public async Task<UserManagerResult> SetPasswordAsync(string subject, string password)
        {
            var token = await this.userManager.GeneratePasswordResetTokenAsync(subject);
            var result = await this.userManager.ResetPasswordAsync(subject, token, password);
            if (!result.Succeeded)
            {
                return new UserManagerResult<CreateResult>(result.Errors.ToArray());
            }

            return UserManagerResult.Success;
        }

        public async Task<UserManagerResult> SetEmailAsync(string subject, string email)
        {
            var result = await this.userManager.SetEmailAsync(subject, email);
            if (!result.Succeeded)
            {
                return new UserManagerResult<CreateResult>(result.Errors.ToArray());
            }
            
            var token = await this.userManager.GenerateEmailConfirmationTokenAsync(subject);
            result = this.userManager.ConfirmEmail(subject, token);
            if (!result.Succeeded)
            {
                return new UserManagerResult<CreateResult>(result.Errors.ToArray());
            }

            return UserManagerResult.Success;
        }

        public async Task<UserManagerResult> SetPhoneAsync(string subject, string phone)
        {
            var token = await this.userManager.GenerateChangePhoneNumberTokenAsync(subject, phone);
            var result = await this.userManager.ChangePhoneNumberAsync(subject, phone, token);
            if (!result.Succeeded)
            {
                return new UserManagerResult<CreateResult>(result.Errors.ToArray());
            }

            return UserManagerResult.Success;
        }

        public async Task<UserManagerResult> AddClaimAsync(string subject, string type, string value)
        {
            var existingClaims = await userManager.GetClaimsAsync(subject);
            if (!existingClaims.Any(x => x.Type == type && x.Value == value))
            {
                var result = await this.userManager.AddClaimAsync(subject, new System.Security.Claims.Claim(type, value));
                if (!result.Succeeded)
                {
                    return new UserManagerResult<CreateResult>(result.Errors.ToArray());
                }
            }

            return UserManagerResult.Success;
        }

        public async Task<UserManagerResult> DeleteClaimAsync(string subject, string type, string value)
        {
            var result = await this.userManager.RemoveClaimAsync(subject, new System.Security.Claims.Claim(type, value));
            if (!result.Succeeded)
            {
                return new UserManagerResult<CreateResult>(result.Errors.ToArray());
            }

            return UserManagerResult.Success;
        }
    }
}
