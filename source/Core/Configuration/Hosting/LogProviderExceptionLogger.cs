using System.Threading;
using System.Threading.Tasks;
using System.Web.Http.ExceptionHandling;
using Thinktecture.IdentityManager.Core.Logging;

namespace Thinktecture.IdentityManager.Configuration.Hosting
{
    internal class LogProviderExceptionLogger : IExceptionLogger
    {
        private readonly static ILog Logger = LogProvider.GetCurrentClassLogger();

        public Task LogAsync(ExceptionLoggerContext context, CancellationToken cancellationToken)
        {
            Logger.ErrorException("Unhandled exception", context.Exception);

            return Task.FromResult<object>(null);
        }
    }
}
