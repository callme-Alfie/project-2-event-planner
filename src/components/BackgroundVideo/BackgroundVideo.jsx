//import React from 'react';
import './BackgroundVideo.css'; // Import the CSS file for styling
import highlightVideo from './highlight-video.mp4';

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay muted loop className="background-video">
        <source src={highlightVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-video">
      
      
        <h1 className="trav">Traveling Highlights</h1>
        <p className="new">Your New Traveling Idea</p>
      </div>
    </div>
  );
};

export default BackgroundVideo;
