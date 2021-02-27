import React from 'react'
import Questions from './components/questionspage/Questions';
import QuestionCard from './components/questionspage/QuestionCard';
import Demo from './components/questionspage/Datatable/demo.js';
import Home from './components/homepage/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Rules from './components/rulespage/Rules';

import { Redirect } from 'react-router';

function App() {

  const [loggedin,setLoggedin] = React.useState(false);

  const handlemainlog = () => {
    setLoggedin(true);
  }

  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
            <Home onlog={handlemainlog} />
        </Route>
        <Route path="/rules">
          <Rules />
        </Route>

        <Route path="/play">
          <Questions/>
        </Route>
        <Route path="/card">
            <QuestionCard questiontitle='Try' question="try try" image="https://6jlvz1j5q3.csb.app/undraw_static_assets.svg" ans="A"/>
        </Route >
        <Route path="/board">
            <Demo/>
        </Route>

     </Switch>
     </Router>
     </>
  );
}

export default App;
