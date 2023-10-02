import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

function Home(){
    return(
        <>
            <div>
                <NavBar/>
                <div className='app_main'>
                    <SideBar/>
                </div>
                
            </div>
        </>
    )
} export default Home