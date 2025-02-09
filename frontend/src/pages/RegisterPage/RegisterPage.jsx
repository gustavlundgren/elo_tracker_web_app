import React, { useEffect, useState } from 'react';
import { new_user } from "../../api/index.js";
import { useNavigate } from 'react-router';
import { auth } from '../../api/firebase-config.js';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();  // Prevent the form from submitting the traditional way
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Email:', email);

        try {
            await new_user(username, email, password);
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (auth.currentUser) {
            navigate("/")
        }
    })

    return (
        <div className="register-page">
            <h1 style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Register</h1>
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="register-button">
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;
