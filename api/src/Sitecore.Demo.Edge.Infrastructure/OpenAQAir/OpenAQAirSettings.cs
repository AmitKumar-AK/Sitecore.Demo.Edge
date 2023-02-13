
using System.ComponentModel.DataAnnotations;

namespace Sitecore.Demo.Edge.Infrastructure.OpenAQAir
{

  public class OpenAQAirSettings
  {
    [Required]
    public string? OpenAQAirEndPoint { get; set; }

    [Required]
    public int DefaultPageSize { get; set; }

  }
}
