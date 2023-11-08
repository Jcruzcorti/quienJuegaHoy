import DataMatchList from "./DataMatchList"



async function getData() {

  const newDateToday = new Date();
  const dateISOToday = newDateToday.toISOString().split('T')[0];
  
  const res = await fetch(`https://api.football-data.org/v4/matches?date=${dateISOToday}`, {
    cache: 'no-store',
    headers: {
      'X-Auth-Token': process.env.REACT_APP_PROYECT_API_ID
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');  
  }

  return res.json()
}
 


export default async function DataMatchListContainer() {
  
  const data = await getData()

  const leagues = [2021, 2001, 2015, 2002, 2019, 2014, 2000, 2017, 2018];
  const filteredMatch = data.matches.filter(match => leagues.includes(match.competition.id));


  return (
    <>
      <DataMatchList newData={filteredMatch} />
    </>
  );
}