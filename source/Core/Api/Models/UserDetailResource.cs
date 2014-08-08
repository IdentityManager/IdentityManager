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

            this["Username"] = user.Username;
            this["Name"] = user.Name;
            this["Subject"] = user.Subject;

            if (user.Properties != null)
            {
                var props =
                    from p in user.Properties
                    let m = (from m in meta.Properties where m.Type == p.Type select m).SingleOrDefault()
                    where m != null
                    select new Property
                    {
                        Data = p.Value,
                        Meta = m,
                        Links = new
                        {
                            update = url.Link(Constants.RouteNames.UpdateProperty, new { subject = user.Subject, type = p.Type }),
                        }
                    };
                
                // TODO: validate props against metadata props
                if (props.Any())
                {
                    this["Properties"] = props.ToArray();
                }
            }

            if (meta.SupportsClaims && user.Claims != null)
            {
                var claims =
                    from c in user.Claims.ToArray()
                    select new Resource
                    {
                        Data = c,
                        Links = new
                        {
                            delete = url.Link(Constants.RouteNames.RemoveClaim, new { subject = user.Subject, type = c.Type, value = c.Value })
                        }
                    };
                
                this["Claims"] = new Resource
                {
                    Data = claims.ToArray(),
                    Links = new
                    {
                        create = url.Link(Constants.RouteNames.AddClaim, new { subject = user.Subject })
                    }
                };
            }
        }
    }
}
