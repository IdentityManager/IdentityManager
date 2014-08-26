using System.Diagnostics;
using System.Web.Http.ExceptionHandling;

namespace Thinktecture.IdentityManager.Configuration.Hosting
{
    public class TraceLogger : ExceptionLogger
    {
        public override void Log(ExceptionLoggerContext context)
        {
            Trace.WriteLine(context.Exception.ToString());
        }
    }
}
