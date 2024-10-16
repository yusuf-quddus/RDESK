import React from 'react';
import Header from './Header'; // Import the Header component
import '../css/style.css'; // Your main CSS file

const CompliancePage = ({ iso }) => {
  return (
    <div>
      {/* Include the Header */}
      {/* Pass an empty function for scrollToSection, as scrolling is not needed here */}
      <Header scrollToSection={() => {}} />

      {/* The rest of the compliance page content */}
      <div
        className="compliance-page"
        style={{
          backgroundImage: `url(${iso.image})`, // Set the image from the data as background
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
