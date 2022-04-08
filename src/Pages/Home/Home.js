import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './home.scss'

const Home = () => {
    return (
        <>
        <div className="home">
            <Sidebar/>
            <div className="home-container">
                <Navbar/>
                home area
            </div>
        </div>
            
        </>
    )
}

export default Home
