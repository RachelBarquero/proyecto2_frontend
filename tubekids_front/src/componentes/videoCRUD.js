import React, { useState, useEffect } from 'react';

const VideoCRUD = () => {
  const [videos, setVideos] = useState([]);
  const [newVideo, setNewVideo] = useState({ name: '', link: '', user: '' });

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/videos');
      if (response.ok) {
        const data = await response.json();
        setVideos(data);
      } else {
        console.error('Error fetching videos:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleDelete = async (videoId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/videos?id=${videoId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchVideos();
      } else {
        console.error('Error deleting video:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newVideo),
      });
      if (response.ok) {
        setNewVideo({ name: '', link: '', user: '' });
        fetchVideos();
      } else {
        console.error('Error creating video:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating video:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewVideo({ ...newVideo, [name]: value });
  };

  return (
    <div>
      <h2>Videos</h2>
      <ul>
        {videos.map(video => (
          <li key={video._id}>
            <h3>{video.name}</h3>
            <p>{video.link}</p>
            <p>{video.user}</p>
            <button onClick={() => handleDelete(video._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={newVideo.name} placeholder="Video name" onChange={handleInputChange} />
        <input type="text" name="link" value={newVideo.link} placeholder="Video link" onChange={handleInputChange} />
        <input type="text" name="user" value={newVideo.user} placeholder="User" onChange={handleInputChange} />
        <button type="submit">Add Video</button>
      </form>
    </div>
  );
};

export default VideoCRUD;
