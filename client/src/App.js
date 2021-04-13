import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateAta from "./pages/CreateAta/CreateAta";
import AtaHeader from "./components/CreateAta/AtaHeader";
import Menu from "./components/Menu/Menu"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/createata">
            <CreateAta />
          </Route>
          <Route path="/">
            <Menu />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
