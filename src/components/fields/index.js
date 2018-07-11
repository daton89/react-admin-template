import React from 'react'

export const customInput = props => {
  const {label, input, type, errors, meta} = props
  return(
    <div>
      <label>{label}</label>
      <input {...input} type={type}/>
      {(meta.error && meta.touched) && (
        <div style={{color: 'red'}}>{meta.error}</div>
      )}
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