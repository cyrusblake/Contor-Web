import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import ProfileBody from '../components/ProfileBody'

function Profile(){
    return(
        <>
            <div>
                <NavBar/>
                <div className="app_main">
                    <SideBar/>
                    <ProfileBody/>
                </div>
                
            </div>
        </>
    )
} export default Profile