import { Divider, IconButton, List } from "@material-ui/core";
import { React } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import "./Menu.css";
import { useStyles } from "./Menu";
import { useAutenticacao } from "../../context/Autenticacao";
import { useMenuSelected } from "../../context/Menu";

/**
 * 
 * @author Beatriz Coutinho
 * @param {any} props 
 * @returns Componente do Menu contendo os ícones para as rotas
 */
const MenuDrawer = (props) => {
  const { handleDrawerToggle } = props;
  const theme = useTheme();
  const classes = useStyles(theme);
  const handleIconSelected = (index) => {
    setMenuSelected(index);
  };

  const { menuSelected, setMenuSelected } = useMenuSelected()

  const { usuario } = useAutenticacao();

  const allowed = (perfil) => {
    return usuario.usuPerfil === perfil || usuario.usuPerfil === "ADM";
  };
  return (
    <>
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerToggle}>
          {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <Typography className={classes.font}>
          <Link to="/" className={classes.link} onClick={(e) => handleIconSelected(0)}>
            <ListItem button key="home" className={menuSelected === 0 ? classes.blueColor : {}}>
              <ListItemIcon className={menuSelected === 0 ? classes.iconselected : classes.iconitem}>
                <NotificationsNoneOutlinedIcon className={classes.icons} />
              </ListItemIcon>
              <ListItemText
                primary="Home/Atualizações"
                className={menuSelected === 0 ? classes.textselected : classes.text}
              />
            </ListItem>
          </Link>
        </Typography>
        <Typography className={classes.font}>
          <Link to="/nova-ata" className={classes.link} onClick={(e) => handleIconSelected(1)}>
            <ListItem button key="nova-ata" className={menuSelected === 1 ? classes.blueColor : {}}>
              <ListItemIcon className={menuSelected === 1 ? classes.iconselected : classes.iconitem}>
                <PostAddOutlinedIcon className={classes.icons} />
              </ListItemIcon>
              <ListItemText primary="Nova Ata" className={menuSelected === 1 ? classes.textselected : classes.text} />
            </ListItem>
          </Link>
        </Typography>
        <Typography className={classes.font}>
          <Link to="/visualizar-atas" className={classes.link} onClick={(e) => handleIconSelected(2)}>
            <ListItem button key="visualizar-atas" className={menuSelected === 2 ? classes.blueColor : {}}>
              <ListItemIcon className={menuSelected === 2 ? classes.iconselected : classes.iconitem}>
                <AssignmentOutlinedIcon className={classes.icons} />
              </ListItemIcon>
              <ListItemText primary="Exibir Atas" className={menuSelected === 2 ? classes.textselected : classes.text} />
            </ListItem>
          </Link>
        </Typography>
        {allowed("GER") && (
          <Typography className={classes.font}>
            <Link to="/relatorio" className={classes.link} onClick={(e) => handleIconSelected(3)}>
              <ListItem button key="relatorio" className={menuSelected === 3 ? classes.blueColor : {}}>
                <ListItemIcon className={menuSelected === 3 ? classes.iconselected : classes.iconitem}>
                  <AssessmentOutlinedIcon className={classes.icons} />
                </ListItemIcon>
                <ListItemText primary="Relatórios" className={menuSelected === 3 ? classes.textselected : classes.text} />
              </ListItem>
            </Link>
          </Typography>
        )}
        <Typography className={classes.font}>
          <Link
            to={{
              pathname: "/perfil",
              state: {id: usuario.usuId},
            }}
            className={classes.link}
            onClick={(e) => handleIconSelected(4)}
          >
            <ListItem button key="profile" className={menuSelected === 4 ? classes.blueColor : {}}>
              <ListItemIcon className={menuSelected === 4 ? classes.iconselected : classes.iconitem}>
                <AccountCircleOutlinedIcon className={classes.icons} />
              </ListItemIcon>
              <ListItemText
                primary="Perfil de Usuário"
                className={menuSelected === 4 ? classes.textselected : classes.text}
              />
            </ListItem>
          </Link>
        </Typography>
        {allowed("ADM") && (
          <Typography className={classes.font}>
            <Link to="/listar-usuarios" className={classes.link} onClick={(e) => handleIconSelected(5)} id='list-user'>
              <ListItem button key="listar-usuarios" className={menuSelected === 5 ? classes.blueColor : {}}>
                <ListItemIcon className={menuSelected === 5 ? classes.iconselected : classes.iconitem}>
                  <PeopleAltOutlinedIcon className={classes.icons} />
                </ListItemIcon>
                <ListItemText
                  primary="Usuários Cadastrados"
                  className={menuSelected === 5 ? classes.textselected : classes.text}
                />
              </ListItem>
            </Link>
          </Typography>
        )}
        <Typography className={classes.font}>
          <Link to="/exit" className={classes.link} onClick={(e) => handleIconSelected(6)}>
            <ListItem button key="exit" className={menuSelected === 6 ? classes.blueColor : {}}>
              <ListItemIcon className={menuSelected === 6 ? classes.iconselected : classes.iconitem}>
                <ExitToAppOutlinedIcon className={classes.icons} />
              </ListItemIcon>
              <ListItemText primary="Sair" className={menuSelected === 6 ? classes.textselected : classes.text} />
            </ListItem>
          </Link>
        </Typography>
      </List>
      <Divider />
    </>
  );
};

export default MenuDrawer;
