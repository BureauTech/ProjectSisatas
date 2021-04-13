import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pauta from "./components/CreateAta/Pauta";
import Data from "./components/ExibirAta/Data";
import Register from "./components/RegisterUser/Register";
import CreateAta from "./pages/CreateAta/CreateAta";
import AtaHeader from "./components/CreateAta/AtaHeader";
import Menu from "./components/Menu/Menu"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/registeruser">
            <Register/>
          <Route path="/createata">
            <CreateAta />
          </Route>
          <Route path="/">
            <Menu />
          </Route>
        </Switch>
      </Router>
      { /* <Data/> */ }
    </div>
  );
}
export default App;