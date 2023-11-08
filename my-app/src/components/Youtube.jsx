import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Youtube.css';

function Youtube(){
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');

  useEffect(() => {
    // Fetch the initial set of videos
    fetchVideos();
  }, []);

  const fetchVideos = () => {
    const apiKey = 'AIzaSyBHKb5g-GxqYIZyX01A8CQxHgPPYaLSGCM'; // Store the API key securely
    const channelId = '';
    const maxResults = 6;
    const maxResults = 4;
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&maxResults=${maxResults}&pageToken=${nextPageToken}`;

    axios.get(apiUrl)
      .then(response => {
        const newVideos = [...videos, ...response.data.items];
        setVideos(newVideos);
        setNextPageToken(response.data.nextPageToken);
      })
      .catch(error => {
        console.error('Error fetching data from YouTube:', error);
        // You can set an error state or display an error message to the user
      });
  };

  return (
    <div className='vid'>
      {videos.map(video => (
        <div key={video.id.videoId}>
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
            height={100}
            width={200}
          />
          <h5 className="b">{video.snippet.title}</h5>
        </div>
      ))}

      {nextPageToken && (
        <button className="b_btn" onClick={fetchVideos}>Load More</button>
      )}
    </div>
  );
}

export default Youtube;