import Health from './Health';
import gut from './images/gut.jpg';
import heart from './images/heart.jpg';
import skin from './images/skin.jpg';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Health imageSource={gut} healthArea='Gut Health'></Health>
        <Health imageSource={heart} healthArea='Heart Health'></Health>
        <Health imageSource={skin} healthArea='Skin Health'></Health>
        <Health imageSource={gut} healthArea='Colon Health'></Health>
        <Health imageSource={skin} healthArea='Brain Health'></Health>
      </header>
    </div>
  );
}

export default App;
