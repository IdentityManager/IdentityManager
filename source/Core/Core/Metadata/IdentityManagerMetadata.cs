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

namespace IdentityManager
{
    public class IdentityManagerMetadata
    {
        public IdentityManagerMetadata()
        {
            this.UserMetadata = new UserMetadata();
            this.RoleMetadata = new RoleMetadata();
        }

        public UserMetadata UserMetadata { get; set; }
        public RoleMetadata RoleMetadata { get; set; }

        internal void Validate()
        {
            if (UserMetadata == null) throw new InvalidOperationException("UserMetadata not assigned.");
            UserMetadata.Validate();
            
            if (RoleMetadata == null) throw new InvalidOperationException("RoleMetadata not assigned.");
            RoleMetadata.Validate();
        }
    }
}
