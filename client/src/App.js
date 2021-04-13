import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pauta from "./components/CreateAta/Pauta";
import Data from "./components/ExibirAta/Data";

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
      { /* <Data/> */ }
    </div>
  );
}

export default App;
