import Health from './Health';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Health imageSource= './src/images/gut.jpg' healthArea='Gut Health'></Health>
        {/* <Health imageSource='./images/heart.jpg' healthArea='Heart Health'></Health>
        <Health healthArea='Skin Health'></Health>
        <Health healthArea='Colon Health'></Health>
        <Health healthArea='Brain Health'></Health> */}
     

      </header>
    </div>
  
  );
}

export default App;
