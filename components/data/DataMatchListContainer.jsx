import DataMatchList from "./DataMatchList"



export default async function DataMatchListContainer() {

  const newDateToday = new Date();
  const dateISOToday = newDateToday.toISOString().split('T')[0];

  // const newDateTomorrow = new Date();
  // newDateTomorrow.setDate(newDateTomorrow.getDate() + 1);
  // const dateISOTomorrow = newDateTomorrow.toISOString().split('T')[0];


  const res = await fetch(`https://api.football-data.org/v4/matches?date=${dateISOToday}`, {
    cache: 'no-store',
    headers: {
      'X-Auth-Token': process.env.REACT_APP_PROYECT_API_ID
    }
  });

  // const res2 = await fetch(`https://api.football-data.org/v4/matches?date=${dateISOTomorrow}`, {
  //   headers: {
  //     'X-Auth-Token': process.env.REACT_APP_PROYECT_API_ID
  //   }
  // });


  // if (!res.ok && !res2.ok) {
  if (!res.ok) {
    throw new Error('Failed to fetch data');  
  }

  const data = await res.json();
  // const data = await res&&res2.json();



  // -------------------

  // const newDateTomorrow = new Date();
  // newDateTomorrow.setDate(newDateTomorrow.getDate() + 1);
  // const dateISOTomorrow = newDateTomorrow.toISOString().split('T')[0];



  // const tomorrowMatches = data.matches.filter(match => {
  //   const dateMatch = new Date(match.utcDate);
  //   dateMatch.setHours(dateMatch.getHours() - 3); // Ajuste para zona horaria de Argentina
  
  //   if (dateMatch.getHours() < 0) {
  //     // Si el partido está programado antes de las 00:00, se considera parte del día anterior
  //     dateMatch.setDate(dateMatch.getDate() - 1);
  //   }
  
  //   return dateMatch.toISOString().split('T')[0] === dateISOTomorrow;
  // });





  // -------------------




  const partidosHoy = data.matches.filter(match => {
    const fechaPartido = new Date(match.utcDate);
    fechaPartido.setHours(fechaPartido.getHours() - 3); // Ajuste para zona horaria de Argentina
  
    if (fechaPartido.getHours() < 0) {
      // Si el partido está programado antes de las 03:00, se considera parte del día anterior
      fechaPartido.setDate(fechaPartido.getDate() - 1);
    }
  
    return fechaPartido.toISOString().split('T')[0] === dateISOToday;
  });

  // const todayMatches = data.matches.filter(match => {
  //   const dateMatch = new Date(match.utcDate);
  //   return dateMatch.toISOString().split('T')[0] === dateISOToday ;
  // });


  // const partidosHoyYAy = [...partidosHoy, ...tomorrowMatches];

  // partidosHoyYAy.sort((a, b) => {
  //   const fechaA = new Date(a.utcDate);
  //   const fechaB = new Date(b.utcDate);
  //   return fechaA - fechaB;
  // });
 
  const leagues = [2021, 2001, 2015, 2002, 2019, 2014, 2013, 2000, 2017, 2018];
  const filteredMatch = partidosHoy.filter(match => leagues.includes(match.competition.id));


  return (
    <>
      <DataMatchList newData={filteredMatch} />
    </>
  );
}
