import React from 'react'

function inputField(props) {
  return (
    <input
    type="text"
    placeholder= {props.placeholder}
    className="px-5 py-1 w-[240px] text-white rounded bg-slate-600"
  />
  )
}

export default inputField