import React from 'react'
import HRP from "../components/homepage_res_preview"

function general_res_preiview() {
    const array = [...Array(20)]
    const view = < HRP foodImage="/image_for_homepage_res_preview.jpeg" />
    
    return (
        <div className='grid grid-cols-3'>
          {array.map(_=><div>{view}</div>)}
        </div>
      )

}

export default general_res_preiview