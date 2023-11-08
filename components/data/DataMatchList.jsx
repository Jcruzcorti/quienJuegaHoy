import React from 'react'
import DataMatchItem from './DataMatchItem'
import styles from '../../app/page.module.css'


function DataMatchList({newData}) {

   const emptyData = <h4 className={styles.emptyMatchText}>
                      No hay partidos disponibles hoy
                    </h4>
  return (  
    <>
        <h1 className={styles.tittle}>
          ¿QUIEN JUEGA HOY?
        </h1> 
        <h3 className={styles.hourTittle}>
            HORARIO ARGENTINA
        </h3>
      <div className={styles.MatchContainer}>    
        {
          newData && newData.length > 0
          ?newData.map((match)=>(
            <div key={match.id} >
              <DataMatchItem match={match}/>
            </div>
        ))
          :emptyData
        }
      </div>    
    </>
  )
}

export default DataMatchList