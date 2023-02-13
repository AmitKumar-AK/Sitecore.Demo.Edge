
namespace OpenAQAir.Domain.Entities
{
  public class CityResponse: Output
  {
    public System.Collections.Generic.IEnumerable<CityDetails>? Results { get; set; }
  }
}
