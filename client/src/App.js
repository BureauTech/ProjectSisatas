import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pauta from "./components/CreateAta/Pauta";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/createata">
            <Pauta />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
