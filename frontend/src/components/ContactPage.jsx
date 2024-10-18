import React from 'react';
import Header from './Header'; 
import { useNavigate } from 'react-router-dom';
import '../css/style.css'; 

const ContactPage = () => {
  const navigate = useNavigate()

  return (
    <div>
        <h1>Contact Page</h1>
    </div>
    )
};

export default ContactPage;
