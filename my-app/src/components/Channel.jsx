import React from 'react'
import '../styles/Channel.css'
import { Link } from 'react-router-dom'

const Channel = ({avatar, name, followers}) => {
    return (
        <div className='channel'>
            <div className='channel_details'>

                <Link to="/Profile">
                    <img className='simage' src={avatar} alt="avatar"/>
                </Link>
                
                <p>
                    <Link className='links' to="/Profile">
                        {name}
                    </Link>
                </p>
            </div>
            <p className='pf'>{followers}</p>
        </div>
    )
}

export default Channel