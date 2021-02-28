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
import PrivatePage from './components/PrivatePage'

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/rules">
          <Rules />
        </Route>
        <Route path="/board">
            <Demo/>
        </Route>
        <Route path="/play">
            <PrivatePage/>
        </Route>   
     </Switch>
     </Router>
     </>
  );
}

export default App;
