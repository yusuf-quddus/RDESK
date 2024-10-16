import React from 'react';
import Header from './Header'; // Import the Header component
import data from '../data.json'; // Assuming you are using the same data
import '../css/style.css'; // Main CSS

const CompliancePage = ({ iso }) => {
  return (
    <div>
      {/* Include the Header at the top */}
      <Header scrollToSection={() => {}} /> {/* You can adjust scrollToSection if needed */}

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
