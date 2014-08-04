/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Thinktecture.IdentityManager.Core;

namespace Thinktecture.IdentityManager.Host
{
    class InMemoryIdentityManagerService : IIdentityManagerService
    {
        ICollection<InMemoryUser> users;
        public InMemoryIdentityManagerService(ICollection<InMemoryUser> users)
        {
            this.users = users;
        }

        public System.Threading.Tasks.Task<IdentityManagerMetadata> GetMetadataAsync()
        {
            return Task.FromResult(new IdentityManagerMetadata()
            {
                UserMetadata = new UserMetadata {
                    SupportsCreate = true,
                    SupportsDelete = true,
                    
                    SupportsPassword = true,
                    SupportsEmail = true,
                    SupportsPhone = true,
                    SupportsClaims = true,

                    RequiredProperties = new PropertyMetadata[] { 
                        new PropertyMetadata{
                            Identifier = "first",
                            DisplayName = "First Name",
                            DataType = ClaimDataType.String,
                        },
                        new PropertyMetadata{
                            Identifier = "first",
                            DisplayName = "Last Name",
                            DataType = ClaimDataType.String,
                        },
                    }
                }
            });
        }

        public System.Threading.Tasks.Task<IdentityManagerResult<CreateResult>> CreateUserAsync(string username, string password)
        {
            string[] errors = ValidatePassword(password);
            if (errors != null)
            {
                return Task.FromResult(new IdentityManagerResult<CreateResult>(errors));
            }

            var user = new InMemoryUser()
            {
                Username = username,
                Password = password
            };
            users.Add(user);

            return Task.FromResult(new IdentityManagerResult<CreateResult>(new CreateResult() { Subject = user.Subject }));
        }

        private string[] ValidatePassword(string password)
        {
            if (String.IsNullOrWhiteSpace(password))
            {
                return new string[] { "Password required" };
            }
            if(password.Length < 3)
            {
                return new string[] { "Password must have at least 3 characters" };
            }
            return null;
        }

        public System.Threading.Tasks.Task<IdentityManagerResult> DeleteUserAsync(string subject)
        {
            var user = users.SingleOrDefault(x=>x.Subject == subject);
            if (user != null)
            {
                users.Remove(user);
            }
            return Task.FromResult(IdentityManagerResult.Success);
        }

        public System.Threading.Tasks.Task<IdentityManagerResult<QueryResult>> QueryUsersAsync(string filter, int start, int count)
        {
            var query =
                from u in users
                select u;
            if (!String.IsNullOrWhiteSpace(filter))
            {
                filter = filter.ToLower();
                query = 
                    from u in query
                    let name = (from c in u.Claims where c.Type == "name" select c.Value).SingleOrDefault()
                    where 
                        u.Username.ToLower().Contains(filter) ||
                        (name != null && name.ToLower().Contains(filter))
                    select u;
            }

            var userResults = 
                from u in query.Distinct()
                select new UserResult
                {
                    Subject = u.Subject, 
                    Username = u.Username,
                    DisplayName = u.Claims.Where(x => x.Type == "name").Select(x => x.Value).FirstOrDefault(),
                };

            var result = userResults.Skip(start).Take(count);
            return Task.FromResult(new IdentityManagerResult<QueryResult>(new QueryResult { 
                Filter = filter,
                Start = start, 
                Count = result.Count(), 
                Users = result,
                Total = userResults.Count(), 
            }));
        }

        public System.Threading.Tasks.Task<IdentityManagerResult<UserDetail>> GetUserAsync(string subject)
        {
            var user = users.SingleOrDefault(x => x.Subject == subject);
            if (user == null)
            {
                return Task.FromResult(new IdentityManagerResult<UserDetail>((UserDetail)null));
            }

            return Task.FromResult(new IdentityManagerResult<UserDetail>(new UserDetail
            {
                Subject = user.Subject,
                Username = user.Username,
                DisplayName = user.Claims.Where(x=>x.Type=="name").Select(x=>x.Value).FirstOrDefault(),
                Email = user.Email,
                Phone = user.Mobile,
                Claims = user.Claims.Select(x => new UserClaim { Type = x.Type, Value = x.Value })
            }));
        }

        public System.Threading.Tasks.Task<IdentityManagerResult> SetPasswordAsync(string subject, string password)
        {
            var errors = ValidatePassword(password);
            if (errors != null)
            {
                return Task.FromResult(new IdentityManagerResult(errors));
            }
            var user = users.SingleOrDefault(x => x.Subject == subject);
            if (user == null)
            {
                return Task.FromResult(new IdentityManagerResult("No user found"));
            }

            user.Password = password;
            return Task.FromResult(IdentityManagerResult.Success);
        }

        public System.Threading.Tasks.Task<IdentityManagerResult> SetEmailAsync(string subject, string email)
        {
            var user = users.SingleOrDefault(x => x.Subject == subject);
            if (user == null)
            {
                return Task.FromResult(new IdentityManagerResult("No user found"));
            }

            user.Email = email;
            return Task.FromResult(IdentityManagerResult.Success);
        }

        public System.Threading.Tasks.Task<IdentityManagerResult> SetPhoneAsync(string subject, string phone)
        {
            var user = users.SingleOrDefault(x => x.Subject == subject);
            if (user == null)
            {
                return Task.FromResult(new IdentityManagerResult("No user found"));
            }

            user.Mobile = phone;
            return Task.FromResult(IdentityManagerResult.Success);
        }

        public System.Threading.Tasks.Task<IdentityManagerResult> AddClaimAsync(string subject, string type, string value)
        {
            var user = users.SingleOrDefault(x => x.Subject == subject);
            if (user == null)
            {
                return Task.FromResult(new IdentityManagerResult("No user found"));
            }

            var claims = user.Claims.Where(x => x.Type == type && x.Value == value);
            if (!claims.Any())
            {
                user.Claims.Add(new Claim(type, value));
            }

            return Task.FromResult(IdentityManagerResult.Success);
        }

        public System.Threading.Tasks.Task<IdentityManagerResult> RemoveClaimAsync(string subject, string type, string value)
        {
            var user = users.SingleOrDefault(x => x.Subject == subject);
            if (user == null)
            {
                return Task.FromResult(new IdentityManagerResult("No user found"));
            }

            var claims = user.Claims.Where(x => x.Type == type && x.Value == value);
            foreach(var claim in claims.ToArray())
            {
                user.Claims.Remove(claim);
            }

            return Task.FromResult(IdentityManagerResult.Success);
        }
    }
}
