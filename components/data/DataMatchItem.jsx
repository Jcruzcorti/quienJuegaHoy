'use client'

import React from 'react'
import styles from '../../app/page.module.css'
// import { newDateArg } from '../date/DateArg';
import Image from 'next/image'
import AosComponents from '../aosComponents/AosComponents';
import { Typography } from '@mui/material';


function DataMatchItem({match}) {
 

    const newDateArg = () => {
      const dateArgentina= new Date (match.utcDate).toLocaleTimeString('es-AR', {
        hour: '2-digit',
        minute: '2-digit',
      });
      return dateArgentina
    }

  // const newDateArg = () => {
  //   const fechaEnUTC = new Date(match.utcDate); 
  //   const fechaFormateada = fechaEnUTC.toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });
  //   return fechaFormateada
  // }


  return (
    <AosComponents >
      <div className={styles.MatchItem} >
        <Typography variant="h6" component="h6" className={styles.h6Date}>
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

export default DataMatchItem

