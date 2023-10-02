import React from 'react'
import '../styles/SideBar.css'
import Channel from './Channel'


function SideBar(){

    return(
        <>
            <div className="sidebar">
                <div className='sidebar_top'>
                    <h4>Recomended</h4>
                    <Channel avatar={"https://static-cdn.jtvnw.net/jtv_user_pictures/6458f34e-0b0d-4214-9ee3-84490c705075-profile_image-70x70.png"} name={"name"} followers={"0"}/>
                    <h4>Show More</h4>
                </div>
                
            </div>
        </>
    )
} export default SideBar