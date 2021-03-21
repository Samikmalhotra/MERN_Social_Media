import { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
// Redux
import {Provider} from 'react-redux';
import store from './store';

const App = () => {
    return(
      <Provider>
        <Router>
          <Fragment>
            <Navbar />
            <Route exact path="/" component={Landing} />   
            <section className = 'container'>
              <Switch>
                <Route exact path = '/register' component={Register} />
                <Route exact path = '/login' component={Login} />
              </Switch>
            </section>  
          </Fragment>
        </Router>
      </Provider> 
    );
}

export default App;
