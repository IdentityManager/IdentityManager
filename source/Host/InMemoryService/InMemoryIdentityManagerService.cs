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

        IdentityManagerMetadata metadata;

        IdentityManagerMetadata GetMetadata()
        {
            if (metadata == null)
            {
                var createprops = new List<PropertyMetadata>()
                {
                    PropertyMetadata.FromProperty<InMemoryUser>(x => x.Username, type:Constants.ClaimTypes.Username, required:true),
                };

                var updateprops = new List<PropertyMetadata>();
                updateprops.AddRange(new PropertyMetadata[]{
                    PropertyMetadata.FromProperty<InMemoryUser>(x => x.Username, type:Constants.ClaimTypes.Username, required:true),
                    PropertyMetadata.FromPropertyName<InMemoryUser>("Password", type:Constants.ClaimTypes.Password, required:true),
                    PropertyMetadata.FromFunctions<InMemoryUser, string>(Constants.ClaimTypes.Name, this.GetName, this.SetName, name:"Name", required:true),
                });
                updateprops.AddRange(PropertyMetadata.FromType<InMemoryUser>());
                updateprops.AddRange(new PropertyMetadata[]{
                    PropertyMetadata.FromPropertyName<InMemoryUser>("Mobile"),
                    PropertyMetadata.FromPropertyName<InMemoryUser>("Email", dataType:PropertyDataType.Email),
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
                        CreateProperties = createprops,
                        UpdateProperties = updateprops
                    }
                };
            }
            return metadata;
        }

        public System.Threading.Tasks.Task<IdentityManagerMetadata> GetMetadataAsync()
        {
            return Task.FromResult(GetMetadata());
        }

        public System.Threading.Tasks.Task<IdentityManagerResult<CreateResult>> CreateUserAsync(IEnumerable<UserClaim> properties)
        {
            var errors = ValidateProperties(properties);
            if (errors.Any())
            {
                return Task.FromResult(new IdentityManagerResult<CreateResult>(errors.ToArray()));
            }

            var user = new InMemoryUser();
            var createPropsMeta = GetMetadata().UserMetadata.GetCreateProperties();
            foreach(var prop in properties)
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
            foreach(var prop in GetMetadata().UserMetadata.UpdateProperties)
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
                return Task.FromResult(new IdentityManagerResult(errors.ToArray()));
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

        private string GetName(InMemoryUser user)
        {
            return user.Claims.GetValue(Constants.ClaimTypes.Name);
        }

        private void SetName(InMemoryUser user, string value)
        {
            user.Claims.SetValue(Constants.ClaimTypes.Name, value);
        }

        private string GetProperty(string type, InMemoryUser user)
        {
            string value;
            if (GetMetadata().UserMetadata.UpdateProperties.TryGet(user, type, out value))
            {
                return value;
            }
            
            switch (type)
            {
                case "role.admin":
                    return user.Claims.HasValue(Constants.ClaimTypes.Role, "admin").ToString().ToLower();
                case "gravatar":
                    return user.Claims.GetValue("gravatar");
            }
           
            throw new Exception("Invalid property type " + type);
        }

        private void SetProperty(string type, string value, InMemoryUser user)
        {
            if (GetMetadata().UserMetadata.UpdateProperties.TrySet(user, type, value))
            {
                return;
            }

            switch (type)
            {
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

        IEnumerable<string> ValidateProperties(IEnumerable<UserClaim> properties)
        {
            return properties.Select(x => ValidateProperty(x.Type, x.Value)).Aggregate((x, y) => x.Concat(y));
        }

        private IEnumerable<string> ValidateProperty(string type, string value)
        {
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
            
            return Enumerable.Empty<string>();
        }
    }
}
