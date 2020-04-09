import React from 'react'
import { connect } from 'react-redux'
import AddCrushButton from './AddCrushButton'
import { addSesh, getSeshes } from '../actions/seshes'

class CrushedStatsTile extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getSeshes()
  }

  render() {
    console.log(this.props)
    const seshes = this.props.sessions.map(sesh => {
      return(
        <p>sesh!</p>
      )
    })

    return (
      <div>
      <h2>Items!</h2>
      {seshes}
        <AddCrushButton
          onSubmit={
            (payload) => {
              console.log(payload)
              this.props.dispatch(addSesh(payload)) }
          }
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sessions: state.seshInformation.seshes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSeshes: () => dispatch(getSeshes())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CrushedStatsTile)
