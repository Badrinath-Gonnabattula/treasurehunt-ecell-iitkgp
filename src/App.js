import Questions from './components/QuestionsPage/Questions';
import QuestionCard from './components/QuestionsPage/QuestionCard';
import Home from './components/homepage/home'
import RulesCard from './components/homepage/RulesCard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Congratulations from './components/QuestionsPage/Congratulations';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/play">
            <Questions/>
        </Route>
<<<<<<< Updated upstream
        <Route path="/rules">
          <RulesCard />
          </Route>
        <Route path="/anim">
            <Congratulations/>
        </Route>
        <Route path="/card">
            <QuestionCard questiontitle='Try' question="try try" image="https://6jlvz1j5q3.csb.app/undraw_static_assets.svg" ans="A"/>
        </Route>
     </Switch>
     </Router>
||||||| constructed merge base
      </Switch>
    </Router>
=======
        <Route path="/card">
            <QuestionCard questiontitle='Try' question="try try" image="https://6jlvz1j5q3.csb.app/undraw_static_assets.svg" ans="A"/>
        </Route>
      </Switch>
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;
