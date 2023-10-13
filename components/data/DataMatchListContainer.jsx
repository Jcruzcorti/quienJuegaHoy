import DataMatchList from "./DataMatchList"


async function getData() {
    const res = await fetch('http://api.football-data.org/v4/teams/2061',{
      headers: {
        "X-Auth-token": process.env.REACT_APP_PROYECT_API_ID
      }
    })

    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function DataMatchListContainer() {

    const data = await getData()
    const newData = [data]
    // const newData = Object.entries(data);
   
    return (
        <main>
            <DataMatchList newData={newData}/>
        </main>
    ) 
  }