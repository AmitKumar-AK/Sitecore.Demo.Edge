using Sitecore.Demo.Edge.Application.Country.Queries;
using Sitecore.Demo.Edge.Domain.Entities;

namespace Sitecore.Demo.Edge.Application.Country.Interfaces
{
  public interface ICountryService
  {
    public Output GetCountries(CountryQuery query);

    public System.Threading.Tasks.Task<CountryResponse> GetCountriesAsync(CountryQuery query);
  }
}
