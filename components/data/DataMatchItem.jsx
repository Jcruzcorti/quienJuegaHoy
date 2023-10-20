import React from 'react'
import styles from '../../app/page.module.css'
import { newDateArg } from '../date/DateArg';
// import Image from 'next/image'

function DataMatchItem({match}) {
  

  return (
    <>

      {match.matches.map((m=>(
        <div key={m.id}>
            <h3>{m.competition.name}</h3>
            <h2>{m.homeTeam.shortName}</h2> <h2>{m.score.fullTime.home}</h2>
            vs
             <h2>{m.awayTeam.shortName}</h2> <h2>{m.score.fullTime.away}</h2>
             <h2>{newDateArg(m.utcDate)} hs</h2>
            {/* <Image src={m.homeTeam.crest} width={20} height={20}/> */}
        </div> 
      )))}
        
        
        {/* {JSON.stringify(match)} */}
    </>
  )
}

export default DataMatchItem


