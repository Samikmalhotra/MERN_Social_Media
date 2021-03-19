import { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing'

const App = () => {
    return(
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path = '/' component = {Landing} />
        </Fragment>
      </Router>
    );
}

export default App;
