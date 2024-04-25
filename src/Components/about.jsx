import React from 'react';

function About({ image, title, description }) {
  return (
    <div className="about-container">
        {/* Image */}

        {/* Title */}
        <h3 className="about-title">{title}</h3>

        {/* Description */}
        <p className="about-description">{description}</p>
    </div>
  );
}

export default About;
