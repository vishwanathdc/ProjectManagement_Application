import React, { Component } from 'react'

class SignUp extends Component {
    state = {
       email:'',
       password:'',
       firstname:'',
       lastname:''
    }
    handleSubmit = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleChange = (e) => {
        e.preventDefault();
    }
  render() {
    return (
      <div className = "container">
        <form onSubmit={this.handleSubmit} className = "white">
            <h5 className="grey-text text-darken-3">Sign up</h5>
            <div className="input-field">
                <label htmlFor="firstname">First name</label>
                <input type="text" id="firstname" onChange= {this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="lastname">Last name</label>
                <input type="text" id="lastname" onChange= {this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange= {this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange= {this.handleChange}/>
            </div>
            <div className="button btn pink lighten-1 z-depth=0">Sign up</div>
        </form>
      </div>
    )
  }
}

export default SignUp
