import React, { Component } from "react";
import './register.css'

class Register extends Component {
  state = {
    email: "",
    password: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = () =>{

  }

  render() {
    return (
      <div className="form">
        <input name="email" placeholder="Enter your email" type="text" />
        <input name="password" type="password" placeholder="Enter password" />
        <button className="sumbit-btn">Register</button>
      </div>
    );
  }
}

export default Register;