import React from 'react'
import '../styles/SignUp.css'
import axios from 'axios'

function SignUp (){

    // const [values, setValues] = useState({
    //     username: '',
    //     password: '',
    // })

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios.post('http://localhost:8081/SignUp', values)
    //     .then(res => console.log(res))
    //     .then(err => console.log(err));
    // }



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
                    {/* <div onSubmit={handleSubmit}> */}
                        <div className='uu'>
                            <p>Username</p>
                            <input className="userI"/>
                            {/* <input className="userI" onChange={e => setValues({...values, username: e.target.value})}/> */}
                        </div>
                        <div className='up'>
                            <p>Password</p>
                            <input className="userI"/>
                            {/* <input className="userI" onChange={e => setValues({...values, password: e.target.value})}/> */}
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