import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topics from "./components/CreateAta/Topics";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/createata">
            <Topics />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
