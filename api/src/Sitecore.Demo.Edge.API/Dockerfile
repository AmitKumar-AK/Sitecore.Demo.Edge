#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
# if not passed from Compose file then enable to show the swagger
#ENV ASPNETCORE_ENVIRONMENT=Development
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["nuget.config", "."]
COPY ["src/Sitecore.Demo.Edge.API/Sitecore.Demo.Edge.API.csproj", "src/Sitecore.Demo.Edge.API/"]
COPY ["src/Sitecore.Demo.Edge.Application/Sitecore.Demo.Edge.Application.csproj", "src/Sitecore.Demo.Edge.Application/"]
COPY ["src/Sitecore.Demo.Edge.Domain/Sitecore.Demo.Edge.Domain.csproj", "src/Sitecore.Demo.Edge.Domain/"]
COPY ["src/Sitecore.Demo.Edge.Infrastructure/Sitecore.Demo.Edge.Infrastructure.csproj", "src/Sitecore.Demo.Edge.Infrastructure/"]
RUN dotnet restore "src/Sitecore.Demo.Edge.API/Sitecore.Demo.Edge.API.csproj"
COPY . .
WORKDIR "/src/src/Sitecore.Demo.Edge.API"
RUN dotnet build "Sitecore.Demo.Edge.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Sitecore.Demo.Edge.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

ENTRYPOINT ["dotnet", "Sitecore.Demo.Edge.API.dll"]