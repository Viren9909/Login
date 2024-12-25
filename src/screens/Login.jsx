import React, { useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css"
import "../css/Login.css"
import { Link } from 'react-router-dom'

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });

    const handleOnChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
    };

    return (
        <div className="bg-gray-900 h-screen flex items-center justify-center">
            <div className="bg-gray-800 p-10 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold text-white mb-8">Welcome to Cypher</h1>
                <p className="text-gray-200 mb-8">Your Neighborhood, Your Market</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-gray-300">Email</label>
                        <input type="email" id="email" name='email' className="input-style" onChange={handleOnChange} placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="text-gray-300">Password</label>
                        <input type="password" id="password" name='password' className="input-style" onChange={handleOnChange} placeholder="Enter your password" />
                    </div>
                    <button type="submit" className="btn-style">Login</button>
                </form>
                <p className="text-gray-400 mt-4 text-center">Don't have an account? <Link to="/register" className="text-blue-500">Sign Up</Link></p>
                
                {/* for development purposes */}
                <p className="text-gray-400 mt-4 text-center">Go to home <Link to="/" className="text-blue-500">Home</Link></p>
            </div>
        </div>
    );
};

export default Login;