import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import BusinessMaps from './components/BusinessMaps';
import Router from './Router'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  return (
    // <div className="App">
    //     <Navigation />
    //   <p>Welcome</p>
    //   <Login />
    // <Dashboard />
    // <BusinessMaps />
    // </div>
    <BrowserRouter>
    <Provider store={store}>
      <Router />
    </Provider>
    </BrowserRouter>
  );
}

export default App;
