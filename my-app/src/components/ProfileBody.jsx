import React from 'react'
import '../styles/ProfileBody.css'
import Youtube from './Youtube'


function ProfileBody(){

    const tabs = document.querySelectorAll('.tab_btn');
    const all_content = document.querySelectorAll('.content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(tab => {tab.classList.remove('active')});
            tab.classList.add('active');
            let line = document.querySelector('.line');
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLength + "px";
         
        all_content.forEach(content => {content.classList.remove('active')});
        all_content[index].classList.add('active');

        })

    });

    return(
        <>
            <div className="profilebody">
                <div className='banner'></div>
                <div className="contents">
                    <div className='profile'>
                        <div className="profile__topLeft">
                            <img src="https://files.kick.com/images/user/3259960/profile_image/conversion/4ad636d8-277e-471d-84aa-6feb52e15e21-fullsize.webp" alt=""/>
                            <div className="profile__TLD">
                                <h1>CYFI</h1>
                                <h3>0k followers</h3>
                            </div>
                        </div> 
                    </div>  

                    <div className="container">
                        <div className="tab_box">
                            <button className="tab_btn active">Home</button>
                            <button className="tab_btn">Content</button>
                            <button className="tab_btn">Community</button>
                            <button className="tab_btn">About</button>
                            <div className="line"></div>
                        </div>
                        <div className="content_box">
                            <div className="content active">
                                <Youtube/>
                            </div>
                            <div className="content">
                                <h2>Content</h2>
                                <p>ndbcbhbvfbvbvbvbvbbvbvwb</p>
                            </div>
                            <div className="content">
                                <h2>Community</h2>
                                <p>ndbcbhbvfbvbvbvbvbbvbvwb</p>
                            </div>
                            <div className="content">
                                <h2>About</h2>
                                <p>ndbcbhbvfbvbvbvbvbbvbvwb</p>
                            </div>
                        </div>

                    </div>  

                    <h1 className="hp1">Profile Body</h1>
                    
                </div>
            </div>
        </>
    )
} export default ProfileBody