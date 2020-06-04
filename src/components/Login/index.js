import React, { Component } from 'react';
import axios from 'axios';
import '../Register/index';
import './login.css';
import { Link } from "react-router-dom";
import {
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Login extends Component {
    state = {
        email: '',
        password: '',
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = () => {
        const { email, password } = this.state;
        axios.post(process.env.REACT_APP_API_URL + '/login', { email, password }, {
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })
            .then((res) => {
                const token = res.data.accessToken;
                localStorage.setItem('accessToken', token);
            });
    }
    render() {
        return (
            <div className="form-container">
                <div className="form-user-details">
                    <h1 className="header-tag">Login Here</h1>
                    <div className="social-container">
                        <Link><FontAwesomeIcon icon={faGoogle} className="google-icon" /></Link>
                        <Link><FontAwesomeIcon icon={faGithubAlt} className="github-icon" /></Link>
                        <Link><FontAwesomeIcon icon={faFacebook} className="facebook-icon" /></Link>
                        <Link><FontAwesomeIcon icon={faTwitter} className="twitter-icon" /></Link>
                    </div>
                    <span className="email-span">or use your email account</span>
                    <input className="form-input" name="email" placeholder="Enter your email" type="text" onChange={(e) => this.onChange(e)} />
                    <input className="form-input" name="password" placeholder="Enter password" type="password" onChange={(e) => this.onChange(e)} />
                    <button className="submit-btn" onClick={this.onSubmit}>Submit</button>
                    <p className="forgot-pass">Forgot Password?</p>
                </div>
            </div>

        );
    }
}

export default Login
