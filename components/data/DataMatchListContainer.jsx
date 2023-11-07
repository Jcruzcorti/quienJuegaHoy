import DataMatchList from "./DataMatchList"



async function getData() {

  const newDateToday = new Date();
  // newDateToday.setDate(newDateToday.getDate() - 1);
  const dateISOToday = newDateToday.toISOString().split('T')[0];
  
  // https://api.football-data.org/v4/matches?/dateFrom=${dateISOToday}/dateTo=${dateISOTomorrow}
  const res = await fetch(`https://api.football-data.org/v4/matches?date=${dateISOToday}`, {
    cache: 'no-store',
    headers: {
      'X-Auth-Token': process.env.REACT_APP_PROYECT_API_ID
    }
  });


  // if (!res.ok && !res2.ok) {
  if (!res.ok) {
    throw new Error('Failed to fetch data');  
  }


  return res.json()

  // const partidosHoy = data.matches.filter(match => {
  //   const fechaPartido = new Date(match.utcDate);
  //   fechaPartido.setHours(fechaPartido.getHours() - 3); // Ajuste para zona horaria de Argentina
  
  //   if (fechaPartido.getHours() < 0) {
  //     // Si el partido está programado antes de las 03:00, se considera parte del día anterior
  //     fechaPartido.setDate(fechaPartido.getDate() - 1);
  //   }
  
  //   return fechaPartido.toISOString().split('T')[0] === dateISOToday;
  // });


  // return data
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