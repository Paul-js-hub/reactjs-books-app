import React, { Component } from "react";
import './register.css'
import axios from "axios";
import { Link } from "react-router-dom";
import {
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
          <h1 className="header-registration">Register for an account</h1>
          <div className="social-container">
          <Link><FontAwesomeIcon icon={faGoogle} style={{ color: 'red' }} className="google-icon" /></Link>
          <Link><FontAwesomeIcon icon={faGithubAlt} style={{ color: 'gray' }} className="github-icon"/></Link>
          <Link><FontAwesomeIcon icon={faFacebook} style={{ color: 'blue' }} className="facebook-icon"/></Link>
          <Link><FontAwesomeIcon icon={faTwitter} style={{ color: 'light-blue' }} className="twitter-icon"/></Link>
          </div>
          <input class="form-input" name="email" placeholder="Enter your email" type="text" onChange={(e) => this.onChange(e)} />
          <input class="form-input" name="password" placeholder="Enter password" type="password" onChange={(e) => this.onChange(e)} />
          <button className="sumbit-btn" onClick={this.onSubmit}>Register</button>
        </div>
    );
  }
}

export default Register;