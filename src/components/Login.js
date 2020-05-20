import React, { Component } from 'react';
import axios from 'axios';
import './register.css';

export class Login extends Component {
    state = {
        email: '',
        password: '',
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value });
    };

    onSubmit = () => {
        const { email, password } = this.state;
        axios.post('http://localhost:80/api/login', { email, password }, {
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        });
    }
    render() {
        return (
            <div>
                <div className="form">
                    <input name="email" placeholder="Enter your email" type="text" onChange={(e) => this.onChange(e)} />
                    <input name="password" placeholder="Enter password" type="password" onChange={(e) => this.onChange(e)} />
                    <button className="sumbit-btn" onClick={this.onSubmit}>Login</button>
                </div>
            </div>
        );
    }
}

export default Login
