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
    class EmbeddedHtmlModel
    {
        public string FileName { get; set; }
        public string Username { get; set; }
        public string LogoutUrl { get; set; }
        public string Token { get; set; }
        public string PathBase { get; set; }
    }

    class EmbeddedHtmlResult : IHttpActionResult
    {
        EmbeddedHtmlModel model;
        public EmbeddedHtmlResult(EmbeddedHtmlModel model)
        {
            this.model = model;
        }

        public Task<System.Net.Http.HttpResponseMessage> ExecuteAsync(System.Threading.CancellationToken cancellationToken)
        {
            return Task.FromResult(GetResponseMessage(this.model));
        }

        public static HttpResponseMessage GetResponseMessage(EmbeddedHtmlModel model)
        {
            var html = AssetManager.LoadResourceString(model.FileName,
                new
                {
                    pathBase = model.PathBase,
                    model = Newtonsoft.Json.JsonConvert.SerializeObject(new
                    {
                        model.PathBase,
                        model.Token,
                        model.Username,
                        model.LogoutUrl
                    })
                });
            return new HttpResponseMessage()
            {
                Content = new StringContent(html, Encoding.UTF8, "text/html")
            };
        }
    }
}
