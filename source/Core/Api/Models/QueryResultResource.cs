using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http.Routing;

namespace Thinktecture.IdentityManager.Core.Api.Models
{
    public class QueryResultResource
    {
        public QueryResultResource(QueryResult result, UrlHelper url, UserMetadata meta)
        {
            if (result == null) throw new ArgumentNullException("user");
            if (url == null) throw new ArgumentNullException("url");
            if (meta == null) throw new ArgumentNullException("meta");

            Data = new QueryResultResourceData(result, url);
            
            var links = new Dictionary<string, string>();
            if (meta.SupportsCreate)
            {
                links["create"] = url.Link(Constants.RouteNames.CreateUser, null);
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

        public QueryResultResourceData(QueryResult result, UrlHelper url)
        {
            if (url == null) throw new ArgumentNullException("url");

            AutoMapper.Mapper.Map(result, this);

            foreach (var user in this.Users)
            {
                user.Links = new
                {
                    Detail = url.Link(Constants.RouteNames.GetUser, new { subject = user.Data.Subject })
                };
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
