import React from 'react'

class AddCrushButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sesh: '',
      error: ''
    }
  }

  onSeshChange = (e) => {
    const sesh = e.target.value;
    this.setState(() => ({ sesh }));
  }

  onSubmit = (e) => {
    e.preventDefault()

    if (!this.state.sesh) {
      this.setState(() => ({ error: 'Please include a number of things crushed.' }))
    } else {
      this.props.onSubmit({
        sesh: this.state.sesh
      })
      this.setState(() => ({ error: '', sesh: '' }))
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="amount CRUSHED"
            value={this.state.sesh}
            onChange={this.onSeshChange}
          />
          <button>CRUSH'D</button>
        </form>
      </div>
    )
  }
}

export default AddCrushButton
