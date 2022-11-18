import { React, useState } from 'react';

// import components
import Health from './Health';
import Info from './Info';

// import data
import areas from '../data/healthAreas.js';

// import styles
import '../App.css';

function Main() {
  // initialize State with healthAreas, and info content
  const [healthAreas, setHealthAreas] = useState(areas);

  // iterates through healthAreas and make a Health component for each area of health
  const healthComponents = [];
  healthAreas.forEach((healthArea, i) => {
    healthComponents.push(
      <Health
        key={i}
        imageSource={healthArea.img}
        healthArea={healthArea.area}
        juices={healthArea.juices}
      />
    );
  });

  // MAIN SECTION: custom-search-section, health-card-section, info-section
  return (
    <div className='home'>
      <div className='custom-search'>
        <input type='text' placeholder='Search..' />
      </div>
      <div className='health-card-section'>{healthComponents}</div>
      <div className='info-section'>
        <Info />
      </div>
    </div>
  );
}

export default Main;
