
using Sitecore.Demo.Edge.Domain.Entities;

namespace Sitecore.Demo.Edge.Domain.Interfaces
{
  public interface ICityRepository
  {
    Output GetCities();
    Output GetCities(CityQuery query);
    System.Threading.Tasks.Task<CityResponse> GetCitiesAsync(CityQuery query);
  }
}
