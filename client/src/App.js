import { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Alert from './components/layout/Alert';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
// Redux
import {Provider} from 'react-redux';
import store from './store';

const App = () => {
    return(
      <Provider store = {store}>
        <Router>
          <Fragment>
            <Navbar />
            <Route exact path="/" component={Landing} />   
            <section className = 'container'>
              <Alert />
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
