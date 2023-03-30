using Microsoft.OpenApi.Models;
using Serilog;
using Sitecore.Demo.Edge.Application.DependencyInjection;
using Sitecore.Demo.Edge.Infrastructure.OpenAQAir;
// --- Please, don't remove this block using statement otherwise docker build will fail -- :: Start :: --
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
// --- Please, don't remove this block using statement otherwise docker build will fail -- :: End :: --

namespace Sitecore.Demo.Edge.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
          Configuration = configuration;
          Log.Logger = new LoggerConfiguration()
            .ReadFrom.Configuration(configuration).CreateLogger();
    }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
        services.AddControllersWithViews();
        services.AddControllers();
      services.AddRouting(opt => opt.LowercaseUrls = true);

      // Register the Swagger generator, defining 1 or more Swagger documents
      services.AddSwaggerGen(c =>
                {
                  c.SwaggerDoc("v2", new OpenApiInfo { Title = "Sitecore.Demo.Edge.API", Version = "v2" });
                });
        
        //--Register Application Layer Dependencies
        services.AddApplication();
        //--Register Infrastructure Layer Dependencies
        services.AddOpenAQAirSearch(Configuration, services);
    }


    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
      /*
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
              c.SwaggerEndpoint("/swagger/v2/swagger.json", "Sitecore.Demo.Edge.API v2");
              //-- Enable this direct open the Swagger UI
              //c.RoutePrefix = string.Empty;
            });

          


    
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();


      app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });


          */

            if (env.IsDevelopment())
            {
              app.UseDeveloperExceptionPage();

              app.UseSwagger();
              app.UseSwaggerUI(c =>
              {
                c.SwaggerEndpoint("/swagger/v2/swagger.json", "Sitecore.Demo.Edge.API v2");
              });
            }


            app.UseRouting();
            app.UseEndpoints(endpoints =>
            {
              endpoints.MapControllers();

            });

    }
    }
}
