import React, { Component } from "react";
import './register.css'
import axios from "axios";

class Register extends Component {
  state = {
    email: "",
    password: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = () => {
    const { email, password } = this.state;
    axios.post(process.env.REACT_APP_API_URL +'/register', { email, password }, {
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    });
  }

  render() {
    return (
        <div class="form-container">
          <input class="form-input" name="email" placeholder="Enter your email" type="text" onChange={(e) => this.onChange(e)} />
          <input class="form-input" name="password" placeholder="Enter password" type="password" onChange={(e) => this.onChange(e)} />
          <button className="sumbit-btn" onClick={this.onSubmit}>Register</button>
        </div>
    );
  }
}

export default Register;