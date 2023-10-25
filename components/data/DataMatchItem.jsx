'use client'

import React from 'react'
import styles from '../../app/page.module.css'
import { newDateArg } from '../date/DateArg';
import Image from 'next/image'
import AosComponents from '../aosComponents/AosComponents';


function DataMatchItem({match}) {



  return (
    <AosComponents>

      {match.map((m=>(
        <div key={m.id} className={styles.MatchItem} >
            {/* <Image src={m.area.crest} width={20} height={20} alt='Country flag'/> */}
            <h2>{newDateArg(m.utcDate)} hs</h2>
            <h2>{m.homeTeam.shortName}</h2> 
            <h3>vs</h3>
            {/* <h2>{m.score.fullTime.home}</h2> */}          
            <h2>{m.awayTeam.shortName}</h2> 
            <h3>{m.area.code}</h3> 
            {/* <Image src={m.area.crest} flag={20} height={20}/> */}
        </div> 
      )))}
        
        
    </AosComponents>
  )
}

export default DataMatchItem

