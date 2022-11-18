import Health from './Health';
import gut from './images/gut.jpg';
import heart from './images/heart.jpg';
import skin from './images/skin.jpg';
// import logo from './logo.svg';
import './App.css';

function App() {
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
