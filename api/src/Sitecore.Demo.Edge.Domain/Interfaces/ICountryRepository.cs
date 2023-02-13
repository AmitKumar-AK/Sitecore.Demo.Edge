
using Sitecore.Demo.Edge.Domain.Entities;

namespace Sitecore.Demo.Edge.Domain.Interfaces
{
  public interface ICountryRepository
  {
    Output GetCountries(CountryQuery query);

    System.Threading.Tasks.Task<CountryResponse> GetCountriesAsync(CountryQuery query);
  }
}
