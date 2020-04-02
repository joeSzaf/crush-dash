import React from 'react'
import { connect } from 'react-redux'
import ConnectorListItem from './ConnectorListItem'

const ConnectorList = (props) => {
  const connectors =
    props.connectors.map((connector, index) => {
      return <ConnectorListItem
        key={index}
        customer={connector.customer}
        source={connector.source}
        namespaceNumber={connector.namespaceNumber}
        id={connector.id}
      />
    })

  return (
    <div>
      <h1> Connector List</h1>
      {connectors}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    connectors: state.connectors
  }
}


export default connect(mapStateToProps)(ConnectorList)
