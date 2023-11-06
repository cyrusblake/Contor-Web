import React from 'react'
import '../styles/HomeBody.css'

function HomeBody(){
    return(
      
         <div className='homebody'>
            <div className='homebody-content'>
                <h1 className='hb1'>Home Body</h1>
                <div className="f-container">
                    <div className="tab_box">
                        <button className="tab_btn active">Home</button>
                        <button className="tab_btn">Youtube</button>
                        <button className="tab_btn">Twitch</button>
                        <button className="tab_btn">Instagram</button>
                        <button className="tab_btn">Twitter</button>
                        <button className="tab_btn">TikToc</button>
                        <div className="line"></div>
                    </div>
                    <div className="content_box">
                        <div className="content active">
                                
            
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
} export default HomeBody