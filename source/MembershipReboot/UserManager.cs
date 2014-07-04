/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using BrockAllen.MembershipReboot;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Thinktecture.IdentityManager.Core;

namespace Thinktecture.IdentityManager.MembershipReboot
{
    public class UserManager<TAccount> : IUserManager, IDisposable
        where TAccount : UserAccount
    {
        readonly UserAccountService<TAccount> userAccountService;
        readonly IUserAccountQuery query;
        IDisposable cleanup;

        public UserManager(
            UserAccountService<TAccount> userAccountService,
            IUserAccountQuery query,
            IDisposable cleanup)
        {
            if (userAccountService == null) throw new ArgumentNullException("userAccountService");
            if (query == null) throw new ArgumentNullException("query");

            this.userAccountService = userAccountService;
            this.query = query;
            this.cleanup = cleanup;
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
                    ClaimType = Constants.ClaimTypes.Subject,
                    DisplayName = "Subject",
                }
            };

            return Task.FromResult(new UserManagerMetadata
            {
                UniqueIdentitiferClaimType = Constants.ClaimTypes.Subject,
                Claims = claims
            });
        }

        public Task<UserManagerResult<QueryResult>> QueryUsersAsync(string filter, int start, int count)
        {
            int total;
            var users = query.Query(filter, start, count, out total).ToArray();

            var result = new QueryResult();
            result.Start = start;
            result.Count = count;
            result.Total = total;
            result.Filter = filter;
            result.Users = users.Select(x =>
            {
                var user = new UserResult
                {
                    Subject = x.ID.ToString("D"),
                    Username = x.Username,
                    DisplayName = DisplayNameFromUserId(x.ID)
                };
                
                return user;
            }).ToArray();

            return Task.FromResult(new UserManagerResult<QueryResult>(result));
        }

        string DisplayNameFromUserId(Guid id)
        {
            var acct = userAccountService.GetByID(id);
            var name = acct.GetClaimValues(Constants.ClaimTypes.Name).FirstOrDefault();
            if (name == null) name = acct.Username;
            return name;
        }

        public Task<UserManagerResult<UserResult>> GetUserAsync(string subject)
        {
            Guid g;
            if (!Guid.TryParse(subject, out g))
            {
                return Task.FromResult(new UserManagerResult<UserResult>("Invalid subject"));
            }

            try
            {
                var acct = this.userAccountService.GetByID(g);
                if (acct == null)
                {
                    return Task.FromResult(new UserManagerResult<UserResult>("Invalid subject"));
                }

                var user = new UserResult
                {
                    Subject = subject,
                    Username = acct.Username,
                    DisplayName = DisplayNameFromUserId(acct.ID),
                    Email = acct.Email,
                    Phone = acct.MobilePhoneNumber,
                };
                var claims = new List<Thinktecture.IdentityManager.Core.UserClaim>();
                if (acct.Claims != null)
                {
                    claims.AddRange(acct.Claims.Select(x => new Thinktecture.IdentityManager.Core.UserClaim { Type = x.Type, Value = x.Value }));
                }
                user.Claims = claims.ToArray();

                return Task.FromResult(new UserManagerResult<UserResult>(user));
            }
            catch (ValidationException ex)
            {
                return Task.FromResult(new UserManagerResult<UserResult>(ex.Message));
            }
        }

        public Task<UserManagerResult<CreateResult>> CreateUserAsync(string username, string password)
        {
            try
            {
                UserAccount acct;
                if (this.userAccountService.Configuration.EmailIsUsername)
                {
                    acct = this.userAccountService.CreateAccount(null, password, username);
                }
                else
                {
                    acct = this.userAccountService.CreateAccount(username, password, null);
                }

                return Task.FromResult(new UserManagerResult<CreateResult>(new CreateResult { Subject = acct.ID.ToString("D") }));
            }
            catch (ValidationException ex)
            {
                return Task.FromResult(new UserManagerResult<CreateResult>(ex.Message));
            }
        }
        
        public Task<UserManagerResult> DeleteUserAsync(string subject)
        {
            Guid g;
            if (!Guid.TryParse(subject, out g))
            {
                return Task.FromResult(new UserManagerResult("Invalid subject"));
            }

            try
            {
                this.userAccountService.DeleteAccount(g);
            }
            catch (ValidationException ex)
            {
                return Task.FromResult(new UserManagerResult(ex.Message));
            } 

            return Task.FromResult(UserManagerResult.Success);
        }

        public Task<UserManagerResult> SetPasswordAsync(string subject, string password)
        {
            Guid g;
            if (!Guid.TryParse(subject, out g))
            {
                return Task.FromResult(new UserManagerResult("Invalid subject"));
            }

            try
            {
                this.userAccountService.SetPassword(g, password);
            }
            catch (ValidationException ex)
            {
                return Task.FromResult(new UserManagerResult(ex.Message));
            }

            return Task.FromResult(UserManagerResult.Success);
        }

        public Task<UserManagerResult> SetEmailAsync(string subject, string email)
        {
            Guid id;
            if (!Guid.TryParse(subject, out id))
            {
                return Task.FromResult(new UserManagerResult("Invalid subject"));
            }

            try
            {
                this.userAccountService.SetConfirmedEmail(id, email);
            }
            catch (ValidationException ex)
            {
                return Task.FromResult(new UserManagerResult(ex.Message));
            }

            return Task.FromResult(UserManagerResult.Success);
        }

        public Task<UserManagerResult> SetPhoneAsync(string subject, string phone)
        {
            Guid id;
            if (!Guid.TryParse(subject, out id))
            {
                return Task.FromResult(new UserManagerResult("Invalid id"));
            }

            try
            {
                this.userAccountService.SetConfirmedMobilePhone(id, phone);
            }
            catch (ValidationException ex)
            {
                return Task.FromResult(new UserManagerResult(ex.Message));
            }

            return Task.FromResult(UserManagerResult.Success);
        }

        public Task<UserManagerResult> AddClaimAsync(string subject, string type, string value)
        {
            Guid g;
            if (!Guid.TryParse(subject, out g))
            {
                return Task.FromResult(new UserManagerResult("Invalid user."));
            }

            try
            {
                this.userAccountService.AddClaim(g, type, value);
            }
            catch (ValidationException ex)
            {
                return Task.FromResult(new UserManagerResult(ex.Message));
            }

            return Task.FromResult(UserManagerResult.Success);
        }

        public Task<UserManagerResult> RemoveClaimAsync(string subject, string type, string value)
        {
            Guid g;
            if (!Guid.TryParse(subject, out g))
            {
                return Task.FromResult(new UserManagerResult("Invalid user."));
            }

            try
            {
                this.userAccountService.RemoveClaim(g, type, value);
            }
            catch (ValidationException ex)
            {
                return Task.FromResult(new UserManagerResult(ex.Message));
            }

            return Task.FromResult(UserManagerResult.Success);
        }
    }
}
