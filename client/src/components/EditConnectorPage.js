import React from 'react'
import { connect } from 'react-redux'
import ConnectorForm from './ConnectorForm'
import { editConnector, removeConnector } from '../actions/connectors'

const EditConnectorPage = (props) => {
  return (
    <div>
      <ConnectorForm
        connector={props.connector}
        onSubmit={(connector) => {
          props.dispatch(editConnector(props.connector.id, connector))
          props.history.push('/')
        }}
      />
      <button onClick={() => {
        props.dispatch(removeConnector({ id: props.connector.id }))
        props.history.push('/')
      }}>Remove</button>
      <button onClick={() => {
        props.history.push('/')
      }}><strong>Back</strong></button>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    connector: state.connectors.find((connector) => connector.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditConnectorPage)
