using MediatR;
using Sitecore.Demo.Edge.Domain.Entities;

namespace Sitecore.Demo.Edge.Application.Country.Queries
{
  public class SearchCountryQuery : CountryQuery,IRequest<CountryResponse>
  {
  }
}
