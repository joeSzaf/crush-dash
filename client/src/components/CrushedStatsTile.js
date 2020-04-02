import React from 'react'
import { connect } from 'react-redux'
import AddCrushButton from './AddCrushButton'
import { addCrushed } from '../actions/crushed'

const CrushedStatsTile = (props) => {
  return (
    <div>
      Pull ups crushed: {props.crushed}
      <AddCrushButton
        crushed={props.crushed}
        onSubmit={
          (payload) => {
            console.log(payload)
            props.dispatch(addCrushed(payload)) }
        }
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    crushed: state.crushed
  }
}

export default connect(mapStateToProps)(CrushedStatsTile)
