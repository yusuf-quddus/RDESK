import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
        const timer = setTimeout(() => setError(''), 5000);
        return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
        const response = await axios.post('/api/login', { username, password });
        const { token } = response.data;
        localStorage.setItem('token', token);
        navigate('/admin/view/requests');
    } catch (err) {
        console.error('Login failed', err);
        setError(err.response?.data?.error || 'Login failed.');
    }
  };

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', 
               minHeight: '100vh', backgroundColor: '#f0f0f0', padding: '1rem' }}>
      <form onSubmit={handleSubmit}
            style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '8px', 
                     boxShadow: '0 2px 8px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }} >
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          Admin Login
        </h2>

        {error && (
          <p style={{ color: '#c00', marginBottom: '1rem', textAlign: 'center' }}>
            {error}
          </p>
        )}

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem', color: '#333' }} > Username </label>
          <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username"
                 required style={{ width: '100%', maxWidth: '300px', padding: '0.5rem', border: '1px solid #ccc', 
                                   borderRadius: '4px', color: '#000', boxSizing: 'border-box', }} />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', color: '#333' }} > Password </label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required
                 style={{ width: '100%', maxWidth: '300px', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px', 
                          color: '#000', boxSizing: 'border-box' }} />
        </div>

        <button type="submit" style={{ width: '100%', maxWidth: '300px', padding: '0.75rem', backgroundColor: '#007bff', color: '#fff', 
                                       border: 'none', borderRadius: '4px', cursor: 'pointer' }} >
            Sign In
        </button>
      </form>
    </div>
  );
}
