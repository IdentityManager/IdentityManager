/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System.Threading.Tasks;

namespace Thinktecture.IdentityManager.Core
{
    public interface IIdentityManagerService
    {
        Task<IdentityManagerMetadata> GetMetadataAsync();
        
        Task<IdentityManagerResult<CreateResult>> CreateUserAsync(string username, string password);
        Task<IdentityManagerResult> DeleteUserAsync(string subject);
        
        Task<IdentityManagerResult<QueryResult>> QueryUsersAsync(string filter, int start, int count);
        Task<IdentityManagerResult<UserDetail>> GetUserAsync(string subject);

        Task<IdentityManagerResult> SetPropertyAsync(string subject, string type, string value);
        
        Task<IdentityManagerResult> AddClaimAsync(string subject, string type, string value);
        Task<IdentityManagerResult> RemoveClaimAsync(string subject, string type, string value);
    }
}
