import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import './Menu.css';


const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    marginLeft: '-6px',
    [theme.breakpoints.between('xs', 'sm')]: {
      marginLeft: '2px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      marginLeft: '-6px',
    },
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(8) + 1,
    [theme.breakpoints.up('xs')]: {
      width: theme.spacing(10) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  icons: {
    width: '50px',
    height: '50px',
    '&:active': {
      color: theme.palette.secondary.main
    }
  },
  text: {
    marginLeft: '7px',
    color: "#6D6D6D",
  },
  iconitem: {
    minWidth: '65px',
  },
  iconselected: {
    color: theme.palette.secondary.contrastText,
    minWidth: '65px',
  },
  link: {
    textDecoration: 'none'
  },
  textselected: {
    color: theme.palette.secondary.contrastText,
    marginLeft: '7px',
  }

}));

export default function Menu() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(20);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleIconSelected = (index) => {
    setActive(index)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Sisatas
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Typography>
            <Link to='/' className={classes.link} onClick={(e) => handleIconSelected(0)}>
              <ListItem button key='home'>
                <ListItemIcon
                  className={active === 0 ? classes.iconselected : classes.iconitem}>
                  <NotificationsNoneOutlinedIcon className={classes.icons} />
                </ListItemIcon>
                <ListItemText primary='Home/Atualizações' className={active === 0 ? classes.textselected : classes.text} />
              </ListItem>
            </Link>
          </Typography>
          <Typography>
            <Link to='new-record' className={classes.link} onClick={(e) => handleIconSelected(1)}>
              <ListItem button key='new-record'>
                <ListItemIcon className={active === 1 ? classes.iconselected : classes.iconitem}>
                  <PostAddOutlinedIcon className={classes.icons} />
                </ListItemIcon>
                <ListItemText primary='Nova Ata' className={active === 1 ? classes.textselected : classes.text} />
              </ListItem>
            </Link>
          </Typography>
          <Typography>
            <Link to="show-records" className={classes.link} onClick={(e) => handleIconSelected(2)}>
              <ListItem button key='show-records'>
                <ListItemIcon className={active === 2 ? classes.iconselected : classes.iconitem}>
                  <AssignmentOutlinedIcon className={classes.icons} />
                </ListItemIcon>
                <ListItemText primary='Exibir Atas' className={active === 2 ? classes.textselected : classes.text} />
              </ListItem>
            </Link>
          </Typography>
          <Typography>
            <Link to="reports" className={classes.link} onClick={(e) => handleIconSelected(3)}>
              <ListItem button key='reports'>
                <ListItemIcon className={active === 3 ? classes.iconselected : classes.iconitem}>
                  <AssessmentOutlinedIcon className={classes.icons} />
                </ListItemIcon>
                <ListItemText primary='Relatórios' className={active === 3 ? classes.textselected : classes.text} />
              </ListItem>
            </Link>
          </Typography>
          <Typography>
            <Link to="profile" className={classes.link} onClick={(e) => handleIconSelected(4)}>
              <ListItem button key='profile'>
                <ListItemIcon className={active === 4 ? classes.iconselected : classes.iconitem}>
                  <AccountCircleOutlinedIcon className={classes.icons} />
                </ListItemIcon>
                <ListItemText primary='Perfil de Usuário' className={active === 4 ? classes.textselected : classes.text} />
              </ListItem>
            </Link>
          </Typography>
          <Typography>
            <Link to="users-list" className={classes.link} onClick={(e) => handleIconSelected(5)}>
              <ListItem button key='users-list'>
                <ListItemIcon className={active === 5 ? classes.iconselected : classes.iconitem}>
                  <PeopleAltOutlinedIcon className={classes.icons} />
                </ListItemIcon>
                <ListItemText primary='Usuários Cadastrados' className={active === 5 ? classes.textselected : classes.text} />
              </ListItem>
            </Link>
          </Typography>
          <Typography>
            <Link to="exit" className={classes.link} onClick={(e) => handleIconSelected(6)}>
              <ListItem button key='exit'>
                <ListItemIcon className={active === 6 ? classes.iconselected : classes.iconitem}>
                  <ExitToAppOutlinedIcon className={classes.icons} />
                </ListItemIcon>
                <ListItemText primary='Sair' className={active === 6 ? classes.textselected : classes.text} />
              </ListItem>
            </Link>
          </Typography>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}