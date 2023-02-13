using MediatR;
using OpenAQAir.Application.Country.Interfaces;
using OpenAQAir.Domain.Entities;
using OpenAQAir.Domain.Interfaces;

namespace OpenAQAir.Application.Country.Queries
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
