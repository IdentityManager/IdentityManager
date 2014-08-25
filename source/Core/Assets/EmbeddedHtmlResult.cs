/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

using System;
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
        string token;
        public EmbeddedHtmlResult(HttpRequestMessage request, string name, string token = null)
        {
            this.request = request;
            this.name = name;
            this.token = token;
        }

        public Task<System.Net.Http.HttpResponseMessage> ExecuteAsync(System.Threading.CancellationToken cancellationToken)
        {
            return Task.FromResult(GetResponseMessage(this.request, this.name, this.token));
        }

        public static HttpResponseMessage GetResponseMessage(HttpRequestMessage request, string name, string token)
        {
            token = token ?? String.Empty;
            var root = request.GetOwinContext().Request.PathBase;
            var html = AssetManager.LoadResourceString(name, new { pathBase = root.Value, token });
            return new HttpResponseMessage()
            {
                Content = new StringContent(html, Encoding.UTF8, "text/html")
            };
        }
    }
}
