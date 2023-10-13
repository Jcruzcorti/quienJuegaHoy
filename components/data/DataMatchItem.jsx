import React from 'react'

function DataMatchItem({match}) {
  return (
    <>
        <h2>{match.name}</h2>
        <h4>{match.venue}</h4>
        <p>{match.address}</p>
        {/* <Image src={match.crest} width={20} height={20}/> */}
    </>
  )
}

export default DataMatchItem