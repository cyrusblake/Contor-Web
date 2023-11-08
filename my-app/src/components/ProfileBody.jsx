import React from 'react'
import '../styles/ProfileBody.css'
import Youtube from './Youtube'
import InstagramPost from './InstagramPost';



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
        <div className="profilebody">
                <div className='banner'></div>
                <div className="contents">
                    <div className='profile'>
                        <div className="profile__topLeft">
                            <img src="https://th.bing.com/th/id/R.fa0ca630a6a3de8e33e03a009e406acd?rik=UOMXfynJ2FEiVw&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2ff%2fa%2f0%2fc%2f1434020125875430376profile.png&ehk=73x7A%2fh2HgYZLT1q7b6vWMXl86IjYeDhub59EZ8hF14%3d&risl=&pid=ImgRaw&r=0" alt=""/>
                            <div className="profile__TLD">
                                <h1>name</h1>
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
                                <div className='c-section'>
                                    <h2>YouTube</h2>
                                    <Youtube/>
                                </div>
                                <div className='c-section'>
                                    <h2>Instagram</h2>
                                    <InstagramPost/>
                                </div>
                            </div>
                            <div className="content">
                                <Youtube/>
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
                    
                </div>    
            </div>
          
    )
} export default ProfileBody