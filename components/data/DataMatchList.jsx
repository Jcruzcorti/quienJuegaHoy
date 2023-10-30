import React from 'react'
import DataMatchItem from './DataMatchItem'
import styles from '../../app/page.module.css'
import { Typography } from '@mui/material'


function DataMatchList({newData}) {

   const emptyData = <Typography variant="h5" component="h5" pl={8} className={styles.emptyMatchText}>
                      No hay partidos disponibles hoy
                    </Typography>
  return (  
    <>
        <Typography variant="h3" component="h3" className={styles.tittle}>
          ¿QUIEN JUEGA HOY?
        </Typography> 
      <div className={styles.MatchContainer}>    
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
    </>
  )
}

export default DataMatchList