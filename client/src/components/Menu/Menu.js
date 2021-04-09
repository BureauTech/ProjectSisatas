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
        marginLeft: '-5px'
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
        [theme.breakpoints.up('sm')]: {
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
        textDecoration: 'none',
        '&:active': {
            color: theme.palette.secondary.main
        }
    },
    text: {
        marginLeft: '7px',
        color: "#6D6D6D",
    },
    iconselected: {
        color: theme.palette.secondary.main,
        textDecoration: 'none'
    },
    link: {
        textDecoration: 'none'
    }

}));

export default function Menu() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(0);

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
                        <Link to='/' className={classes.link}>
                            <ListItem button key='home'>
                                <ListItemIcon
                                    className={active === 0 ? classes.iconselected : console.log('false')}
                                    onClick={(e) => handleIconSelected(0)}>
                                    <NotificationsNoneOutlinedIcon className={classes.icons} />
                                </ListItemIcon>
                                <ListItemText primary='Home/Atualizações' className={classes.text} />
                            </ListItem>
                        </Link>
                    </Typography>
                    <Typography>
                        <Link to='new-record' className={classes.link}>
                            <ListItem button key='new-record'>
                                <ListItemIcon className={active === 1 ? classes.iconselected : console.log('false')}
                                    onClick={(e) => handleIconSelected(1)}><PostAddOutlinedIcon className={classes.icons} /></ListItemIcon>
                                <ListItemText primary='Nova Ata' className={classes.text} />
                            </ListItem>
                        </Link>
                    </Typography>
                    <Typography>
                        <Link to="show-records" className={classes.link}>
                            <ListItem button key='show-records'>
                                <ListItemIcon className={active === 2 ? classes.iconselected : console.log('false')}
                                    onClick={(e) => handleIconSelected(2)}><AssignmentOutlinedIcon className={classes.icons} /></ListItemIcon>
                                <ListItemText primary='Exibir Atas' className={classes.text} />
                            </ListItem>
                        </Link>
                    </Typography>
                    <Typography>
                        <Link to="reports" className={classes.link}>
                            <ListItem button key='reports'>
                                <ListItemIcon className={active === 3 ? classes.iconselected : console.log('false')}
                                    onClick={(e) => handleIconSelected(3)}><AssessmentOutlinedIcon className={classes.icons} /></ListItemIcon>
                                <ListItemText primary='Relatórios' className={classes.text} />
                            </ListItem>
                        </Link>
                    </Typography>
                    <Typography>
                        <Link to="profile" className={classes.link}>
                            <ListItem button key='profile'>
                                <ListItemIcon className={active === 4 ? classes.iconselected : console.log('false')}
                                    onClick={(e) => handleIconSelected(4)}><AccountCircleOutlinedIcon className={classes.icons} /></ListItemIcon>
                                <ListItemText primary='Perfil de Usuário' className={classes.text} />
                            </ListItem>
                        </Link>
                    </Typography>
                    <Typography>
                        <Link to="users-list" className={classes.link}>
                            <ListItem button key='users-list'>
                                <ListItemIcon className={active === 5 ? classes.iconselected : console.log('false')}
                                    onClick={(e) => handleIconSelected(5)}><PeopleAltOutlinedIcon className={classes.icons} /></ListItemIcon>
                                <ListItemText primary='Usuários Cadastrados' className={classes.text} />
                            </ListItem>
                        </Link>
                    </Typography>
                    <Typography>
                        <Link to="exit" className={classes.link}>
                            <ListItem button key='exit'>
                                <ListItemIcon className={active === 6 ? classes.iconselected : console.log('false')}
                                    onClick={(e) => handleIconSelected(6)}><ExitToAppOutlinedIcon className={classes.icons} /></ListItemIcon>
                                <ListItemText primary='Sair' className={classes.text} />
                            </ListItem>
                        </Link>
                    </Typography>
                </List>
                <Divider />
            </Drawer>
        </div>
    );
}