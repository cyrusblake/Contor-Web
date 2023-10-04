import React from 'react'
import '../styles/SignUp.css'

function SignUp (){

    function togglePopup(){
        document.getElementById("popup-1").classList.toggle("active");
    }
    return(
        <>
            <div className="popup" id="popup-1">
                <div class="overlay"></div>
                <div class="popup_content">
                    <div className="close-btn " onclick="togglePopup()">&times;</div>
                        <h1>Title</h1>
                        <p>dnjdnvjnvnvnnvvnvjdvnnvnvnvnvnvnvn
                        dknjnvnvndvnnvnvndvnvnvnvnnvnnvnvnvnvnv
                        dknjnvnvndvnnvnvndvnvnvnvnnvnnvnvnvnvnv
                        dknjnvnvndvnnvnvndvnvnvnvnnvnnvnvnvnvnv
                         dknjnvnvndvnnvnvndvnvnvnvnnvnnvnvnvnvnv
                        </p>
                </div>
            </div>
            <button onclick="togglePopup()"> Show Popup</button>

        </>
    )
} export default SignUp