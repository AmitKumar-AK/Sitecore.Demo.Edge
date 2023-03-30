using System.Reflection;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using Sitecore.Demo.Edge.Application.Common.Behaviours;

namespace Sitecore.Demo.Edge.Application.DependencyInjection
{
  public static class DependencyInjectionExtensions
  {
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
      services.AddAutoMapper(Assembly.GetExecutingAssembly());
      services.AddMediatR(Assembly.GetExecutingAssembly());
      services.AddTransient(typeof(IPipelineBehavior<,>), typeof(LoggingBehaviour<,>));
      return services;
    }
  }
}
