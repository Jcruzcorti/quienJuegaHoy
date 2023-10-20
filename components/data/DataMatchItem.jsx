import React from 'react'
import styles from '../../app/page.module.css'
// import { newDateArg } from '../date/DateArg';
// import Image from 'next/image'

function DataMatchItem({match}) {
  
  // const fechaUTC = {};
  // const newDateFormated = newDateArg(new Date(fechaUTC));

  // const fechaUTC = new Date('2023-04-03T14:30:00Z');

  return (
    <>
        {/* <h2>{match.name}</h2>
        <h4>{match.venue}</h4>
        <p>{match.address}</p> */}
        {/* <p>{match.squad.name}</p> */}

        {match.matches.map((m=>(


           <div key={m.id}>
                <h3>{m.competition.name}</h3>
                <h2>{m.homeTeam.shortName}</h2> <h2>{m.score.fullTime.home}</h2>
                vs
                 <h2>{m.awayTeam.shortName}</h2> <h2>{m.score.fullTime.away}</h2>
                 <h2>{m.utcDate}</h2>
                {/* <Image src={m.homeTeam.crest} width={20} height={20}/> */}
           </div> 
        )))}

        {/* <Image src={match.crest} width={20} height={20}/> */}
        
        
        {/* {JSON.stringify(match)} */}
    </>
  )
}

export default DataMatchItem


