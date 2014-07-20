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
    public class IdentityManagerService<TAccount> : IIdentityManagerService, IDisposable
        where TAccount : UserAccount
    {
        readonly UserAccountService<TAccount> userAccountService;
        readonly IUserAccountQuery query;
        IDisposable cleanup;

        public IdentityManagerService(
            UserAccountService<TAccount> userAccountService, 
            IUserAccountQuery query, 
            IDisposable cleanup = null)
        {
            if (userAccountService == null) throw new ArgumentNullException("userAccountService");
            if (query == null) throw new ArgumentNullException("query");

            this.userAccountService = userAccountService;
            this.query = query;
            this.cleanup = cleanup;
        }

        public virtual void Dispose()
        {
            if (this.cleanup != null)
            {
                this.cleanup.Dispose();
                this.cleanup = null;
            }
        }

        public Task<IdentityManagerMetadata> GetMetadataAsync()
        {
            var claims = new ClaimMetadata[]
            {
                new ClaimMetadata{
                    ClaimType = Constants.ClaimTypes.Subject,
                    DisplayName = "Subject",
                }
            };

            return Task.FromResult(new IdentityManagerMetadata
            {
                UniqueIdentitiferClaimType = Constants.ClaimTypes.Subject,
                Claims = claims
            });
        }

        public Task<IdentityManagerResult<QueryResult>> QueryUsersAsync(string filter, int start, int count)
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

            return Task.FromResult(new IdentityManagerResult<QueryResult>(result));
        }

        string DisplayNameFromUserId(Guid id)
        {
            var acct = userAccountService.GetByID(id);
            var name = acct.GetClaimValues(Constants.ClaimTypes.Name).FirstOrDefault();
            if (name == null) name = acct.Username;
            return name;
        }

        public Task<IdentityManagerResult<UserDetail>> GetUserAsync(string subject)
        {
            Guid g;
            if (!Guid.TryParse(subject, out g))
            {
                return Task.FromResult(new IdentityManagerResult<UserDetail>("Invalid subject"));
            }

            try
            {
                var acct = this.userAccountService.GetByID(g);
                if (acct == null)
                {
                    return Task.FromResult(new IdentityManagerResult<UserDetail>((UserDetail)null));
                }

                var user = new UserDetail
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

                return Task.FromResult(new IdentityManagerResult<UserDetail>(user));
            }
            catch (ValidationException ex)
            {
                return Task.FromResult(new IdentityManagerResult<UserDetail>(ex.Message));
            }
        }

        public Task<IdentityManagerResult<CreateResult>> CreateUserAsync(string username, string password)
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

                return Task.FromResult(new IdentityManagerResult<CreateResult>(new CreateResult { Subject = acct.ID.ToString("D") }));
            }
            catch (ValidationException ex)
            {
                return Task.FromResult(new IdentityManagerResult<CreateResult>(ex.Message));
            }
        }
        
        public Task<IdentityManagerResult> DeleteUserAsync(string subject)
        {
            Guid g;
            if (!Guid.TryParse(subject, out g))
            {
                return Task.FromResult(new IdentityManagerResult("Invalid subject"));
            }

            try
            {
                this.userAccountService.DeleteAccount(g);
            }
            catch (ValidationException ex)
            {
                return Task.FromResult(new IdentityManagerResult(ex.Message));
            } 

            return Task.FromResult(IdentityManagerResult.Success);
        }

        public Task<IdentityManagerResult> SetPasswordAsync(string subject, string password)
        {
            Guid g;
            if (!Guid.TryParse(subject, out g))
            {
                return Task.FromResult(new IdentityManagerResult("Invalid subject"));
            }

            try
            {
                this.userAccountService.SetPassword(g, password);
            }
            catch (ValidationException ex)
            {
                return Task.FromResult(new IdentityManagerResult(ex.Message));
            }

            return Task.FromResult(IdentityManagerResult.Success);
        }

        public Task<IdentityManagerResult> SetEmailAsync(string subject, string email)
        {
            Guid id;
            if (!Guid.TryParse(subject, out id))
            {
                return Task.FromResult(new IdentityManagerResult("Invalid subject"));
            }

            try
            {
                this.userAccountService.SetConfirmedEmail(id, email);
            }
            catch (ValidationException ex)
            {
                return Task.FromResult(new IdentityManagerResult(ex.Message));
            }

            return Task.FromResult(IdentityManagerResult.Success);
        }

        public Task<IdentityManagerResult> SetPhoneAsync(string subject, string phone)
        {
            Guid id;
            if (!Guid.TryParse(subject, out id))
            {
                return Task.FromResult(new IdentityManagerResult("Invalid id"));
            }

            try
            {
                this.userAccountService.SetConfirmedMobilePhone(id, phone);
            }
            catch (ValidationException ex)
            {
                return Task.FromResult(new IdentityManagerResult(ex.Message));
            }

            return Task.FromResult(IdentityManagerResult.Success);
        }

        public Task<IdentityManagerResult> AddClaimAsync(string subject, string type, string value)
        {
            Guid g;
            if (!Guid.TryParse(subject, out g))
            {
                return Task.FromResult(new IdentityManagerResult("Invalid user."));
            }

            try
            {
                this.userAccountService.AddClaim(g, type, value);
            }
            catch (ValidationException ex)
            {
                return Task.FromResult(new IdentityManagerResult(ex.Message));
            }

            return Task.FromResult(IdentityManagerResult.Success);
        }

        public Task<IdentityManagerResult> RemoveClaimAsync(string subject, string type, string value)
        {
            Guid g;
            if (!Guid.TryParse(subject, out g))
            {
                return Task.FromResult(new IdentityManagerResult("Invalid user."));
            }

            try
            {
                this.userAccountService.RemoveClaim(g, type, value);
            }
            catch (ValidationException ex)
            {
                return Task.FromResult(new IdentityManagerResult(ex.Message));
            }

            return Task.FromResult(IdentityManagerResult.Success);
        }
    }
}
