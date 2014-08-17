using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
