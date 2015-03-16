/*
 * Copyright 2014 Dominick Baier, Brock Allen
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using IdentityManager.Configuration;

namespace IdentityManager.Assets
{
    class EmbeddedHtmlResult : IHttpActionResult
    {
        string path;
        string file;
        OAuth2Configuration oauthConfig;
        string frameCallbackUrl;

        public EmbeddedHtmlResult(HttpRequestMessage request, string file, OAuth2Configuration oauthConfig = null)
        {
            this.path = request.GetOwinContext().Request.PathBase.Value;
            this.file = file;
            this.oauthConfig = oauthConfig;
            if (oauthConfig != null && oauthConfig.AutomaticallyRenewToken)
            {
                this.frameCallbackUrl = request.GetUrlHelper().Link(Constants.RouteNames.OAuthFrameCallback, null);
            }
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
                    authorization_endpoint = oauthConfig.AuthorizationUrl,
                    client_id = oauthConfig.ClientId,
                    response_type = "token",
                    scope = oauthConfig.Scope,
                    persist = oauthConfig.PersistToken,
                    silent_redirect_uri = this.frameCallbackUrl,
                    silent_renew = !String.IsNullOrWhiteSpace(this.frameCallbackUrl)
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
