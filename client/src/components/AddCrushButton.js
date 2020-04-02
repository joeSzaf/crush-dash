import React from 'react'

class AddCrushButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: props.count ? props.crushed.count : '',
      error: ''
    }
  }

  onCountChange = (e) => {
    const count = e.target.value;
    this.setState(() => ({ count }));
  }

  onSubmit = (e) => {
    e.preventDefault()

    if (!this.state.count) {
      this.setState(() => ({ error: 'Please include a number of things crushed.' }))
    } else if (this.state.count < 1) {
      this.setState(() => ({ error: 'Please submit a number of things crushed above 1.' }))
    } else {
      this.props.onSubmit({
        count: parseInt(this.state.count)
      })
      this.setState(() => ({ error: '', count: 0 }))
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="number"
            placeholder="amount CRUSHED"
            value={this.state.count}
            onChange={this.onCountChange}
          />
          <button>CRUSH'D</button>
        </form>
      </div>
    )
  }
}

export default AddCrushButton
