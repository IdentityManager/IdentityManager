/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace Thinktecture.IdentityManager.Assets
{
    class EmbeddedHtmlResult : IHttpActionResult
    {
        HttpRequestMessage request;
        string name;
        public EmbeddedHtmlResult(HttpRequestMessage request, string name)
        {
            this.request = request;
            this.name = name;
        }

        public Task<System.Net.Http.HttpResponseMessage> ExecuteAsync(System.Threading.CancellationToken cancellationToken)
        {
            return Task.FromResult(GetResponseMessage(this.request, this.name));
        }

        public static HttpResponseMessage GetResponseMessage(HttpRequestMessage request, string name)
        {
            var root = request.GetRequestContext().VirtualPathRoot;
            var html = AssetManager.LoadResourceString(name);
            return new HttpResponseMessage()
            {
                Content = new StringContent(html, Encoding.UTF8, "text/html")
            };
        }
    }
}
