using OpenAQAir.Domain.Entities;

namespace OpenAQAir.Application.City.Interfaces
{
  public interface ICityService
  {
    public Output GetCities();
    public Output GetCities(CityQuery query);

    public System.Threading.Tasks.Task<CityResponse> GetCitiesAsync(CityQuery query);
  }
}
