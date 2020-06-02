import React, { Component } from 'react';
import axios from 'axios';
import '../Register/index';
import './login.css';

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
        axios.post(process.env.REACT_APP_API_URL +'/login', { email, password }, {
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
            <div className="content">
                <div className="form">
                    <h2>Login Here</h2>
                    <label>
                        <span>Email</span>
                    <input name="email" placeholder="Enter your email" type="text" onChange={(e) => this.onChange(e)} />
                    </label>
                    <label>
                        <span>Password</span>
                    <input name="password" placeholder="Enter password" type="password" onChange={(e) => this.onChange(e)} />
                    </label>
                    <button className="submit" type = "button" onClick={this.onSubmit}>Submit</button>
                    <p className="forgot-pass">Forgot Password?</p>
                    </div>
                </div>
            
        );
    }
}

export default Login
