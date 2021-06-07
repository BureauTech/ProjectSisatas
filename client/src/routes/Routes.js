import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CreateAta from "../pages/Ata/CreateAta/CreateAta";
import ListarAta from "../pages/Ata/ViewAta/ListarAta";
import UserProfile from "../pages/User/UserProfile";
import CreateRevision from "../pages/CreateRevision/CreateRevision";
import ViewAta from "../pages/Ata/ViewAta/ViewAta";
import ViewRevisions from "../pages/ViewRevisions/ViewRevisions";
import Comentarios from "../components/Comentarios/Comentarios";
import Register from "../components/RegisterUser/Register";
import RegisterPassword from "../components/RegisterPassword/RegisterPassword";
import EditUser from "../pages/User/EditUser";
import ViewComments from "../pages/Comment/ViewComments";
import ViewSubjects from "../pages/Subject/ViewSubjects";
import UserList from "../components/UserList/UserList";
import Login from "../pages/Login/Login";
import Logout from "../pages/Logout/Logout";
import ForgotPassword from "../pages/Login/ForgotPassword";
import Notificacoes from "../pages/Notificacoes/Notificacoes";
import RestrictedRoute from "./RestrictedRoute";
import Relatorio from "../pages/Relatorio/Relatorio";
import EditPassword from "../pages/User/EditPassword";

/**
 * Arquivo com rotas para o frontend
 * @author Denis Lima
 * @param {any} props props
 * @returns Retorna as rotas do frontend
 */
const Routes = ({ ajustarLayout }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={() => <Login />} />
      <Route exact path="/esqueci-a-senha" component={() => <ForgotPassword />} />
      <Route ajustarLayout={ajustarLayout} path="/cadastrar-senha" component={() => <RegisterPassword />} />
      <PrivateRoute exact ajustarLayout={ajustarLayout} path="/" component={() => <Notificacoes />} />
      <PrivateRoute exact ajustarLayout={ajustarLayout} path="/nova-ata" component={() => <CreateAta />} />
      <PrivateRoute exact ajustarLayout={ajustarLayout} path="/visualizar-atas" component={() => <ListarAta />} />
      <PrivateRoute
        exact
        ajustarLayout={ajustarLayout}
        path="/ata"
        component={() => <ViewAta ajustarLayout={ajustarLayout} />}
      />
      <RestrictedRoute allowed="GER" exact ajustarLayout={ajustarLayout} path="/relatorio" component={() => <Relatorio />} />
      <PrivateRoute exact ajustarLayout={ajustarLayout} path="/perfil" component={() => <UserProfile />} />
      <PrivateRoute exact ajustarLayout={ajustarLayout} path="/editar-usuario" component={() => <EditUser />} />
      <PrivateRoute exact ajustarLayout={ajustarLayout} path="/alterar-senha" component={() => <EditPassword />} />
      <PrivateRoute exact ajustarLayout={ajustarLayout} path="/nova-revisao" component={() => <CreateRevision />} />
      <PrivateRoute exact ajustarLayout={ajustarLayout} path="/revisoes" component={() => <ViewRevisions />} />
{/*      <PrivateRoute
        exact
        ajustarLayout={ajustarLayout}
        path="/cadastrar-comentarios"
        component={() => <Comentarios />}
      />*/}
      <RestrictedRoute
        allowed="ADM"
        exact
        ajustarLayout={ajustarLayout}
        path="/cadastrar-usuario"
        component={() => <Register />}
      />
{/*      <PrivateRoute exact ajustarLayout={ajustarLayout} path="/comentarios" component={() => <ViewComments />} /> */}
      <PrivateRoute exact ajustarLayout={ajustarLayout} path="/assuntos" component={() => <ViewSubjects />} />
      <RestrictedRoute
        allowed="ADM"
        exact
        ajustarLayout={ajustarLayout}
        path="/listar-usuarios"
        component={() => <UserList />}
      />
      <PrivateRoute exact ajustarLayout={ajustarLayout} path="/exit" component={() => <Logout />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
