import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import logo from './assets/images/logo.png';
import './styles/bootstrap.min.css';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">OpenOceanStudio: Crew Applications</h1>
        </header>
        <Dashboard />
      </div>
    );
  }
}

export default App;
