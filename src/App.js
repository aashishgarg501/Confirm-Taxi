import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import OutstationRides from './Pages/OutstationRides';
const App = () => {
  return (
    <>
      {/* <div className="outstation-rides">
        <header className="header">
          <div className="logo">inDrive Outstation</div>
          <div className="login-container">
            <button className="lang-switch">En</button>
            <button className="login-btn">Log in</button>
          </div>
        </header>
        <main>
          <div
            className="hero"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h1>Outstation rides at <span>your</span> fare</h1>
            <p>Explore hundreds of intercity routes. Suggest your price and choose one of our verified drivers</p>
          </div>
          <div className="ride-form">
            <div className="ride-options">
              <button className="ride-option active">Private ride</button>
              <button className="ride-option">Shared ride</button>
              <button className="ride-option">One way</button>
              <button className="ride-option">Round-trip</button>
            </div>
            <div className="ride-inputs">
              <input type="text" placeholder="From" />
              <input type="text" placeholder="To" />
              <input type="datetime-local" placeholder="When" />
              <input type="number" placeholder="Passengers" min="1" />
              <input type="text" placeholder="Offer your fare" />
              <button className="find-driver">Find a driver</button>
            </div>
          </div>
          <div className="popular-routes">
            <div className="route">Mumbai → Pune</div>
            <div className="route">Pune → Mumbai from 1850 INR</div>
            <div className="route">Lucknow → Kanpur from 1200 INR</div>
          </div>
        </main>
      </div> */}
      <OutstationRides />
    </>
  )
}

export default App