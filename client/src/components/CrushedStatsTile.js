import React from 'react'
import { connect } from 'react-redux'
import AddCrushButton from './AddCrushButton'
import { addCrushed } from '../actions/crushed'

const CrushedStatsTile = (props) => {
  return (
    <div>
      {props.crushed}
      <AddCrushButton
        amount={1}
        handleClick={
          () => { props.dispatch(addCrushed({ amount: 1 })) }
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
