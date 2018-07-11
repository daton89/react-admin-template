import React from 'react'

export const customInput = props => {

  return(
    <div>
      <label>{props.label}</label>
      <input {...props.input} type={props.type}/>
    </div>
  )

}

export const customSelect = props => {

  return(
    <div>
      <label>{props.label}</label>
      <select {...props.input}>
        <option />
        <option value="1">option 1 </option>
        <option value="2">option 2 </option>
      </select>
    </div>
  )

}