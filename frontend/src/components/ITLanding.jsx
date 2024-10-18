import React from 'react';
import Header from './Header'; 
import { useNavigate } from 'react-router-dom';
import '../css/style.css'; 

const ITLanding = () => {
  const navigate = useNavigate()

  return (
    <div>
        <h1>IT Landing</h1>
    </div>
    )
};

export default ITLanding;
