import React, { useState } from "react";
import "./style.css";
import log from '../../assets/login.svg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        // Check if email and password are not empty
      
        axios
            .post('https://reqres.in/api/login', {
                email,
                password,
            })
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    const token = response.data.token; 
                    localStorage.setItem('token', token);
                    alert('Login Successfully');
                    navigate('/overview');
                } else {
                    setErrorMessage('Login failed. Please check your credentials.');
                }
            })
            .catch((error) => {
                console.error('Login error:', error);
                setErrorMessage('An error occurred during login. Please try again later.');
            });
    };
    return (
        <div className="login">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <div className="frame" />
                    <div className="div">
                        <div className="frame-2">
                            <div className="frame-3">
                                <div className="frame-4">
                                    <div className="text-wrapper">Login</div>
                                    <div className="text-wrapper-2">Enter only Reqres Credential to login</div>
                                </div>
                                <div className="frame-5">
                                    <div className="text-wrapper-3">Email</div>
                                    <input
                                      style={{ width: '400px', padding: '20px' }} 
                                        placeholder="Email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <div className="text-wrapper-3">Password</div>
                                    <input
                                     style={{ width: '400px', padding: '20px' }} 
                                        placeholder="Password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <button onClick={handleLogin} className="div-wrapper">
                            <div className="text-wrapper-5">Login</div>
                        </button>
                    </div>
                    <div className="frame-7">
                        <p className="welcome-to-student">
                            <span className="span">
                                Welcome to <br />
                            </span>
                            <span className="text-wrapper-6">Music School</span>
                        </p>
                        <p className="p">Login to access your account</p>
                    </div>
                    <img className="element-copy" alt="Element copy" src={log} />
                </div>
            </div>
        </div>
    );
};
