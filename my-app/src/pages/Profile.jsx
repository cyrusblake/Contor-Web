import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import ProfileBody from '../components/ProfileBody'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Profile(){

    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState('')
    const [username, setUsername] = useState('')
    // const navigate = useNavigate();
    
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:8081', {withCredentials: true, credentails: "include"})
        .then((res) => {
            if(res.data.Status === "Success"){
                setAuth(true)
                setUsername(res.data.username)
            } else {
                setAuth(false);
                setMessage(res.data.Error)
                
            }
            // console.log(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    }, [])

    const handleDelete = () => {
        axios.get('http://localhost:8081/logout', { withCredentials: true, credentails: "include"})
        .then(res => {
            location.reload(true);
        }).catch(err => console.log(err));
    }

    return(
        <>

            {
            auth ?
            <div>
                 <div className="navbar"> 

                {/* navbar left */}
                <div className="navbar_left">
                    <h1>
                        <Link className='llinks' to='/Home'>
                            Contor
                        </Link>
                    </h1>

                    {/* <h3 >
                        <Link className="browse" to=''>
                            Browse
                        </Link>
                    </h3> */}
                </div>

                {/* navbar center */}
                <div className="navbar_center">

                    <div className='navbar_clc'>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,-25" />
                        <span className="material-symbols-outlined">
                            search
                        </span> 
                    </div>
                    <input className="ph" style={{color: 'white'}} type="text" placeholder="Search" />{' '}
                </div>

                {/* navbar right */}
                <div className='navbar_right'>

                    <h3 onClick={handleDelete}>
                        <Link className='plinks' to=''>Log Out</Link>
                    </h3> 
                

                        {/* <LogIn className="cls"/> */}
                    
                        {/* <SignUp className="cls"/> */}
                </div>
                </div>
                
                <div className="app_main">
                    <SideBar/>
                    <ProfileBody/>
                </div>
                
            </div>
            :
            <div>
                <div className="navbar"> 

                {/* navbar left */}
                <div className="navbar_left">
                    <h1>
                        <Link className='llinks' to='/Home'>
                            Contor
                        </Link>
                    </h1>

                    {/* <h3 >
                        <Link className="browse" to=''>
                            Browse
                        </Link>
                    </h3> */}
                </div>

                {/* navbar center */}
                <div className="navbar_center">

                    <div className='navbar_clc'>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,-25" />
                        <span className="material-symbols-outlined">
                            search
                        </span> 
                    </div>
                    <input className="ph" style={{color: 'white'}} type="text" placeholder="Search" />{' '}
                </div>

                {/* navbar right */}
                <div className='navbar_right'>

                    <h3>
                        <Link className='plinks' to='/LogIn'>Log In</Link>
                    </h3> 
                    <h3> 
                        <Link className='plinks' to='/SignUp'>Sign Up</Link>
                    </h3>

                        {/* <LogIn className="cls"/> */}
                    
                        {/* <SignUp className="cls"/> */}
                </div>
                </div>
                <div className="app_main">
                    <SideBar/>
                    <ProfileBody/>
                </div>
                
            </div>

            }
            
        </>
    )
} export default Profile