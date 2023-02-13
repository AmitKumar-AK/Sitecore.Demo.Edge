
using OpenAQAir.Domain.Entities;

namespace OpenAQAir.Domain.Interfaces
{
  public interface ICityRepository
  {
    Output GetCities();
    Output GetCities(CityQuery query);
    System.Threading.Tasks.Task<CityResponse> GetCitiesAsync(CityQuery query);
  }
}
