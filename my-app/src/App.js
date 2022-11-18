import useState from 'react';

// import components
import Health from './Health';

// import images & data
import recipes from './data/recipes.js';
import gut from './images/gut.jpg';
import heart from './images/heart.jpg';
import skin from './images/skin.jpg';

// import styles
import './App.css';

function App() {
  const [juices, setJuices] = useState(recipes);

  return (
    <div className='App'>
      <header className='App-header'>
        <Health
          imageSource={gut}
          healthArea='Gut Health'
          juiceDetails={{}}
        ></Health>
        <Health
          imageSource={heart}
          healthArea='Heart Health'
          juiceDetails={{}}
        ></Health>
        <Health
          imageSource={skin}
          healthArea='Skin Health'
          juiceDetails={{}}
        ></Health>
        <Health
          imageSource={gut}
          healthArea='Colon Health'
          juiceDetails={{}}
        ></Health>
        <Health
          imageSource={skin}
          healthArea='Brain Health'
          juiceDetails={{}}
        ></Health>
      </header>
    </div>
  );
}

export default App;
