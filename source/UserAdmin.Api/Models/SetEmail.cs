using System.ComponentModel.DataAnnotations;

namespace Thinktecture.IdentityServer.UserAdmin.Api.Models
{
    public class SetEmail
    {
        [Required]
        public string Subject { get; set; }
        [Required]
        public string Email { get; set; }
    }
}
