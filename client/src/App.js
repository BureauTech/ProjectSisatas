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
          <Route path="/exibir">
            <Filtros />
          </Route>
        </Switch>
        <Link to="/exibir">Exibir</Link>
        <Link to="/home">Home</Link>
      </Router>
    </div>
  );
}

export default App;
