import Image from 'next/image'
import React from 'react'
import DataMatchItem from './DataMatchItem'
import styles from '../../app/page.module.css'
import { Typography } from '@mui/material'


function DataMatchList({newData}) {

   const emptyData = <Typography variant="h5" component="h5" pl={8}>
                      No hay partidos disponibles hoy
                    </Typography>
  return (
    
    <div className={styles.MatchContainer}>
      
          <Typography variant="h3" component="h3" className={styles.tittle}>
            ¿QUIEN JUEGA HOY?
          </Typography> 

          {
            newData
            ?newData.map((match)=>(
              <div key={match.id} >
                <DataMatchItem match={match}/>
              </div>
          ))
            :emptyData
          }

        {/* {JSON.stringify(newData)} */}
    </div>
  )
}

export default DataMatchList