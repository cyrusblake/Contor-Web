import React from 'react'
import '../styles/SignUp.css'

function SignUp (){

    function togglePopup(){
        document.getElementById("popup-1").classList.toggle("active");
    }
    return(
        <>
            <div className="popup" id="popup-1">
                <div className="overlay"></div>
                <div className="popup_content">
                    <div className="close-btn " onClick={togglePopup}>&times;</div>
                        <h1>Title</h1>
                        <p>dnjdnvjnvnvnnvvnvjdvnnvnvnvnvnvnvn
                        dknjnvnvndvnnvnvndvnvnvnvnnvnnvnvnvnvnv
                        dknjnvnvndvnnvnvndvnvnvnvnnvnnvnvnvnvnv
                        dknjnvnvndvnnvnvndvnvnvnvnnvnnvnvnvnvnv
                         dknjnvnvndvnnvnvndvnvnvnvnnvnnvnvnvnvnv
                        </p>
                </div>
            </div>
            <h3 className="sh3" onClick={togglePopup}>Sign Up</h3>
        </>
    )
} export default SignUp