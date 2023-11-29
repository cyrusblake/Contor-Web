// Youtube.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Youtube = ({ channelId }) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/youtube/${channelId}`);
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
        // setError('Error fetching data. Please try again later.');
      }
    };

    fetchData();
  }, [channelId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            <iframe
              title={video.snippet.title}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p>{video.snippet.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Youtube;
