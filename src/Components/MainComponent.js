import React from 'react'
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Profile from '../pages/Profile'
import Products from '../pages/Products'
import Sidebar from './Sidebar'

const MainComponent = () => {
    return (
        <div>
        <Router>
          <Sidebar />
          <Switch>
            <Route path='/' exact component={Profile}/>
            <Route path='/products' component={Products} />
          </Switch>
      </Router> 
        </div>
    )
}

export default MainComponent
