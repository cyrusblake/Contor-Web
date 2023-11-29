import React from 'react'
import '../styles/ProfileBody.css'
import Youtube from './Youtube'
// import InstagramPost from './InstagramPost';
import Kick from './Kick';



function ProfileBody(){

    const tabs = document.querySelectorAll('.tab_btn');
    const all_content = document.querySelectorAll('.content');
    const channelId = 'UCpMRD3Q64R97DpPrgEFRRVA';

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
                                {/* <Youtube channelId={channelId}/> */}

                                <div className='yt-section'>
                                    <div className="ytVideo">
                                        <iframe className='iv' width="284" height="200" src="https://www.youtube.com/embed/nWrc84fDPRY" 
                                        title="@MarkWiens shows us the world’s best street food…DO NOT WATCH IF HUNGRY!!" frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        allowfullscreen>
                                        </iframe>
                                        <h4>Video Title</h4>
                                    </div>
                                    
                                    <div className="ytVideo">
                                        <iframe className='iv' width="284" height="200" src="https://www.youtube.com/embed/f06SjPc_y1c" 
                                        title="@Eeowna explains the rise and reign of cozy gaming on YouTube" frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        allowfullscreen>
                                        </iframe>
                                        <h4>Video Title</h4>
                                    </div>
                                    
                                    <div className="ytVideo">
                                        <iframe className='iv' width="284" height="200" src="https://www.youtube.com/embed/bF424rbJYV0" 
                                        title="@AlexaRivera discusses filming with her family and her favorite collabs | YouTube Watch History" frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        allowfullscreen>
                                        </iframe>
                                        <h4>Video Title</h4>
                                    </div>
                                    
                                    <div className="ytVideo">
                                        <iframe className='iv' width="284" height="200" src="https://www.youtube.com/embed/8hBHQPrVVak" 
                                        title="@AyChristene tiers the creepy characters that are taking over YouTube" frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        allowfullscreen>
                                        </iframe>
                                        <h4>Video Title</h4>
                                    </div>

                                    <div className="ytVideo">
                                        <iframe className='iv' width="284" height="200" src="https://www.youtube.com/embed/VjJ9_qnsVrE" 
                                        title="Celebrate every wave, curl, kink, and coil with @WillOnAWhim, @BiancaReneeToday, and @NaturalReign" frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        allowfullscreen>
                                        </iframe> 
                                        <h4>Video Title</h4>
                                    </div>

                                 

 
                                </div>

                               
                            </div>
                            <div className='c-section'>
                                <h2>Kick</h2>
                                <div className='kick-section'>
                                    <Kick/>
                                    <Kick/>
                                    <Kick/>
                                    <Kick/>
                                    <Kick/>
                                </div>
                            </div>
                            <div className='c-section'>
                                <h2>Instagram</h2>
                                {/* <InstagramPost/> */}
                                
                            </div>
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
            </div>    
        </div>     
    )
} export default ProfileBody