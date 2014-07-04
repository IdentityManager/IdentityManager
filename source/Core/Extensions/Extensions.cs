/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System.Linq;
using System.Web.Http.ModelBinding;
using Thinktecture.IdentityManager.Core;
using Thinktecture.IdentityManager.Core.Api.Models;

namespace System.Web.Http
{
    static class Extensions
    {
        public static void AddErrors(this ModelStateDictionary modelState, UserManagerResult result)
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

        public static ErrorModel ToError(this UserManagerResult result)
        {
            if (result == null) throw new ArgumentNullException("result");

            return new ErrorModel
            {
                Errors = result.Errors.ToArray()
            };
        }

        public static string[] GetErrorMessages(this ModelStateDictionary modelState)
        {
            if (modelState == null) throw new ArgumentNullException("modelState");

            var errors =
                from error in modelState
                where error.Value.Errors.Any()
                from err in error.Value.Errors
                select err.ErrorMessage;

            return errors.ToArray();
        }
    }
}
