/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Thinktecture.IdentityManager.Resources;

namespace Thinktecture.IdentityManager
{
    public class ExpressionPropertyMetadata<TContainer, TProperty> : ExecutablePropertyMetadata
    {
        Func<TContainer, TProperty> get;
        Action<TContainer, TProperty> set;
        public ExpressionPropertyMetadata(string type, Func<TContainer, TProperty> get, Action<TContainer, TProperty> set)
            : this(type, type, get, set)
        {
        }

        public ExpressionPropertyMetadata(
            string type, 
            string name, 
            Func<TContainer, TProperty> get, 
            Action<TContainer, TProperty> set)
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

        public override void Set(object instance, string value)
        {
            if (instance == null) throw new ArgumentNullException("instance");
            
            if (String.IsNullOrWhiteSpace(value))
            {
                set((TContainer)instance, default(TProperty));
            }
            else
            {
                var type = typeof(TProperty);
                type = Nullable.GetUnderlyingType(type) ?? type;
                var convertedValue = (TProperty)Convert.ChangeType(value, type);
                set((TContainer)instance, convertedValue);
            }
        }
    }
}
