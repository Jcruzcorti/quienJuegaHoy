import DataMatchList from "./DataMatchList"


async function getData() {

    const res = await fetch('http://api.football-data.org/v4/matches/',{
      headers: {
        "X-Auth-token": process.env.REACT_APP_PROYECT_API_ID
      }
    })
    // PL,EC,CL,FL1,BL1,SA,PPL,PD,WC
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function DataMatchListContainer() {


    const data = await getData()

      const leagues = [2021, 2001, 2015, 2002, 2019, 2014,2013, 2000, 2017, 2018]; 
      const filteredMatch = data.matches.filter(match => leagues.includes(match.competition.id));     

    const newData = filteredMatch
   
    return (
        <>
            <DataMatchList newData={newData}/>
        </>
    ) 
  }