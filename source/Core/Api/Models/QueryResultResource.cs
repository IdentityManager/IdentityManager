using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http.Routing;

namespace Thinktecture.IdentityManager.Api.Models
{
    public class QueryResultResource
    {
        public QueryResultResource(QueryResult result, UrlHelper url, UserMetadata meta)
        {
            if (result == null) throw new ArgumentNullException("user");
            if (url == null) throw new ArgumentNullException("url");
            if (meta == null) throw new ArgumentNullException("meta");

            Data = new QueryResultResourceData(result, url, meta);
            
            var links = new Dictionary<string, object>();
            if (meta.SupportsCreate)
            {
                links["create"] = new CreateUserLink(url, meta);
            };
            Links = links;
        }

        public QueryResultResourceData Data { get; set; }
        public object Links { get; set; }
    }

    public class QueryResultResourceData : QueryResult
    {
        static QueryResultResourceData()
        {
            AutoMapper.Mapper.CreateMap<QueryResult, QueryResultResourceData>()
                .ForMember(x => x.Users, opts => opts.MapFrom(x => x.Users));
            AutoMapper.Mapper.CreateMap<UserResult, UserResultResource>()
                .ForMember(x => x.Data, opts => opts.MapFrom(x => x));
        }

        public QueryResultResourceData(QueryResult result, UrlHelper url, UserMetadata meta)
        {
            if (result == null) throw new ArgumentNullException("result");
            if (url == null) throw new ArgumentNullException("url");
            if (meta == null) throw new ArgumentNullException("meta");

            AutoMapper.Mapper.Map(result, this);

            foreach (var user in this.Users)
            {
                var links = new Dictionary<string, string> {
                    {"Detail", url.Link(Constants.RouteNames.GetUser, new { subject = user.Data.Subject })}
                };
                if (meta.SupportsDelete)
                {
                    links.Add("delete", url.Link(Constants.RouteNames.DeleteUser, new { subject = user.Data.Subject }));
                }
                user.Links = links;
            }
        }

        public new IEnumerable<UserResultResource> Users { get; set; }
    }

    public class UserResultResource
    {
        public UserResult Data { get; set; }
        public object Links { get; set; }
    }
}
