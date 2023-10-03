import React from 'react'
import '../styles/ProfileBody.css'
import Youtube from './Youtube'


function ProfileBody(){
    return(
        <>
            <div className="profilebody">
                <div className='banner'></div>
                <div className="contents">

                    
                    <div className='profile'>
                        <div className="profile__topLeft">
                            <img src="https://files.kick.com/images/user/3259960/profile_image/conversion/4ad636d8-277e-471d-84aa-6feb52e15e21-fullsize.webp" alt=""/>
                            <div className="profile__TLD">
                                <h1>CYFI</h1>
                                <h3>0k followers</h3>
                            </div>
                        </div> 
                    </div>    
                    <h1 className="h1">Profile Body</h1>
                    <Youtube/>
                </div>
            </div>
        </>
    )
} export default ProfileBody