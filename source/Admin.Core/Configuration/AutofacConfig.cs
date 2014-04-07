/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using Autofac;
using Autofac.Integration.WebApi;
using System;
using System.Web.Http.Dependencies;
using Thinktecture.IdentityManager.Core;

namespace Thinktecture.IdentityManager
{
    class AutofacConfig
    {
        public static IDependencyResolver Configure(IdentityManagerConfiguration config)
        {
            if (config == null) throw new ArgumentNullException("config");

            var builder = new ContainerBuilder();
            builder
                .Register(ctx => config.UserManagerFactory())
                .As<IUserManager>()
                .InstancePerApiRequest();
            builder
                .RegisterApiControllers(typeof(AutofacConfig).Assembly);
            
            var container = builder.Build();
            return new AutofacWebApiDependencyResolver(container);
        }
    }
}
