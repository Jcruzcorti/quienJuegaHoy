import Image from 'next/image'
import React from 'react'
import DataMatchItem from './DataMatchItem'
import styles from '../../app/page.module.css'


function DataMatchList({newData}) {



  return (
    <>
        {newData.map((match)=>(
            <div key={match.id}  className={styles.MatchContainer}>
              <DataMatchItem match={match}/>
            </div>
        ))}

        {/* {JSON.stringify(newData)} */}
    </>
  )
}

export default DataMatchList