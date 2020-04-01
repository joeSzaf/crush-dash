import React from 'react'
import { connect } from 'react-redux'
import ConnectorForm from './ConnectorForm'
import { addConnector } from '../actions/connectors'

const AddConnectorPage = (props) => (
  <div>
    <h1>Add Connector</h1>
    <ConnectorForm
      onSubmit={(connector) => {
        props.dispatch(addConnector(connector))
        props.history.push('/')
      }}
    />
  </div>
)

export default connect()(AddConnectorPage)
