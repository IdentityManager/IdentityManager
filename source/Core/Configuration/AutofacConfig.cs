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
using Autofac.Integration.WebApi;
using IdentityManager.Configuration.Hosting;
using Microsoft.Owin;
using System;

namespace IdentityManager.Configuration
{
    static class AutofacConfig
    {
        const string DecoratorRegistrationName = "decorator.inner";

        public static IContainer Configure(IdentityManagerOptions config)
        {
            if (config == null) throw new ArgumentNullException("config");

            var builder = new ContainerBuilder();

            builder.RegisterInstance(config); 
            builder.Register(config.Factory.IdentityManagerService);
            builder.Register(c => new OwinEnvironmentService(c.Resolve<IOwinContext>()));

            builder.RegisterApiControllers(typeof(AutofacConfig).Assembly);

            foreach (var registration in config.Factory.Registrations)
            {
                builder.Register(registration, registration.Name);
            }
            
            var container = builder.Build();
            return container;
        }

        private static void RegisterDefaultType<T, TDefault>(this ContainerBuilder builder, Registration<T> registration, string name = null)
            where T : class
            where TDefault : T
        {
            if (registration != null)
            {
                builder.Register(registration, name);
            }
            else
            {
                if (name == null)
                {
                    builder.RegisterType<TDefault>().As<T>();
                }
                else
                {
                    builder.RegisterType<TDefault>().Named<T>(name);
                }
            }
        }

        private static void RegisterDefaultInstance<T, TDefault>(this ContainerBuilder builder, Registration<T> registration, string name = null)
            where T : class
            where TDefault : class, T, new()
        {
            if (registration != null)
            {
                builder.Register(registration, name);
            }
            else
            {
                if (name == null)
                {
                    builder.RegisterInstance(new TDefault()).As<T>();
                }
                else
                {
                    builder.RegisterInstance(new TDefault()).Named<T>(name);
                }
            }
        }

        private static void RegisterDecorator<T, TDecorator>(this ContainerBuilder builder, string name)
            where T : class
            where TDecorator : T
        {
            builder.RegisterType<TDecorator>();
            builder.Register<T>(ctx =>
            {
                var inner = Autofac.Core.ResolvedParameter.ForNamed<T>(name);
                return ctx.Resolve<TDecorator>(inner);
            });
        }

        private static void RegisterDecoratorDefaultInstance<T, TDecorator, TDefault>(this ContainerBuilder builder, Registration<T> registration)
            where T : class
            where TDecorator : T
            where TDefault : class, T, new()
        {
            builder.RegisterDefaultInstance<T, TDefault>(registration, DecoratorRegistrationName);
            builder.RegisterDecorator<T, TDecorator>(DecoratorRegistrationName);
        }

        private static void RegisterDecoratorDefaultType<T, TDecorator, TDefault>(this ContainerBuilder builder, Registration<T> registration)
            where T : class
            where TDecorator : T
            where TDefault : class, T, new()
        {
            builder.RegisterDefaultType<T, TDefault>(registration, DecoratorRegistrationName);
            builder.RegisterDecorator<T, TDecorator>(DecoratorRegistrationName);
        }

        private static void RegisterDecorator<T, TDecorator>(this ContainerBuilder builder, Registration<T> registration)
            where T : class
            where TDecorator : T
        {
            builder.Register(registration, DecoratorRegistrationName);
            builder.RegisterType<TDecorator>();
            builder.Register<T>(ctx =>
            {
                var inner = Autofac.Core.ResolvedParameter.ForNamed<T>(DecoratorRegistrationName);
                return ctx.Resolve<TDecorator>(inner);
            });
        }

        private static void Register(this ContainerBuilder builder, Registration registration, string name = null)
        {
            if (registration.Instance != null)
            {
                var reg = builder.Register(ctx => registration.Instance).SingleInstance();
                if (name != null)
                {
                    reg.Named(name, registration.DependencyType);
                }
                else
                {
                    reg.As(registration.DependencyType);
                }
            }
            else if (registration.Type != null)
            {
                var reg = builder.RegisterType(registration.Type);
                if (name != null)
                {
                    reg.Named(name, registration.DependencyType);
                }
                else
                {
                    reg.As(registration.DependencyType);
                }
            }
            else if (registration.Factory != null)
            {
                var reg = builder.Register(ctx => registration.Factory(new AutofacDependencyResolver(ctx)));
                if (name != null)
                {
                    reg.Named(name, registration.DependencyType);
                }
                else
                {
                    reg.As(registration.DependencyType);
                }
            }
            else
            {
                var message = "No type or factory found on registration " + registration.GetType().FullName;
                //Logger.Error(message);
                throw new InvalidOperationException(message);
            }
        }
    }
}
