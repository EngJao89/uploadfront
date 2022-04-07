import React from 'react';
import { FcPhotoReel } from 'react-icons/fc';
import './menu.css';

export default function Menu() {
  return (
    <nav className="navbar">
      <div className="menu">
        <div className="container">
          <FcPhotoReel size={80} />
            <span className="menu-link">Upload Moment</span>
            <span className="menu-link">Timeline</span>
            <span className="menu-link">Configuration</span>
        </div>
      </div>
    </nav>
  );
}