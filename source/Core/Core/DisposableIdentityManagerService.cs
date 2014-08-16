/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Thinktecture.IdentityManager
{
    public class DisposableIdentityManagerService : IIdentityManagerService, IDisposable
    {
        IIdentityManagerService inner;
        IDisposable disposable;
        
        public DisposableIdentityManagerService(IIdentityManagerService inner, IDisposable disposable)
        {
            if (inner == null) throw new ArgumentNullException("inner");
            if (disposable == null) throw new ArgumentNullException("disposable");

            this.inner = inner;
            this.disposable = disposable;
        }

        public void Dispose()
        {
            if (this.disposable != null)
            {
                this.disposable.Dispose();
                this.disposable = null;
            }
        }

        public Task<IdentityManagerMetadata> GetMetadataAsync()
        {
            return inner.GetMetadataAsync();
        }

        public Task<IdentityManagerResult<CreateResult>> CreateUserAsync(IEnumerable<Property> properties)
        {
            return inner.CreateUserAsync(properties);
        }

        public Task<IdentityManagerResult> DeleteUserAsync(string subject)
        {
            return this.inner.DeleteUserAsync(subject);
        }

        public Task<IdentityManagerResult<QueryResult<UserSummary>>> QueryUsersAsync(string filter, int start, int count)
        {
            return this.inner.QueryUsersAsync(filter, start, count);
        }

        public Task<IdentityManagerResult<UserDetail>> GetUserAsync(string subject)
        {
            return this.inner.GetUserAsync(subject);
        }

        public Task<IdentityManagerResult> SetUserPropertyAsync(string subject, string type, string value)
        {
            return this.inner.SetUserPropertyAsync(subject, type, value);
        }

        public Task<IdentityManagerResult> AddUserClaimAsync(string subject, string type, string value)
        {
            return this.inner.AddUserClaimAsync(subject, type, value);
        }

        public Task<IdentityManagerResult> RemoveUserClaimAsync(string subject, string type, string value)
        {
            return this.inner.RemoveUserClaimAsync(subject, type, value);
        }

        public Task<IdentityManagerResult<QueryResult<RoleSummary>>> QueryRolesAsync(string filter, int start, int count)
        {
            return inner.QueryRolesAsync(filter, start, count);
        }
        
        public Task<IdentityManagerResult<RoleDetail>> GetRoleAsync(string subject)
        {
            return inner.GetRoleAsync(subject);
        }

        public Task<IdentityManagerResult<CreateResult>> CreateRoleAsync(IEnumerable<Property> properties)
        {
            return inner.CreateRoleAsync(properties);
        }

        public Task<IdentityManagerResult> DeleteRoleAsync(string subject)
        {
            return inner.DeleteRoleAsync(subject);
        }

        public Task<IdentityManagerResult> SetRolePropertyAsync(string subject, string type, string value)
        {
            return inner.SetRolePropertyAsync(subject, type, value);
        }
    }
}
