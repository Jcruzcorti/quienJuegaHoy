import DataMatchListTomorrow from "./DataMatchListTomorrow";



  export default async function DataMatchListContainerTomorrow() {

    const newDateTomorrow = new Date();
    newDateTomorrow.setDate(newDateTomorrow.getDate() + 1);
    const dateISOTomorrow = newDateTomorrow.toISOString().split('T')[0];
  
    const res = await fetch(`https://api.football-data.org/v4/matches?date=${dateISOTomorrow}`, {
      cache: 'no-store',
      headers: {
          'X-Auth-Token': process.env.REACT_APP_PROYECT_API_ID
        }
    });
     
      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
     
  
    const data = await res.json()


    const tomorrowMatches = data.matches.filter(match => {
      const dateMatch = new Date(match.utcDate);
      dateMatch.setHours(dateMatch.getHours() - 3); // Ajuste para zona horaria de Argentina
    
      if (dateMatch.getHours() < 0) {
        // Si el partido está programado antes de las 00:00, se considera parte del día anterior
        dateMatch.setDate(dateMatch.getDate() - 1);
      }
    
      return dateMatch.toISOString().split('T')[0] === dateISOTomorrow;
    });
    
    const leagues = [2021, 2001, 2015, 2002, 2019, 2014,2013, 2000, 2017, 2018];    
    const filteredMatch = tomorrowMatches.filter(match => leagues.includes(match.competition.id));     

   
    return (
        <>
            <DataMatchListTomorrow newData={filteredMatch}/>
            {/* <DataMatchListContainer newDataToday={filteredMatch}/> */}
        </>
    ) 
}