import React, { useState, useEffect } from 'react';
import '../styles/InstagramPost.css'
import axios from 'axios';

function InstagramPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_ACCESS_TOKEN' with the actual Instagram User Token
    const accessToken = '';

    axios.get(`https://graph.instagram.com/v13.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`)
      .then((response) => {
        setPosts(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching Instagram posts:', error);
      });
  }, []);

  return (
    <div>
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <img className='insta-img' src={post.media_url} alt={post.caption} />
            {/* <p>{post.caption}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstagramPost;
