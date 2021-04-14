import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./components/UserList/UserList";
import Menu from "./components/Menu/Menu"

function App() {
  const ata = {
    id: "01/21",
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/userlist">
            <UserList ata={ata} />
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
