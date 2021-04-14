import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Data from "./components/ExibirAta/Data";
import Register from "./components/RegisterUser/Register";
import CreateAta from "./pages/CreateAta/CreateAta";
import Menu from "./components/Menu/Menu";
import { Grid } from "@material-ui/core";
import EditUser from "./pages/User/EditUser";
import UserList from "./components/UserList/UserList";

function App() {
  const ata = {
    id: "01/21",
  };
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
            <Route exact path="/"></Route>
            <Route path="/edit-user">
              <EditUser />
            </Route>
            <Route path="/userlist">
              <UserList ata={ata} />
            </Route>
          </Switch>
        </Grid>
        {/* <Data/> */}
      </div>
    </Router>
  );
}
export default App;
