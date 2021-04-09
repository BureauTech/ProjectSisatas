import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pauta from "./components/CreateAta/Pauta";
import Filtros from "./components/ExibirAta/Filtros";

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
      <Filtros/>
    </div>
  );
}

export default App;
