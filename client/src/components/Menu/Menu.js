import { React, useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./Menu.css";
import { Hidden } from "@material-ui/core";
import MenuDrawer from "./MenuDrawer";

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  font: {
    fontFamily: "Montserrat",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    marginLeft: "-6px",
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: "2px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      marginLeft: "-6px",
    },
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(8) + 1,
    [theme.breakpoints.up("xs")]: {
      width: theme.spacing(10) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  icons: {
    width: "50px",
    height: "50px",
    "&:active": {
      color: theme.palette.secondary.main,
    },
  },
  text: {
    marginLeft: "7px",
    color: "#6D6D6D",
  },
  iconitem: {
    minWidth: "65px",
  },
  iconselected: {
    color: theme.palette.secondary.contrastText,
    minWidth: "65px",
  },
  link: {
    textDecoration: "none",
  },
  textselected: {
    color: theme.palette.secondary.contrastText,
    marginLeft: "7px",
  },
  blueColor: {
    backgroundColor: "#26BAF4",
  },
}));

export { useStyles };

export default function Menu() {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

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
            onClick={handleDrawerToggle}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.font}>
            SISATAS
          </Typography>
        </Toolbar>
      </AppBar>
      <Hidden xsDown implementation="js">
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
          <MenuDrawer handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </Hidden>
      <Hidden smUp implementation="js">
        <Drawer
          variant="temporary"
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
          open={open}
          ModalProps={{ keepMounted: true }}
          onClose={handleDrawerToggle}
        >
          <MenuDrawer handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </Hidden>
    </div>
  );
}
