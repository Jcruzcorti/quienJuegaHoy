import Image from 'next/image'
import React from 'react'
import DataMatchItem from './DataMatchItem'

function DataMatchList({newData}) {

  return (
    <>
        {newData.map((match)=>(
            <div key={match.id}>
              <DataMatchItem match={match}/>
            </div>
        ))}

        {/* {JSON.stringify(newData)} */}
    </>
  )
}

export default DataMatchList