// LoadingScreen.js
import React, { useState, useEffect } from 'react';
import './LoadingScreen.css'; 

import LoadingScreen from 'react-loading-screen';

const LoadingScreens = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after 1 minute
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 1 minute (60 seconds * 1000 milliseconds)

    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`loading-screen ${isLoading ? 'show' : 'hide'}`}>
        <LoadingScreen
    loading={true}
    bgColor='#000'
    spinnerColor='#9ee5f8'
    textColor='#676767'
    logoSrc='/logo.png'
    text='Get Professnioal Website/App of your choice'
  >  </LoadingScreen>
    </div>
  );
};

export default LoadingScreens;
