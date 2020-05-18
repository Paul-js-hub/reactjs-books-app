import React, { Component } from "react";
import './register.css'
import Axios from "axios";

class Register extends Component {
  state = {
    email: "",
    password: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = () => {
    const {email, password} = this.state;
    Axios.post('http://localhost:80/api/register', {email,password},{
      headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    });
  }

  render() {
    return (
      <div className="form">
        <input name="email" placeholder="Enter your email" type="text" onChange={(e) => this.onChange(e)}/>
        <input name="password" placeholder="Enter password" type="password" onChange={(e) => this.onChange(e)}/>
        <button className="sumbit-btn" onClick={this.onSubmit}>Register</button>
      </div>
    );
  }
}

export default Register;