import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateAta from "./pages/CreateAta/CreateAta";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/createata">
            <CreateAta />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
