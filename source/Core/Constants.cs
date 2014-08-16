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
    public class Constants
    {
        public const string AdminRoleName = "IdentityManagerAdministrator";

        public class ClaimTypes
        {
            public const string Subject = "sub";
            public const string Username = "username";
            public const string Name = "name";
            public const string Password = "password";
            public const string Email = "email";
            public const string Phone = "phone";
            public const string Role = "role";
        }

        public const string RoutePrefix = "api";
        public const string MetadataRoutePrefix = RoutePrefix + "";
        public const string UserRoutePrefix = RoutePrefix + "/users";
        public const string RoleRoutePrefix = RoutePrefix + "/roles";

        public class RouteNames
        {
            public const string GetUsers = "GetUsers";
            public const string GetUser = "GetUser";
            public const string CreateUser = "CreateUser";
            public const string DeleteUser = "DeleteUser";
            public const string UpdateProperty = "UpdateProperty";
            public const string AddClaim = "AddClaim";
            public const string RemoveClaim = "RemoveClaim";

            public const string GetRoles = "GetRoles";
            public const string CreateRole = "CreateRole";
            public const string DeleteRole = "DeleteRole ";
        }
    }
}
