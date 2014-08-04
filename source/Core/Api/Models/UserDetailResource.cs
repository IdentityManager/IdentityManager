using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http.Routing;
using Thinktecture.IdentityManager.Api.Models;

namespace Thinktecture.IdentityManager.Core.Api.Models
{
    public class UserDetailResource
    {
        public UserDetailResource(UserDetail user, UrlHelper url, UserMetadata meta)
        {
            if (user == null) throw new ArgumentNullException("user");
            if (url == null) throw new ArgumentNullException("url");
            if (meta == null) throw new ArgumentNullException("meta");

            Data = new UserDetailDataResource(user, url, meta);

            var links = new Dictionary<string, string>();
            if (meta.SupportsDelete)
            {
                links["Delete"] = url.Link(Constants.RouteNames.DeleteUser, new { subject = user.Subject });
            }
            this.Links = links;
        }

        public UserDetailDataResource Data { get; set; }
        public object Links { get; set; }
    }

    public class UserDetailDataResource : Dictionary<string, object>
    {
        public UserDetailDataResource(UserDetail user, UrlHelper url, UserMetadata meta)
        {
            if (user == null) throw new ArgumentNullException("user");
            if (url == null) throw new ArgumentNullException("url");
            if (meta == null) throw new ArgumentNullException("meta");

            if (meta.SupportsPassword)
            {
                this["Password"] = new Resource
                {
                    Links = new
                    {
                        update = url.Link(Constants.RouteNames.SetPassword, new { subject = user.Subject })
                    }
                };
            }

            if (meta.SupportsEmail)
            {
                this["Email"] = new Resource
                {
                    Data = new EmailModel
                    {
                        Email = user.Email
                    },
                    Links = new
                    {
                        update = url.Link(Constants.RouteNames.SetEmail, new { subject = user.Subject })
                    }
                };
            }

            if (meta.SupportsPhone)
            {
                this["Phone"] = new Resource
                {
                    Data = new PhoneModel
                    {
                        Phone = user.Phone
                    },
                    Links = new
                    {
                        update = url.Link(Constants.RouteNames.SetPhone, new { subject = user.Subject })
                    }
                };
            }

            if (meta.SupportsClaims)
            {
                var claims =
                    from c in user.Claims.ToArray()
                    select new Resource
                    {
                        Data = c,
                        Links = new {
                            delete = url.Link(Constants.RouteNames.RemoveClaim, new { subject = user.Subject, type = c.Type, value = c.Value })
                        }
                    };
                this["Claims"] = new Resource
                {
                    Data = claims.ToArray(),
                    Links = new {
                        create = url.Link(Constants.RouteNames.AddClaim, new { subject = user.Subject })
                    }
                };
            }
        }
    }
}
