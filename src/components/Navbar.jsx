import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="bg-gray-800 text-white">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="logo.svg" alt="Logo" className="w-10 h-10 mr-4" />
                        <h1 className="text-xl font-bold">Shopsy</h1>
                    </div>
                    <ul className="hidden md:flex space-x-4">
                        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                        <li><Link to="/product" className="hover:text-gray-300">Products</Link></li>
                        <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
                    </ul>
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link to="/login">Login</Link></button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link to="/register">Sign Up</Link></button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
