import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import components
import Main from './Main';
import About from './About';
import Juices from './JuicesContainer';
import LogIn from './LogInContainer';

// import styles
import './App.css';
import logo from './logo.svg';
import JuicesContainer from './JuicesContainer';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className='logo-area'>
            <img src={logo} alt='logo' />
          </div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/juices'>Juices</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/login'>Log In</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/juices' element={<Juices />} />
          <Route path='/' element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
