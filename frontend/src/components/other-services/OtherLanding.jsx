import React from 'react';
import Header from '../assets/Header'; 
import { useNavigate } from 'react-router-dom';
import '../../css/style.css'; 

const OtherLanding = () => {
  const navigate = useNavigate()

  return (
    <div>
        <h1>Other Landing</h1>
    </div>
    )
};

export default OtherLanding;
