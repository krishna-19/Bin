import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
        <div className="signup-container">
        <form className="signUpForm" onSubmit={this.handleSubmit}>
          <h2>Sign Up</h2>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label><br />
            <input type="text" id='firstName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label><br />
            <input type="text" id='lastName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label><br />
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label><br />
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor=" password">Confirm Password</label><br />
            <input type="password" id='new-password' onChange={this.handleChange} />
          </div>
          <div className="input-field"><br />
            <button className="submit">Sign Up</button>
          </div>
        </form>
         </div>
    )
  }
}

export default SignUp;