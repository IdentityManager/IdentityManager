/*
 * Copyright 2014 Dominick Baier, Brock Allen
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

using System;
using System.Collections.Generic;
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

        public Task<IdentityManagerResult<CreateResult>> CreateUserAsync(IEnumerable<PropertyValue> properties)
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

        public Task<IdentityManagerResult<CreateResult>> CreateRoleAsync(IEnumerable<PropertyValue> properties)
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
