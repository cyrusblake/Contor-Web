import React from 'react'
import '../styles/ProfileBody.css'
import Youtube from './Youtube'


function ProfileBody(){
    return(
        <>
            <div className="profilebody">
                <div className="contents">
                    <h1>Profile Body</h1>
                    <Youtube/>
                </div>
            </div>
        </>
    )
} export default ProfileBody