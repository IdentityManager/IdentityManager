/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Thinktecture.IdentityManager.Core
{
    public class Constants
    {
        public const string AdminRoleName = "IdentityManagerAdministrator";

        public class ClaimTypes
        {
            public const string Subject = "sub";
            public const string Name = "name";
        }

        public const string RoutePrefix = "api";
        public const string MetadataRoutePrefix = RoutePrefix + "";
        public const string UserRoutePrefix = RoutePrefix + "/users";

        public class RouteNames
        {
            public const string GetUsers = "GetUsers";
            public const string GetUser = "GetUser";

            public const string CreateUser = "CreateUser";
            public const string DeleteUser = "DeleteUser";

            public const string SetPassword = "SetPassword";
            public const string SetEmail = "SetEmail";
            public const string SetPhone = "SetPhone";

            public const string AddClaim = "AddClaim";
            public const string RemoveClaim = "RemoveClaim";
        }
    }
}
