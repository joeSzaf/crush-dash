import React from 'react'
import { connect } from 'react-redux'
import { logInUser } from '../actions/user'

class LogInForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  }

  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  }

  onSubmit = (e) => {
    e.preventDefault()

    if (!this.state.email || !this.state.password) {
      this.setState(() => ({ error: 'Please include an email and password.' }))
    } else {
      const payload = {
        email: this.state.email,
        password: this.state.password
      }
      this.props.dispatch(logInUser(payload))
      this.setState(() => ({ error: '', email: '', password: '' }))
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={this.onEmailChange}
          />
          <input
            type="text"
            placeholder="password"
            value={this.state.password}
            onChange={this.onPasswordChange}
          />
          <button>Log In</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: () => dispatch(logInUser())
  }
}

export default connect(mapDispatchToProps)(LogInForm)
