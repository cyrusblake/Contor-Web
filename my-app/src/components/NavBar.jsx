import React from 'react'
import '../styles/NavBar.css'
import {Link} from 'react-router-dom'

function NavBar (){

    
    return (
        <>
            <div className="navbar"> 

                {/* navbar left */}
                <div className="navbar_left">
                    <h1>Contor</h1>
                </div>

                {/* navbar center */}
                <div className="navbar_center">

                    <div className='navbar_clc'>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,-25" />
                        <span className="material-symbols-outlined">
                            search
                        </span> 
                    </div>
                    <input style={{color: 'white'}} type="text" placeholder="Search" />{' '}
                </div>

                {/* navbar right */}
                <div className='navbar_right'>
                    <h3>
                        <Link className='links' to=''>
                            Log In
                        </Link>
                    </h3>
                    <h3> 
                        <Link className='links' to=''>
                            Sign Up
                        </Link>
                    </h3>

                </div>
                
             </div>
        </>
        
    )
}

export default NavBar