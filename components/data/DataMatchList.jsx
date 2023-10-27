import Image from 'next/image'
import React from 'react'
import DataMatchItem from './DataMatchItem'
import styles from '../../app/page.module.css'
import { Typography } from '@mui/material'


function DataMatchList({newData}) {

  return (
    
    <div className={styles.MatchContainer}>
          <Typography variant="h3" className={styles.tittle}>
            ¿QUIEN JUEGA HOY?
          </Typography> 
        {newData.map((match)=>(
            <div key={match.id} >
              <DataMatchItem match={match}/>
            </div>
        ))}

        {/* {JSON.stringify(newData)} */}
    </div>
  )
}

export default DataMatchList