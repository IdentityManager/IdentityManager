using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http.ExceptionHandling;

namespace Thinktecture.IdentityManager.Configuration.Hosting
{
    internal class ExceptionLoggerAdapter : ExceptionLogger
    {
        private readonly IIdmLogger _logger;
        public ExceptionLoggerAdapter(IIdmLogger logger)
        {
            _logger = logger;
        }
        public override Task LogAsync(ExceptionLoggerContext context, CancellationToken cancellationToken)
        {
            return Task.Run(() => _logger.LogAsync(new IdmLogContext
            {
                Exception = context.Exception,
                RequestHeaders = context.Request.Headers.ToDictionary(pair => pair.Key, pair => pair.Value),
                RequestUri = context.Request.RequestUri
            }, cancellationToken), cancellationToken);
        }
    }
}
