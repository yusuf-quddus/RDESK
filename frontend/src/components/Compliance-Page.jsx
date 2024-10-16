import React from 'react';
import Header from './Header'; 
import '../css/style.css'; 

const CompliancePage = ({ iso }) => {
  return (
    <div>
      <Header scrollToSection={() => {}} />

      <div
        className="compliance-page"
        style={{
          backgroundImage: `url(${iso.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="compliance-overlay">
          <div className="compliance-container">
            <h1 className="compliance-title">{iso.name}</h1>
            <p className="compliance-description">{iso.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompliancePage;
