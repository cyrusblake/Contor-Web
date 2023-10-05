import React from 'react'
import '../styles/LogIn.css'

function LogIn (){

    function togglePopup(){
        document.getElementById("popup-1").classList.toggle("active");
    }
    return(
        <>
            <div className="popup" id="popup-1">
                <div className="overlay"></div>
                <div className="popup_content">
                    <div className="close-btn " onClick={togglePopup}>&times;</div>
                    <h1 className='sh1'>Log in to Contor</h1>
                    <div>
                        <div className='uu'>
                            <p>Username</p>
                            <input className="userI"/>
                        </div>
                        <div className='up'>
                            <p>Password</p>
                            <input className="userI"/>
                        </div>
                        <div className='lb'>
                            Log In
                        </div> 
                    </div>
                    
                    <button className="b-btn">Don't have an account? Sign Up</button>
                </div>
            </div>
            <h3 className="ih3" onClick={togglePopup}>Log In</h3>
        </>
    )
} export default LogIn