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

using IdentityManager;
using IdentityManager.Api.Models;
using System;
using System.Linq;
using System.Web.Http.ModelBinding;

namespace IdentityManager.Extensions
{
    public static class ModelStateDictionaryExtensions
    {
        public static void AddErrors(this ModelStateDictionary modelState, IdentityManagerResult result)
        {
            if (modelState == null) throw new ArgumentNullException("modelState");
            if (result == null) throw new ArgumentNullException("result");

            foreach (var error in result.Errors)
            {
                modelState.AddModelError("", error);
            }
        }

        public static ErrorModel ToError(this ModelStateDictionary modelState)
        {
            if (modelState == null) throw new ArgumentNullException("modelState");

            return new ErrorModel
            {
                Errors = modelState.GetErrorMessages()
            };
        }

        public static string[] GetErrorMessages(this ModelStateDictionary modelState)
        {
            if (modelState == null) throw new ArgumentNullException("modelState");

            var errors =
                from error in modelState
                where error.Value.Errors.Any()
                from err in error.Value.Errors
                select String.IsNullOrWhiteSpace(err.ErrorMessage) ? err.Exception.Message : err.ErrorMessage;

            return errors.ToArray();
        }
    }
}
