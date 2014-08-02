using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Thinktecture.IdentityManager.Core.Resources;

namespace Thinktecture.IdentityManager.Core.Api.Validation
{
    public class NoUrlCharactersAttribute : ValidationAttribute
    {
        public static readonly char[] ReservedCharacters = new char[]{
            '&', '*', '+', '/', ':', '?'
        };

        static string _FormattedErrorMessage;
        static string FormattedErrorMessage
        {
            get
            {
                if (_FormattedErrorMessage == null)
                {
                    _FormattedErrorMessage = String.Format(Messages.ClaimReservedCharacters, ReservedCharacters.Select(x=>x.ToString()).Aggregate((a, b) => a + ", " + b));
                }
                return _FormattedErrorMessage;
            }
        }

        public NoUrlCharactersAttribute()
        {
            ErrorMessage = FormattedErrorMessage;
        }

        public override bool IsValid(object value)
        {
            if (value == null) return true;

            return !value.ToString().ToArray().Intersect(ReservedCharacters).Any();
        }
    }
}
