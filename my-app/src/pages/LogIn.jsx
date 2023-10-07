import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/LogIn.css'
import axios from 'axios'

function LogIn (){

    const [values, setValues] = useState({
        username: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/LogIn', values)
        .then((res) => {
            if(res.data.Status === "Success"){
                navigate('/');
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
            <div className="popup" id="popup-1">
                <div className="popup_content">
                    <h1 className='ih1'>Log in to Contor</h1>
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
                        <button type="submit" className='lb'>Log In</button> 
                    </form>
                    <Link to='/SignUp' className="b-btn">Don't have an account? Sign Up</Link>
                </div>
            </div>
        </>
    )
} export default LogIn