using System.Threading;
using System.Threading.Tasks;

namespace Thinktecture.IdentityManager.Configuration.Hosting
{
    public interface IIdmLogger
    {
        Task LogAsync(IdmLogContext ctx, CancellationToken cancellationToken);
    }
}
