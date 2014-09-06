/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Thinktecture.IdentityManager
{
    public interface IIdentityManagerService
    {
        Task<IdentityManagerMetadata> GetMetadataAsync();
        
        // users
        Task<IdentityManagerResult<CreateResult>> CreateUserAsync(IEnumerable<PropertyValue> properties);
        Task<IdentityManagerResult> DeleteUserAsync(string subject);
        
        Task<IdentityManagerResult<QueryResult<UserSummary>>> QueryUsersAsync(string filter, int start, int count);
        Task<IdentityManagerResult<UserDetail>> GetUserAsync(string subject);

        Task<IdentityManagerResult> SetUserPropertyAsync(string subject, string type, string value);
        
        Task<IdentityManagerResult> AddUserClaimAsync(string subject, string type, string value);
        Task<IdentityManagerResult> RemoveUserClaimAsync(string subject, string type, string value);

        // roles
        Task<IdentityManagerResult<CreateResult>> CreateRoleAsync(IEnumerable<PropertyValue> properties);
        Task<IdentityManagerResult> DeleteRoleAsync(string subject);

        Task<IdentityManagerResult<QueryResult<RoleSummary>>> QueryRolesAsync(string filter, int start, int count);
        Task<IdentityManagerResult<RoleDetail>> GetRoleAsync(string subject);

        Task<IdentityManagerResult> SetRolePropertyAsync(string subject, string type, string value);
    }
}
