'use client'

import React from 'react'
import styles from '../../app/page.module.css'
import { newDateArg } from '../date/DateArg';
import Image from 'next/image'
import AosComponents from '../aosComponents/AosComponents';


function DataMatchItem({match}) {



  return (
    <AosComponents >

      <div className={styles.MatchItem} >
            {/* <Image src={m.area.crest} width={20} height={20} alt='Country flag'/> */}
            <h2>{newDateArg(match.utcDate)} hs</h2>
            <h2>{match.homeTeam.shortName}</h2> 
            <h3>vs</h3>        
            <h2>{match.awayTeam.shortName}</h2> 
            <Image src={match.area.flag} width={20} height={20} alt='Flag league'/>
      </div>         
        
    </AosComponents>
  )
}

export default DataMatchItem

