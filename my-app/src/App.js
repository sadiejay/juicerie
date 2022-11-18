import { React, useState } from 'react';

// import components
import Health from './Health';

// import data
import areas from './data/healthAreas.js';

// import styles
import './App.css';

function App() {
  // initialize State with healthAreas, and info content
  const [healthAreas, setHealthAreas] = useState(areas);

  // iterates through healthAreas and make a Health component for each area of health
  const healthComponents = [];
  healthAreas.forEach((healthArea) => {
    healthComponents.push(
      <Health
        imageSource={healthArea.img}
        healthArea={healthArea.area}
        juices={healthArea.juices}
      />
    );
  });

  // HOME PAGE: returns a header, custom-search-section, health-card-section, info-section, and footer
  return <div className='health-card-section'>{healthComponents}</div>;
}

export default App;
