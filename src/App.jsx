import React, { useEffect, useState } from "react";

import {
    HashRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';


import PersonalArea from './pages/PersonalArea';
import ChooseDoctors from './pages/ChooseDoctors';


export default function App () {

  const [doctors, setDoctors] = useState(undefined);

  useEffect( () => {
    fetch('./src/json/yourDoctors.json').then((res) => res.json()).then( (data) => {
     setDoctors(data)
    });
  }, [])
  
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => <PersonalArea {...props} doctorsList={doctors} />} /> 
          <Route path='/profile/doctors' render={(props) => <ChooseDoctors {...props} doctorsList={doctors} />}/>
        </Switch>
      </Router>
    )
  }

  // component={<PersonalArea doctorsList={doctors} />}