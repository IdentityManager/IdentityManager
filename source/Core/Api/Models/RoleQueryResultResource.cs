/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http.Routing;

namespace Thinktecture.IdentityManager.Api.Models
{
    public class RoleQueryResultResource
    {
        public RoleQueryResultResource(QueryResult<RoleSummary> result, UrlHelper url, RoleMetadata meta)
        {
            if (result == null) throw new ArgumentNullException("result");
            if (url == null) throw new ArgumentNullException("url");
            if (meta == null) throw new ArgumentNullException("meta");

            Data = new RoleQueryResultResourceData(result, url, meta);
            
            var links = new Dictionary<string, object>();
            if (meta.SupportsCreate)
            {
                links["create"] = new CreateRoleLink(url, meta);
            };
            Links = links;
        }

        public RoleQueryResultResourceData Data { get; set; }
        public object Links { get; set; }
    }

    public class RoleQueryResultResourceData : QueryResult<RoleSummary>
    {
        static RoleQueryResultResourceData()
        {
            AutoMapper.Mapper.CreateMap<QueryResult<RoleSummary>, RoleQueryResultResourceData>()
                .ForMember(x => x.Items, opts => opts.MapFrom(x => x.Items));
            AutoMapper.Mapper.CreateMap<RoleSummary, RoleResultResource>()
                .ForMember(x => x.Data, opts => opts.MapFrom(x => x));
        }

        public RoleQueryResultResourceData(QueryResult<RoleSummary> result, UrlHelper url, RoleMetadata meta)
        {
            if (result == null) throw new ArgumentNullException("result");
            if (url == null) throw new ArgumentNullException("url");
            if (meta == null) throw new ArgumentNullException("meta");

            AutoMapper.Mapper.Map(result, this);

            foreach (var role in this.Items)
            {
                var links = new Dictionary<string, string>();
                if (meta.SupportsDelete)
                {
                    links.Add("delete", url.Link(Constants.RouteNames.DeleteRole, new { subject = role.Data.Subject }));
                }
                role.Links = links;
            }
        }

        public new IEnumerable<RoleResultResource> Items { get; set; }
    }

    public class RoleResultResource
    {
        public RoleSummary Data { get; set; }
        public object Links { get; set; }
    }
}
