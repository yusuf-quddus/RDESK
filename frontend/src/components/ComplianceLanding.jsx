import React from 'react';
import Header from './Header'; 
import { useNavigate } from 'react-router-dom';
import '../css/style.css'; 

const ComplianceLanding = () => {
  const navigate = useNavigate()

  return (
    <div>
        <h1>Compliance Landing Page</h1>
    </div>
    )
};

export default ComplianceLanding;
