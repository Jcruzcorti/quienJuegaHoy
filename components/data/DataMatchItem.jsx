import React from 'react'
import styles from '../../app/page.module.css'

function DataMatchItem({match}) {
  return (
    <>
        <h2>{match.name}</h2>
        <h4>{match.venue}</h4>
        <p>{match.address}</p>
        {/* <p>{match.squad.name}</p> */}

        {/* {match.squad.map((i=>(
           <div key={i.id}>
                <p>{i.name}</p>
                <p>{i.position}</p>
           </div> 
        )))} */}

        {/* <Image src={match.crest} width={20} height={20}/> */}
        
        
        {/* {JSON.stringify(match)} */}
    </>
  )
}

export default DataMatchItem