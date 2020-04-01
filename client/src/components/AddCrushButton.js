import React from 'react'

const AddCrushButton = (props) => (
  <button onClick={() => { props.handleClick() }}>
   +{props.amount}
  </button>
)

export default AddCrushButton
