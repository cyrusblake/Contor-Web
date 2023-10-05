import React from 'react'
import '../styles/SignUp.css'

function SignUp (){

    function togglePopup(){
        document.getElementById("popup-2").classList.toggle("active");
    }
    return(
        <>
            <div className="popup" id="popup-2">
                <div className="overlay"></div>
                <div className="popup_content">
                    <div className="close-btn " onClick={togglePopup}>&times;</div>
                    <h1 className='sh1'>Join Contor Today</h1>
                    <div>
                        <div className='uu'>
                            <p>Username</p>
                            <input className="userI"/>
                        </div>
                        <div className='up'>
                            <p>Password</p>
                            <input className="userI"/>
                        </div>
                        <div className='sb'>
                            Sign Up
                        </div> 
                        
                    </div>
                    
                    <button className="b-btn">Already a Contor user? Log in</button>
                </div>
            </div>
            <h3 className="sh3" onClick={togglePopup}>Sign Up</h3>
        </>
    )
} export default SignUp