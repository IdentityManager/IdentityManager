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
 
using Autofac;
using Microsoft.Owin;
using System.Collections.Generic;

namespace IdentityManager.Extensions
{
    static class OwinExtensions
    {
        internal static ILifetimeScope GetLifetimeScope(this IDictionary<string, object> env)
        {
            return new OwinContext(env).Get<ILifetimeScope>(Constants.AutofacScope);
        }

        internal static void SetLifetimeScope(this IDictionary<string, object> env, ILifetimeScope scope)
        {
            new OwinContext(env).Set<ILifetimeScope>(Constants.AutofacScope, scope);
        }

        internal static T ResolveDependency<T>(this IDictionary<string, object> env)
        {
            var scope = env.GetLifetimeScope();
            var instance = (T)scope.ResolveOptional(typeof(T));
            return instance;
        }

        internal static T ResolveDependency<T>(this IOwinContext context)
        {
            return context.Environment.ResolveDependency<T>();
        }
    }
}
