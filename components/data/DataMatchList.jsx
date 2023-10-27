import Image from 'next/image'
import React from 'react'
import DataMatchItem from './DataMatchItem'
import styles from '../../app/page.module.css'


function DataMatchList({newData}) {

  return (
    
    <div className={styles.MatchContainer}> 
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