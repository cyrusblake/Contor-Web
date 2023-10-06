import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/LogIn.css'

function LogIn (){

    return(
        <>
            <div className="popup" id="popup-1">
                
                <div className="popup_content">
                    <h1 className='ih1'>Log in to Contor</h1>
                    <div>
                        <div className='uu'>
                            <p>Username</p>
                            <input className="userI" placeholder='Enter Username'/>
                        </div>
                        <div className='up'>
                            <p>Password</p>
                            <input className="userI" placeholder='Enter Password'/>
                        </div>
                        <div className='lb'>Log In</div> 
                    </div>

                 
                    
                    <Link to='/SignUp' className="b-btn">Don't have an account? Sign Up</Link>
                    
                    
                </div>
            </div>
        </>
    )
} export default LogIn