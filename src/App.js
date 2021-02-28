import React from 'react'
import Questions from './components/QuestionsPage/Questions';
import QuestionCard from './components/QuestionsPage/QuestionCard';
import Demo from './components/QuestionsPage/Datatable/demo.js';
import Home from './components/homepage/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Rules from './components/RulesPage/Rules';

import { Redirect } from 'react-router';

function App() {

  const [loggedin,setLoggedin] = React.useState(false);

  const [userdata,setUserdata] = React.useState({"details":'',"success":false});

  const handlemainlog = () => {
    setLoggedin(true);
    let data = sessionStorage.getItem('userdata');
    data = JSON.parse(data);

    setUserdata({...userdata,"details":data.details,"success":data.success});

    
    
  }

  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
            {loggedin ? <Redirect to='/play'/> : <Home onlog={handlemainlog} />}
        </Route>
        <Route path="/rules">
          <Rules />
        </Route>
        <Route path="/board">
            <Demo/>
        </Route>
        {loggedin ? <Route path="/play">
          <Questions email={userdata.details.email_iit}/>
        </Route> : <h1>Oops</h1>}
        
        <Route path="/card">
            <QuestionCard questiontitle='Try' question="try try" image="https://6jlvz1j5q3.csb.app/undraw_static_assets.svg" ans="A"/>
        </Route >
        

     </Switch>
     </Router>
     </>
  );
}

export default App;
