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

using IdentityManager.Extensions;
using IdentityManager.Resources;
using System;
using System.Reflection;

namespace IdentityManager
{
    public class ExpressionPropertyMetadata<TContainer, TProperty> : ExecutablePropertyMetadata
    {
        Func<TContainer, TProperty> get;
        Func<TContainer, TProperty, IdentityManagerResult> set;
        public ExpressionPropertyMetadata(string type, Func<TContainer, TProperty> get, Func<TContainer, TProperty, IdentityManagerResult> set)
            : this(type, type, get, set)
        {
        }

        public ExpressionPropertyMetadata(
            string type, 
            string name, 
            Func<TContainer, TProperty> get,
            Func<TContainer, TProperty, IdentityManagerResult> set)
        {
            if (String.IsNullOrWhiteSpace(type)) throw new ArgumentNullException("type");
            if (String.IsNullOrWhiteSpace(name)) throw new ArgumentNullException("name");
            if (get == null) throw new ArgumentNullException("get");
            if (set == null) throw new ArgumentNullException("set");

            this.Type = type;
            this.Name = name;
            this.get = get;
            this.set = set;

            this.DataType = typeof(TProperty).GetPropertyDataType();
        }

        public override string Get(object instance)
        {
            if (instance == null) throw new ArgumentNullException("instance");

            if (this.DataType == PropertyDataType.Password) return null;

            var value = get((TContainer)instance);
            if (value != null)
            {
                return value.ToString();
            }

            return null;
        }

        public override IdentityManagerResult Set(object instance, string value)
        {
            if (instance == null) throw new ArgumentNullException("instance");
            
            if (String.IsNullOrWhiteSpace(value))
            {
                return set((TContainer)instance, default(TProperty));
            }
            else
            {
                var type = typeof(TProperty);
                type = Nullable.GetUnderlyingType(type) ?? type;
                TProperty convertedValue = default(TProperty);
                try
                {
                    convertedValue = (TProperty)Convert.ChangeType(value, type);
                }
                catch
                {
                    return new IdentityManagerResult(Messages.ConversionFailed);
                }
                return set((TContainer)instance, convertedValue);
            }
        }
    }
}
