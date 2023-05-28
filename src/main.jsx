import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './loader.css';

const Preloader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Simulating a delay of 4 seconds
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return (
      <div className="loader-container">
        <div className="loader">
          <span className="loader-text">cinematic</span>
          <span className="load"></span>
        </div>
      </div>
    );
  }
  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Preloader />
  </React.StrictMode>
);
