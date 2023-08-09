/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0',
};

const headingStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#333',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
};

function LandingPage() {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Coming Soon!</h1>
    </div>
  );
}

export default LandingPage;
