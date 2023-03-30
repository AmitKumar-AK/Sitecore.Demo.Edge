namespace Sitecore.Demo.Edge.Domain.Entities
{
  public class CountryResponse : Output
  {
    public System.Collections.Generic.IEnumerable<CountryDetails>? Results { get; set; }
  }
}
