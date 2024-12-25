import React from 'react'
import Carousel from '../components/Carousel'
import Sidebar from '../components/Sidebar'
import ItemGrid from '../components/ItemGrid'

const Home = () => {
    return (
        <div>
            <Sidebar />
            <Carousel />
            <ItemGrid />
        </div>
    )
}

export default Home
