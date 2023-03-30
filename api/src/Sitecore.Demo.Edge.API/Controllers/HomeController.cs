﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Sitecore.Demo.Edge.API.Models;
using Sitecore.Demo.Edge.Application.City.Interfaces;
using Sitecore.Demo.Edge.Application.Country.Interfaces;
using Sitecore.Demo.Edge.Domain.Entities;
using System.Diagnostics;
using System.Threading.Tasks;

namespace Sitecore.Demo.Edge.API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class HomeController : ControllerBase
  {
        private readonly ILogger<HomeController> _logger;
        private ICityService _cityService;
        private ICountryService _countryService;

      public HomeController(ILogger<HomeController> logger, ICityService cityService, ICountryService countryService)
      {
        _logger = logger;
        _cityService = cityService;
        _countryService = countryService;
      }


    /// <summary>
    /// The purpose of this feature is to provide information on the City
    /// </summary>
    /// <param name="keyword"></param>
    /// <returns></returns>
    [HttpPost]
    [Route("city/citylist")]
    public async Task<ActionResult> CityList(string keyword, string sortOrder)
    {
      _logger.LogInformation("Web => CityList :: Start");

      var query = new CityQuery()
      {
        Keyword = keyword,
        PageNumber = 1,
        SortOrder = string.IsNullOrEmpty(sortOrder) ? "asc" : sortOrder
      };
     var response = await _cityService.GetCitiesAsync(query);
      _logger.LogInformation("Web => CityList :: End");
      return Ok(response);
    }


  }
}
