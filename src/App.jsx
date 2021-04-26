import React from 'react';

import {
    HashRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';


import PersonalArea from './pages/PersonalArea';
import ChooseDoctors from './pages/ChooseDoctors';


export default function App () {
  
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={PersonalArea}/>
          <Route path='/profile/doctors' component={ChooseDoctors}/>
        </Switch>
      </Router>
    )
  }