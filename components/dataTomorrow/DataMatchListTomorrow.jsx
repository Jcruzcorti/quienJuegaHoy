import React from 'react'
import styles from '../../app/page.module.css'
import { Typography } from '@mui/material'
import DataMatchItemTomorrow from './DataMatchItemTomorrow'



function DataMatchListTomorrow({newData}) {

   const emptyData = <Typography variant="h5" component="h5" pl={8} className={styles.emptyMatchText}>
                      No hay partidos disponibles mañana
                    </Typography>
  return (
    <>
      <Typography variant="h3" component="h3" className={styles.tittle}>
        ¿QUIEN JUEGA MAÑANA?
      </Typography> 
     
     <div className={styles.MatchContainer}>
        {
          newData
          ?newData.map((match)=>(
            <div key={match.id} >
              <DataMatchItemTomorrow match={match}/>
            </div>
        ))
          :emptyData
        }

      </div>
    
    </>
  )
}

export default DataMatchListTomorrow