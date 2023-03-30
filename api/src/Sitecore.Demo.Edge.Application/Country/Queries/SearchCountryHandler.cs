using MediatR;
using Sitecore.Demo.Edge.Application.Country.Interfaces;
using Sitecore.Demo.Edge.Domain.Entities;
using Sitecore.Demo.Edge.Domain.Interfaces;

namespace Sitecore.Demo.Edge.Application.Country.Queries
{
  public class SearchCountryHandler : IRequestHandler<SearchCountryQuery, CountryResponse>
  {
      private readonly ICountrySearchReader _countrySearchReader;

    public SearchCountryHandler(ICountrySearchReader countrySearchReader)
    {
      _countrySearchReader = countrySearchReader;
    }

    public async System.Threading.Tasks.Task<CountryResponse> Handle(SearchCountryQuery request, System.Threading.CancellationToken cancellationToken)
    {
      return await _countrySearchReader.GetCountriesAsync(request, cancellationToken);
    }


  }
}
