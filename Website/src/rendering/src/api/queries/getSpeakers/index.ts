import { fetchGraphQL } from '../..';
import { ListResults } from '../../../interfaces/schema';

export const getSpeakers = async (contextItem:string,language:string): Promise<{ speakers: ListResults }> => {
  const speakersQuery = `
  query {
    #----Get only specific children on the basis of Template :: Start ::------
      item(path: "${contextItem}",language:"${language}") {
       #-- Get only  Webpage
      children (includeTemplateIDs: ["6DB09CEF64A852A3A98038408109C4D7"],first:3)
        {
        results
          {
            id
            name
            displayName
            url {path} 
            ... on Speaker
            {
              description {value}
              picture {jsonValue}
            }

          }

        }
      }
   #----Get only specific children on the basis of Template :: End ::------ 
  }
    `;

  const results: ListResults = (await fetchGraphQL(speakersQuery)) as ListResults;
  if (results && results.data) {
     return { speakers: results };
  }
  return { speakers: null };
};

