import Questions from './components/QuestionsPage/Questions';
import Home from './components/homepage/home'
import RulesCard from './components/homepage/RulesCard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
        <Route path="/rules">
          <RulesCard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
