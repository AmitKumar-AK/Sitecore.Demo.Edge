namespace OpenAQAir.Domain.Entities
{
  public class BaseQuery
  {
    public string Keyword { get; set; } = string.Empty;
    public int PageSize { get; set; }
    public int PageNumber { get; set; } = 1;
    public string SortOrder { get; set; } = string.Empty;
  }
}
