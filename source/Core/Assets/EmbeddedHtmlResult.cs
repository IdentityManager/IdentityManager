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
        string path;
        string file;
        OAuth2Configuration oauthConfig;

        public EmbeddedHtmlResult(HttpRequestMessage request, string file, OAuth2Configuration oauthConfig = null)
        {
            this.path = request.GetOwinContext().Request.PathBase.Value;
            this.file = file;
            this.oauthConfig = oauthConfig;
        }

        public Task<System.Net.Http.HttpResponseMessage> ExecuteAsync(System.Threading.CancellationToken cancellationToken)
        {
            return Task.FromResult(GetResponseMessage());
        }

        public HttpResponseMessage GetResponseMessage()
        {
            object oauth = null;
            if (oauthConfig != null)
            {
                oauth = new
                {
                    oauthConfig.AuthorizationUrl,
                    oauthConfig.ClientId,
                    oauthConfig.Scope,
                    oauthConfig.PersistToken,
                    oauthConfig.AutomaticallyRenewToken
                };
            }
            var html = AssetManager.LoadResourceString(this.file,
                new {
                    pathBase = this.path,
                    model = Newtonsoft.Json.JsonConvert.SerializeObject(new
                    {
                        PathBase = this.path,
                        OAuthConfig = oauth
                    })
                });
            return new HttpResponseMessage()
            {
                Content = new StringContent(html, Encoding.UTF8, "text/html")
            };
        }
    }
}
