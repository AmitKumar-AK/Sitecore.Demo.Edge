using MediatR;
using Microsoft.Extensions.Logging;

namespace Sitecore.Demo.Edge.Application.Common.Behaviours
{
  public class LoggingBehaviour<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
          where TRequest : IRequest<TResponse>
  {
    private readonly ILogger _logger;

    public LoggingBehaviour(ILogger<LoggingBehaviour<TRequest, TResponse>> logger)
    {
      _logger = logger;
    }

    public async System.Threading.Tasks.Task<TResponse> Handle(TRequest request, System.Threading.CancellationToken cancellationToken, RequestHandlerDelegate<TResponse> next)
    {
      var requestName = typeof(TRequest).Name;

      // get any other info here

      _logger.LogInformation("App Request: {RequestName} {@Request}",
                             requestName,
                             request);

      return await next();
    }
  }
}
