import React from 'react'

function DataMatchItem({match}) {
  return (
    <>
        <h3>{match.name}</h3>
        <p>{match.venue}</p>
        <p>{match.address}</p>
        {/* <Image src={match.crest} width={20} height={20}/> */}
    </>
  )
}

export default DataMatchItem