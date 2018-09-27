import React from 'react';
import { Provider } from 'react-redux';
import DashboardContainer from './containers/DashboardContainer';
import store from './store';
import logo from './assets/images/logo.png';
import './styles/bootstrap.min.css';
import './styles/App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">OpenOceanStudio: Crew Applications</h1>
      </header>
      <DashboardContainer />
    </div>
  </Provider>
);

export default App;
