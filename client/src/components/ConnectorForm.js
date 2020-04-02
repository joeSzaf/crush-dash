import React from 'react'

class ConnectorForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      customer: props.connector ? props.connector.customer : '',
      source: props.connector ? props.connector.source : '',
      namespaceNumber: props.connector ? props.connector.namespaceNumber : '',
      error: ''
    }
  }

  onCustomerChange = (e) => {
    const customer = e.target.value;
    this.setState(() => ({ customer }));
  }

  onSourceChange = (e) => {
    const source = e.target.value;
    this.setState(() => ({ source }));
  }

  onNamespaceNumberChange = (e) => {
    const namespaceNumber = e.target.value;
    this.setState(() => ({ namespaceNumber }));
  }

  onSubmit = (e) => {
    e.preventDefault()

    if (!this.state.customer || !this.state.source || !this.state.namespaceNumber) {
      this.setState(() => ({ error: 'Please provide customer acronym, source acronym, and namespace number' }))
    } else {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        customer: this.state.customer.toLowerCase(),
        source: this.state.source.toLowerCase(),
        namespaceNumber: parseInt(this.state.namespaceNumber)
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="customer"
            autoFocus
            value={this.state.customer}
            onChange={this.onCustomerChange}
          />
          <input
            type="text"
            placeholder="source"
            value={this.state.source}
            onChange={this.onSourceChange}
          />
          <input
            type="number"
            placeholder="namespaceNumber"
            value={this.state.namespaceNumber}
            onChange={this.onNamespaceNumberChange}
          />
          <button>Add connector</button>
        </form>
      </div>
    )
  }
}

export default ConnectorForm
