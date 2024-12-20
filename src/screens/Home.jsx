import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar"

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>Home Screen</h1>
            <Link to="/login">login</Link>
        </div>
    )
}

export default Home
