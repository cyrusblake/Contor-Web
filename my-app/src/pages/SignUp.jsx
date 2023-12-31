import React, { useState } from "react";
import '../styles/SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavBar from "../components/NavBar";

function SignUp (){

    const [values, setValues] = useState({
        username: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/SignUp', values, { withCredentials: true, credentails: "include"})
        .then((res) => {
            if(res.data.Status === "Success"){
                navigate('/LogIn');
            } else {
                alert("Error");
            }
            // console.log(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
        // .then(res => console.log(res))
        // .then(err => console.log(err));
    }


    return(
        <>
            {/* <NavBar/> */}
            <div className="popup" id="popup-2">
                <div className="popup_content">
                    <h1 className='sh1'>Join Contor Today</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='uu'>
                            <p>Username</p>
                            <input className="userI" placeholder='Enter Username'  
                            onChange={e => setValues({...values, username: e.target.value})}/>
                        </div>
                        <div className='up'>
                            <p>Password</p>
                            <input className="userI" placeholder='Enter Password' 
                            onChange={e => setValues({...values, password: e.target.value})}/>
                        </div>
                        <button type="submit" className='sb'>Sign Up</button>
                    </form>
                    <Link to='/LogIn' className="b-btn">Already a Contor user? Log in</Link>
                </div>
            </div>
        </>
    )
} export default SignUp