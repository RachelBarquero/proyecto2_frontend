import React, { useState } from 'react';

const VideoCrud = () => {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    user: localStorage.getItem("Id") // Asumiendo que obtienes el usuario de alguna manera
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Error creating playlist');
      }
      const data = await response.json();
      console.log('Playlist created successfully:', data);
      // Haz algo después de crear la playlist, como redirigir a otra página
    } catch (error) {
      console.error('Error creating playlist:', error);
      setError('Error creating playlist. Please try again later.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>Create Playlist</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name of video *" value={formData.name} onChange={handleChange} required />
        <input type="text" name="url" placeholder="URL" value={formData.url} onChange={handleChange} required />
        <button type="submit">Create Playlist</button>
      </form>
    </div>
  );
};

export default VideoCrud;