import React from 'react'
import styles from '../../app/page.module.css'
import DataMatchItemTomorrow from './DataMatchItemTomorrow'



function DataMatchListTomorrow({newData}) {

   const emptyData = <h4 className={styles.emptyMatchText}>
                      No hay partidos disponibles mañana
                    </h4>
  return (
    <>
      <h1 className={styles.tittle}>
        ¿QUIEN JUEGA MAÑANA?
      </h1> 
      <h3  className={styles.hourTittle}>
        HORARIO ARGENTINA
      </h3>
     
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