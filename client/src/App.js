import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AtaHeader from "./components/CreateAta/AtaHeader";
import Menu from "./components/Menu/Menu"

function App() {
  const ata = {
    id: "01/21",
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/create">
            <AtaHeader ata={ata} />
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
