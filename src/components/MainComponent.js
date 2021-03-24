import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Profile from '../pages/Profile';
import Products from '../pages/Products';
import Navbar from './Navbar';
import About from '../pages/About';

const MainComponent = () => {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Products} />
            <Route path='/profile' component={Profile} />
            <Route path='/about' component={About} />
          </Switch>
        </Router>
    </>
    )
}

export default MainComponent