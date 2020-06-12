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
import {  toast } from 'react-smart-toaster';


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
    axios.post(process.env.REACT_APP_API_URL + '/register', { email, password }, {
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    })

    .then((response)=>{
      const message = response.data.message;
      toast.success(message);
      if(message === 'Account registered successfully'){
        this.props.history.push('/login')
      }
    })
    .catch((err)=>{
      const message = err.response.data.message;
      toast.error(message);
    })
  }

  render() {
    return (
      <div className="form-container">
        <div className="form-user-details">
          <h1 className="header-tag">Register for an Account</h1>
          <div className="social-container">
            <Link><FontAwesomeIcon icon={faGoogle} className="google-icon" /></Link>
            <Link><FontAwesomeIcon icon={faGithubAlt} className="github-icon" /></Link>
            <Link><FontAwesomeIcon icon={faFacebook} className="facebook-icon" /></Link>
            <Link><FontAwesomeIcon icon={faTwitter} className="twitter-icon" /></Link>
          </div>
          <span className="email-span">or use your email for registration</span>
          <input className="form-input" name="email" placeholder="Enter your email" type="text" onChange={(e) => this.onChange(e)} />
          <input className="form-input" name="password" placeholder="Enter password" type="password" onChange={(e) => this.onChange(e)} />
          <button className="submit-btn" onClick={this.onSubmit}>Register</button>
        </div>
      </div>
    );
  }
}

export default Register;