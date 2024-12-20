import React from 'react'
// import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar"
import Carousel from '../components/Carousel'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Carousel/>
            <h1>Home Screen</h1>
        </div>
    )
}

export default Home
