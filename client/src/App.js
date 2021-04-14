import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/RegisterUser/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/registeruser">
            <Register/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;