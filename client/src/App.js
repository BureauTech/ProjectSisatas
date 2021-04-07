import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectParticipants from "./components/CreateAta/ProjectParticipants";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/createata">
            <ProjectParticipants />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
