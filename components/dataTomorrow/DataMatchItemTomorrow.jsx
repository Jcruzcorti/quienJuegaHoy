'use client'

import React from 'react'
import styles from '../../app/page.module.css'
import { newDateArg } from '../date/DateArg';
import Image from 'next/image'
import AosComponents from '../aosComponents/AosComponents';
import { Typography } from '@mui/material';


function DataMatchItemTomorrow({match}) {


  return (
    <AosComponents >

      <div className={styles.MatchItem} >
            {/* <Image src={m.area.crest} width={20} height={20} alt='Country flag'/> */}
            <Typography variant="h6" component="h6" pl={13}>
              {newDateArg(match.utcDate)} hs
            </Typography>
            <Typography variant="h5" component="h5">
            {match.homeTeam.shortName}
            </Typography>
            <Typography variant="h6" component="h6">
            vs
            </Typography>
            <Typography variant="h5" component="h5">
            {match.awayTeam.shortName}
            </Typography>
            {/* <h2>{newDateArg(match.utcDate)} hs</h2> */}
            {/* <h2>{match.homeTeam.shortName}</h2> 
            <h3>vs</h3>        
            <h2>{match.awayTeam.shortName}</h2>  */}
            <Image src={match.area.flag} width={20} height={20} alt='Flag league'/>
      </div>         
        
    </AosComponents>
  )
}

export default DataMatchItemTomorrow

