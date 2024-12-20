import React, { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css"
import "../css/Register.css"
import { Link } from 'react-router-dom'

const Register = () => {

    const [data, setData] = useState({ name: "", email: "", password: "", address: "" });

    const handleOnChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
    };

    return (
        <div className="flex items-center justify-center bg-slate-900 h-screen">
            <div className="bg-slate-800 p-10 rounded-lg shadow-md w-full max-w-lg">
                <h1 className="text-3xl font-bold text-white mb-8">Welcome to TechHaven</h1>
                <h2 className="text-gray-200 text-2xl mb-4">Create Account</h2>
                <form onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label htmlFor="name" className="text-gray-300">User Name</label>
                        <input type="name" id="name" value={data.name} name='name' onChange={handleOnChange} className="input-style focus:outline-none focus:shadow-outline" placeholder="Enter Name" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="text-gray-300">Email</label>
                        <input type="email" id="email" value={data.email} name='email' onChange={handleOnChange} className="input-style focus:outline-none focus:shadow-outline" placeholder="Enter Email" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="text-gray-300">Password</label>
                        <input type="password" id="password" value={data.password} name='password' onChange={handleOnChange} className="input-style focus:outline-none focus:shadow-outline" placeholder="Enter Password" />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="address" className="text-gray-300">Address</label>
                        <textarea id='address' value={data.address} name='address' onChange={handleOnChange} className='textarea-style focus:outline-none focus:shadow-outline' placeholder='Enter Address'></textarea>
                    </div>

                    <div className="flex items-center justify-between">
                        <button type="submit" className="btn-style focus:outline-none focus:shadow-outline"> Register </button>
                    </div>
                    <p className="text-gray-400 mt-4 text-center">Already Have One? <Link to="/login" className="text-blue-500">Login Here</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register