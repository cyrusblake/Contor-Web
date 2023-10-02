import React from 'react'
import '../styles/Channel.css'
import { Link } from 'react-router-dom'

const Channel = ({avatar, name, followers}) => {
    return (
        <div className='channel'>
            <div className='channel_details'>
                <img src={avatar} alt="avatar"/>
                <p>
                    <Link className='' to="">
                        {name}
                    </Link>
                </p>
            </div>
            <p>{followers}</p>
        </div>
    )
}

export default Channel