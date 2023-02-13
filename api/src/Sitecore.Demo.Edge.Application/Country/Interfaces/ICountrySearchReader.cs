using Sitecore.Demo.Edge.Application.Country.Queries;
using Sitecore.Demo.Edge.Domain.Entities;

namespace Sitecore.Demo.Edge.Application.Country.Interfaces
{
  public interface ICountrySearchReader
  {
    System.Threading.Tasks.Task<CountryResponse> GetCountriesAsync(SearchCountryQuery query, System.Threading.CancellationToken cancellationToken = default);
  }
}
