import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import HomeBody from '../components/HomeBody'

function Home(){
    return(
        <>
            <div>
                <NavBar/>
                <div className="app_main">
                    <SideBar/>
                    <HomeBody/>
                </div>
                
            </div>
        </>
    )
} export default Home