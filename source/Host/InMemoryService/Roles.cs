/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;
using Thinktecture.IdentityManager;

namespace Thinktecture.IdentityManager.Host
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