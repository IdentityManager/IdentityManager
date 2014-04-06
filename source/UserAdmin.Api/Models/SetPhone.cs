using System.ComponentModel.DataAnnotations;

namespace Thinktecture.IdentityServer.UserAdmin.Api.Models
{
    public class SetPhone
    {
        [Required]
        public string Subject { get; set; }
        [Required]
        public string Phone { get; set; }
    }
}
