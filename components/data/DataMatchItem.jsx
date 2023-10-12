import { matchesMiddleware } from 'next/dist/shared/lib/router/router'
import React from 'react'



function DataMatchItem({data}) {



  return (
    <>
        {/* {Object.entries(data).map(([key, value])=>(
            <div key={matchIds}>
                <p>{matches}</p>
            </div>
        ))} */}

        {JSON.stringify(data)}
    </>
  )
}

export default DataMatchItem