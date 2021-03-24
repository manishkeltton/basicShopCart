import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './pages/Products';
import Profile from './pages/Profile';
import About from './pages/About';
import MainComponent from './components/MainComponent';
import Form from './loginPage/Form';
import Login from './loginPage/Login';

function App() {
  return (
    <>
      <MainComponent />
        {/* <Form />
        <br />
        <Login /> */}
    </>
  );
}

export default App;
