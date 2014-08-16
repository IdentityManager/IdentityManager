using Microsoft.Owin.Testing;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using Thinktecture.IdentityManager;
using Owin;
using Moq;

namespace Core.Tests.Api
{
    public class WebApiTestBase
    {
        protected FakeIdentityManager identityManager;
        protected TestServer server;
        protected HttpClient client;

        [TestInitialize]
        public void Init()
        {
            identityManager = new FakeIdentityManager();
            server = TestServer.Create(app =>
            {
                app.UseIdentityManager(new IdentityManagerConfiguration {
                    IdentityManagerFactory = () => identityManager.Object
                });
            });
            client = server.HttpClient;
        }

        [TestCleanup]
        public void Cleanup()
        {
            server.Dispose();
        }

        protected string Url(string path)
        {
            return "http://foo/" + path;
        }

        protected void ConfigureQueryUsers(int number)
        {
            var users = new UserSummary[number];
            for (var i = 0; i < number; i++)
            {
                users[i] = new UserSummary { Subject = i.ToString() };
            }
            identityManager.SetupQueryUsersAsync(new QueryResult<UserSummary> { Items = users });
        }

        protected HttpResponseMessage Get(string path)
        {
            return client.GetAsync(Url(path)).Result;
        }
        
        protected T Get<T>(string path)
        {
            var result = Get(path);
            Assert.IsTrue(result.IsSuccessStatusCode);
            return result.Content.ReadAsAsync<T>().Result;
        }

        protected HttpResponseMessage Post<T>(string path, T value)
        {
            return client.PostAsJsonAsync(Url(path), value).Result;
        }
        
        protected HttpResponseMessage Put<T>(string path, T value)
        {
            return client.PutAsJsonAsync(Url(path), value).Result;
        }

        protected HttpResponseMessage Delete(string path)
        {
            return client.DeleteAsync(Url(path)).Result;
        }
    }
}
