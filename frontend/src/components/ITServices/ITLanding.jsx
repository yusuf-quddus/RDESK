import React from 'react';
import Header from '../assets/Header'; 
import { useNavigate } from 'react-router-dom';
import '../../css/style.css'
import '../../css/bootstrap.min.css'

const ITLanding = () => {
  const navigate = useNavigate()

  return (
    <div>
        <h1>IT Landing</h1>
    </div>
    )
};

export default ITLanding;
