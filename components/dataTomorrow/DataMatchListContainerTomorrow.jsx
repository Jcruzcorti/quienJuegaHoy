import DataMatchListTomorrow from "./DataMatchListTomorrow";


async function getData() {

  const newDateTomorrow = new Date();
  newDateTomorrow.setDate(newDateTomorrow.getDate() + 1);
  const dateISOTomorrow = newDateTomorrow.toISOString().split('T')[0];

  const res = await fetch(`https://api.football-data.org/v4/matches?date=${dateISOTomorrow}`, {
    headers: {
      'X-Auth-Token': process.env.REACT_APP_PROYECT_API_ID
    }
  });
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function DataMatchListContainerTomorrow() {


    const data = await getData()
      const leagues = [2021, 2001, 2015, 2002, 2019, 2014,2013, 2000, 2017, 2018]; 
      
      const filteredMatch = data.matches.filter(match => leagues.includes(match.competition.id));     

    const newData = filteredMatch
   
    return (
        <>
            <DataMatchListTomorrow newData={newData}/>
        </>
    ) 
  }