using OpenAQAir.Application.Country.Queries;
using OpenAQAir.Domain.Entities;

namespace OpenAQAir.Application.Country.Interfaces
{
  public interface ICountrySearchReader
  {
    System.Threading.Tasks.Task<CountryResponse> GetCountriesAsync(SearchCountryQuery query, System.Threading.CancellationToken cancellationToken = default);
  }
}
