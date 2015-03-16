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

namespace IdentityManager.Host.InMemoryService
{
    public class Roles
    {
        public static ICollection<InMemoryRole> Get(int random = 0)
        {
            var roles = new HashSet<InMemoryRole>
            {
                new InMemoryRole{
                    ID = Guid.Parse("991d965f-1f84-4360-90e4-8f6deac7b9bc").ToString(),
                    Name = "Admin",
                    Description = "They run the show"
                },
                new InMemoryRole{
                    ID = Guid.Parse("5f292677-d3d2-4bf9-a6f8-e982d08e1377").ToString(),
                    Name = "Manager",
                    Description = "They pay the bills"
                },
            };

            for (var i = 0; i < random; i++)
            {
                var user = new InMemoryRole
                {
                    Name = GenName()
                };
                roles.Add(user);
            }

            return roles;
        }

        private static string GenName()
        {
            var firstChar = (char)((rnd.Next(26)) + 65);
            var name = firstChar.ToString();
            for (var j = 0; j < 6; j++)
            {
                name += Char.ToLower((char)(rnd.Next(26) + 65));
            }
            return name;
        }

        static Random rnd = new Random();
    }
}