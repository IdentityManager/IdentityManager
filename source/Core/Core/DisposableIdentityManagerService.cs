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

        public Task<IdentityManagerResult> SetPropertyAsync(string subject, string type, string value)
        {
            return this.inner.SetPropertyAsync(subject, type, value);
        }

        public Task<IdentityManagerResult> AddClaimAsync(string subject, string type, string value)
        {
            return this.inner.AddClaimAsync(subject, type, value);
        }

        public Task<IdentityManagerResult> RemoveClaimAsync(string subject, string type, string value)
        {
            return this.inner.RemoveClaimAsync(subject, type, value);
        }

        public Task<IdentityManagerResult<QueryResult<RoleSummary>>> QueryRolesAsync(string filter, int start, int count)
        {
            return inner.QueryRolesAsync(filter, start, count);
        }

        public Task<IdentityManagerResult<CreateResult>> CreateRoleAsync(IEnumerable<Property> properties)
        {
            return inner.CreateRoleAsync(properties);
        }

        public Task<IdentityManagerResult> DeleteRoleAsync(string subject)
        {
            return inner.DeleteRoleAsync(subject);
        }
    }
}
