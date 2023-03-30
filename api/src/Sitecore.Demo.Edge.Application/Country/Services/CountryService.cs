using Sitecore.Demo.Edge.Application.Country.Interfaces;
using Sitecore.Demo.Edge.Application.Country.Queries;
using Sitecore.Demo.Edge.Domain.Entities;
using Sitecore.Demo.Edge.Domain.Interfaces;

namespace Sitecore.Demo.Edge.Application.Country.Services
{
  public class CountryService : ICountryService
  {
    public ICountryRepository _countryRepository;
    public CountryService(ICountryRepository countryRepository)
    {
      _countryRepository = countryRepository;
    }

    /// <summary>
    /// This function from Application layer provide information on the Country.
    /// </summary>
    /// <param name="query"></param>
    /// <returns></returns>
    public Output GetCountries(CountryQuery query)
    {
      var response = _countryRepository.GetCountries(query);
      return response;
    }

    public System.Threading.Tasks.Task<CountryResponse> GetCountriesAsync(CountryQuery query)
    {
      var response = _countryRepository.GetCountriesAsync(query);
      return response;
    }

  }
}
