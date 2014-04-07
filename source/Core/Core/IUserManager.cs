/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System.Threading.Tasks;

namespace Thinktecture.IdentityManager.Core
{
    public interface IUserManager
    {
        Task<UserManagerMetadata> GetMetadataAsync();
        
        Task<UserManagerResult<CreateResult>> CreateUserAsync(string username, string password);
        Task<UserManagerResult> DeleteUserAsync(string subject);
        
        Task<UserManagerResult<QueryResult>> QueryUsersAsync(string filter, int start, int count);
        Task<UserManagerResult<UserResult>> GetUserAsync(string subject);

        Task<UserManagerResult> SetPasswordAsync(string subject, string password);
        Task<UserManagerResult> SetEmailAsync(string subject, string email);
        Task<UserManagerResult> SetPhoneAsync(string subject, string phone);
        
        Task<UserManagerResult> AddClaimAsync(string subject, string type, string value);
        Task<UserManagerResult> DeleteClaimAsync(string subject, string type, string value);
    }
}
