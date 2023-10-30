import DataMatchListTomorrow from "./DataMatchListTomorrow";
import { format, addDays } from 'date-fns';


async function getData() {

    const dateTomorrow = addDays(new Date(), 1);
    const newDateTomorrow = format(dateTomorrow, 'yyyy-MM-dd');

    // const fechaManana = new Date();
    // fechaManana.setDate(fechaManana.getDate() + 1);
    // const fechaISO = fechaManana.toISOString().split('T')[0];

  const res = await fetch(`https://api.football-data.org/v4/matches?date=${newDateTomorrow}`, {
    headers: {
      'X-Auth-Token': process.env.REACT_APP_PROYECT_API_ID
    }
  });

    // const res = await fetch('http://api.football-data.org/v4/matches/',{
    //   headers: {
    //     "X-Auth-token": process.env.REACT_APP_PROYECT_API_ID
    //   }
    // })


    // PL,EC,CL,FL1,BL1,SA,PPL,PD,WC
    // The return value is *not* serialized
    https://api.football-data.org/v4/matches?date=YESTERDAY
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
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