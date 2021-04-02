import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AtaHeader from "./components/CreateAta/AtaHeader";

function App() {
  const ata = {
    id: "01/21",
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/createata">
            <AtaHeader ata={ata} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
