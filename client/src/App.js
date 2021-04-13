import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Data from "./components/ExibirAta/Data";
import Register from "./components/RegisterUser/Register";
import CreateAta from "./pages/CreateAta/CreateAta";
import Menu from "./components/Menu/Menu";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Grid
          container
          alignItems="center"
          style={{ marginTop: 60, marginLeft: 100, marginRight: 0 }}
        >
          <Switch>
            <Route path="/registeruser">
              <Register />
            </Route>
            <Route path="/new-record">
              <CreateAta />
            </Route>
            <Route path="/"></Route>
          </Switch>
        </Grid>
        {/* <Data/> */}
      </div>
    </Router>
  );
}
export default App;
