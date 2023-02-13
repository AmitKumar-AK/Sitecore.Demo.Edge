
using OpenAQAir.Domain.Entities;

namespace OpenAQAir.Domain.Interfaces
{
  public interface ICountryRepository
  {
    Output GetCountries(CountryQuery query);

    System.Threading.Tasks.Task<CountryResponse> GetCountriesAsync(CountryQuery query);
  }
}
