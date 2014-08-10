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
using Thinktecture.IdentityManager;

namespace Thinktecture.IdentityManager.Host
{
    class InMemoryIdentityManagerService : IIdentityManagerService
    {
        ICollection<InMemoryUser> users;
        public InMemoryIdentityManagerService(ICollection<InMemoryUser> users)
        {
            this.users = users;
        }

        static InMemoryIdentityManagerService()
        {
            var props = new List<PropertyMetadata>()
            {
                ReflectedPropertyMetadata.FromProperty<InMemoryUser>("Password", type:PropertyDataType.Password, required:true),
                ReflectedPropertyMetadata.FromProperty<InMemoryUser>("Username", required:true),
                new PropertyMetadata {
                    Name = "Name",
                    Type = Constants.ClaimTypes.Name,
                    Required = true,
                },
                ReflectedPropertyMetadata.FromProperty<InMemoryUser>("Mobile"),
                ReflectedPropertyMetadata.FromProperty<InMemoryUser>("Email", type:PropertyDataType.Email),
            };
            props.AddRange(ReflectedPropertyMetadata.FromType<InMemoryUser>("FirstName"));
            props.Add(new ExpressionPropertyMetadata<InMemoryUser, string>("FirstName", "First Name", u => u.FirstName, (u, v) => u.FirstName = v)
            {
                Required = true
            });
            props.AddRange(new PropertyMetadata[]{
                new PropertyMetadata {
                    Name = "Is Administrator",
                    Type = "role.admin",
                    DataType = PropertyDataType.Boolean,
                    Required = true,
                },
                new PropertyMetadata {
                        Name = "Gravatar Url",
                        Type = "gravatar",
                        DataType = PropertyDataType.Url,
                    }
                });

            metadata = new IdentityManagerMetadata()
            {
                UserMetadata = new UserMetadata
                {
                    SupportsCreate = true,
                    SupportsDelete = true,
                    SupportsClaims = true,
                    Properties = props
                }
            };
        }

        static IdentityManagerMetadata metadata;

        public System.Threading.Tasks.Task<IdentityManagerMetadata> GetMetadataAsync()
        {
            return Task.FromResult(metadata);
        }

        public System.Threading.Tasks.Task<IdentityManagerResult<CreateResult>> CreateUserAsync(string username, string password, IEnumerable<UserClaim> properties)
        {
            var errors = new List<string>();
            foreach(var prop in properties)
            {
                errors.AddRange(ValidateProperty(prop.Type, prop.Value));
            }

            if (errors.Count > 0)
            {
                return Task.FromResult(new IdentityManagerResult<CreateResult>(errors.ToArray()));
            }

            var user = new InMemoryUser()
            {
                Username = username,
                Password = password
            };

            foreach (var prop in properties)
            {
                SetProperty(prop.Type, prop.Value, user);
            }

            users.Add(user);

            return Task.FromResult(new IdentityManagerResult<CreateResult>(new CreateResult() { Subject = user.Subject }));
        }

        public System.Threading.Tasks.Task<IdentityManagerResult> DeleteUserAsync(string subject)
        {
            var user = users.SingleOrDefault(x => x.Subject == subject);
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
                    let names = (from c in u.Claims where c.Type == Constants.ClaimTypes.Name select c.Value.ToLower())
                    where
                        u.Username.ToLower().Contains(filter) ||
                        names.Contains(filter)
                    select u;
            }

            var userResults =
                from u in query.Distinct()
                select new UserResult
                {
                    Subject = u.Subject,
                    Username = u.Username,
                    Name = u.Claims.Where(x => x.Type == Constants.ClaimTypes.Name).Select(x => x.Value).FirstOrDefault(),
                };

            var result = userResults.Skip(start).Take(count);
            return Task.FromResult(new IdentityManagerResult<QueryResult>(new QueryResult
            {
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

            var props = new List<UserClaim>();
            foreach(var prop in metadata.UserMetadata.Properties)
            {
                props.Add(new UserClaim{
                    Type = prop.Type, 
                    Value = GetProperty(prop.Type, user)
                });
            }
           
            var claims = user.Claims.Select(x => new UserClaim { Type = x.Type, Value = x.Value });

            return Task.FromResult(new IdentityManagerResult<UserDetail>(new UserDetail
            {
                Subject = user.Subject,
                Username = user.Username,
                Name = user.Claims.GetValue(Constants.ClaimTypes.Name),
                Properties = props,
                Claims = claims
            }));
        }

        public System.Threading.Tasks.Task<IdentityManagerResult> SetPropertyAsync(string subject, string type, string value)
        {
            var user = users.SingleOrDefault(x => x.Subject == subject);
            if (user == null)
            {
                return Task.FromResult(new IdentityManagerResult("No user found"));
            }

            var errors = ValidateProperty(type, value);
            if (errors.Any())
            {
                return Task.FromResult(new IdentityManagerResult(errors));
            }

            SetProperty(type, value, user);

            return Task.FromResult(IdentityManagerResult.Success);
        }

        public System.Threading.Tasks.Task<IdentityManagerResult> AddClaimAsync(string subject, string type, string value)
        {
            var user = users.SingleOrDefault(x => x.Subject == subject);
            if (user == null)
            {
                return Task.FromResult(new IdentityManagerResult("No user found"));
            }

            user.Claims.AddClaim(type, value);
            
            return Task.FromResult(IdentityManagerResult.Success);
        }

        public System.Threading.Tasks.Task<IdentityManagerResult> RemoveClaimAsync(string subject, string type, string value)
        {
            var user = users.SingleOrDefault(x => x.Subject == subject);
            if (user == null)
            {
                return Task.FromResult(new IdentityManagerResult("No user found"));
            }

            user.Claims.RemoveClaims(type, value);

            return Task.FromResult(IdentityManagerResult.Success);
        }

        private static string GetProperty(string type, InMemoryUser user)
        {
            string value;
            if (metadata.UserMetadata.TryGet(user, type, out value))
            {
                return value;
            }
            
            switch (type)
            {
                case Constants.ClaimTypes.Name:
                    return user.Claims.GetValue(Constants.ClaimTypes.Name);
                case "role.admin":
                    return user.Claims.HasValue(Constants.ClaimTypes.Role, "admin").ToString().ToLower();
                case "gravatar":
                    return user.Claims.GetValue("gravatar");
            }
           
            throw new Exception("Invalid property type " + type);
        }

        private static void SetProperty(string type, string value, InMemoryUser user)
        {
            if (metadata.UserMetadata.TrySet(user, type, value))
            {
                return;
            }

            switch (type)
            {
                case Constants.ClaimTypes.Name:
                    {
                        user.Claims.SetValue(Constants.ClaimTypes.Name, value);
                    }
                    break;
                case "role.admin":
                    {
                        var val = Boolean.Parse(value);
                        if (val)
                        {
                            user.Claims.AddClaim(Constants.ClaimTypes.Role, "admin");
                        }
                        else
                        {
                            user.Claims.RemoveClaim(Constants.ClaimTypes.Role, "admin");
                        }
                    }
                    break;
                case "gravatar":
                    {
                        user.Claims.SetValue("gravatar", value);
                    }
                    break;
                default:
                    throw new InvalidOperationException("Invalid Property Type");
            }
        }

        private string[] ValidateProperty(string type, string value)
        {
            var error = metadata.UserMetadata.Validate(type, value);
            if (error != null)
            {
                return new string[] { error };
            }

            switch (type)
            {
                case Constants.ClaimTypes.Username:
                    {
                        if (this.users.Any(x => x.Username == value))
                        {
                            return new string[] { "That Username is already in use" };
                        }
                    }
                    break;
                case Constants.ClaimTypes.Password:
                    {
                        if (value.Length < 3)
                        {
                            return new string[] { "Password must have at least 3 characters" };
                        }
                    }
                    break;
            }
            return new string[0];
        }
    }
}
