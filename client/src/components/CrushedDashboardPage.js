import React from 'react'
import CrushedStatsTile from './CrushedStatsTile'
import LogInForm from './LogInForm'
import { connect } from 'react-redux'

import { getSeshes } from '../actions/seshes'
// import { Link } from 'react-router-dom'


class ConnectorDashboardPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <p>Connector dashboard page</p>
        <p>Name: {this.props.user.name}</p>
        <LogInForm />
        <button onClick={() => {
          this.props.dispatch(getSeshes(this.props.user.token))
          .then(response => console.log(this.props))
        }
      }>Get seshes!</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
    sessions: state.seshInformation.seshes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSeshes: () => dispatch(getSeshes())
  }
}

export default connect(mapStateToProps)(ConnectorDashboardPage)
