import { Grid, Container, withStyles } from "@material-ui/core";
import { Component } from "react";

import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';



const styles = (theme) => ({
    container: {
        backgroundColor: theme.palette.primary.main,
        flexDirection: 'column',
        width: '8%',
        height: '100%',
        alignItems: 'center',
        padding: 8,
    },
    icons: {
        color: theme.palette.primary.contrastText,
        width: '90px',
        height: '90px',
    },
})
class Menu extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.container}>
                <Grid item>
                    <NotificationsNoneOutlinedIcon className={classes.icons} />
                </Grid>
                <Grid item>
                    <PostAddOutlinedIcon className={classes.icons} />
                </Grid>
                <Grid item>
                    <AssignmentOutlinedIcon className={classes.icons} />
                </Grid>
                <Grid item>
                    <AssessmentOutlinedIcon className={classes.icons} />
                </Grid>
                <Grid item>
                    <AccountCircleOutlinedIcon className={classes.icons} />
                </Grid>
                <Grid item>
                    <PeopleAltOutlinedIcon className={classes.icons} />
                </Grid>
                <Grid item>
                    <ExitToAppOutlinedIcon className={classes.icons} />
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Menu);