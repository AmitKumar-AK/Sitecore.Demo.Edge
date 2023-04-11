export default async function handler(req: any, res:any) {
  const response= await fetch('https://dummyapi.io/data/v1/user?limit=10&page=2',{
    headers: {
      "content-type": "application/json",
      "app-id": "64257e4727f0428978913c23",
    },
  })  
  const data = await response.json();
  res.status(200).json(data);
}