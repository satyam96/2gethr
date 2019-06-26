import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div className="container">
          <div className="row">
          <div className="col-sm-7 logo-comp">
            <h3>Logo</h3>
            {/* <img src="image/logo.webp" className="logo-comp" alt="logo"/> */}
          </div>
          <div className="col-sm-5">
            <div className="row">
            <h4 className="right-btn">Home</h4>
            <h4 className="right-btn">About</h4>
            <h4 className="right-btn">Contact</h4>
            </div>
            
          </div>
          </div>
        </div>
        
      </header>
      <hr className="line"/>
      <section className="App-section">
        <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 left-side">
            <h3 className="center-name">2gethr</h3>
            <p>Coworking. Private Offices. Managed Offices.</p>
          </div>
          <div className="col-sm-8">
            <div className="right-side">
              
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default App;
