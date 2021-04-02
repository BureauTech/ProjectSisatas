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
    grid: {
        backgroundColor: theme.palette.primary.main,
    },
    icons: {
        color: theme.palette.primary.contrastText,
        width: '90px',
        height: '90px',
    }
})
class Menu extends Component {
    render() {
        const { classes } = this.props;
        return (
            <>
                <Grid className={classes.grid}>
                    <NotificationsNoneOutlinedIcon className={classes.icons} />
                    <PostAddOutlinedIcon className={classes.icons} />
                    <AssignmentOutlinedIcon className={classes.icons} />
                    <AssessmentOutlinedIcon className={classes.icons} />
                    <AccountCircleOutlinedIcon className={classes.icons} />
                    <PeopleAltOutlinedIcon className={classes.icons} />
                    <ExitToAppOutlinedIcon className={classes.icons} />
                </Grid>
            </>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Menu);