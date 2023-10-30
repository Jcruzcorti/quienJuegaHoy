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
            <Typography variant="h6" component="h6" pl={8} className={styles.h6Date}>
              {newDateArg(match.utcDate)} hs
            </Typography>
            <Typography variant="h5" component="h5" className={styles.h5Home}>
              {match.homeTeam.shortName}
            </Typography>
            <Typography variant="h6" component="h6" className={styles.h6Vs}>
              vs
            </Typography>
            <Typography variant="h5" component="h5" className={styles.h5Away}>
              {match.awayTeam.shortName}
            </Typography>
            <Image src={match.area.flag} width={20} height={20} alt='Flag league'/>
      </div>         
        
    </AosComponents>
  )
}

export default DataMatchItemTomorrow

