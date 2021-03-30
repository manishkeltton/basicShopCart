import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import Form from './loginPage/Form';
import Login from './loginPage/Login';

function App() {
  return (
    <>

        <Form />
        <Login />
      {/* <MainComponent /> */}
    </>
  );
}

export default App;
