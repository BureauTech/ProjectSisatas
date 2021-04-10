import {
    Container,
    Grid,
    withStyles,
    Typography,
    FormLabel,
    Input,
} from "@material-ui/core";
import { Component } from "react";
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

// Alterando css de componentes
const styles = (theme) => ({
    grid: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: "20px",
        padding: 5,
        paddingBottom: 10
    },
    textField: {
        backgroundColor: "white",
        borderRadius: "10px",
        color: "black",
        width: "100%",
        paddingLeft: "0.4rem",
    },
    biggerText: {
        color: "white",
        fontFamily: "Montserrat",
        fontSize: "2.5rem",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "3.0625rem",
        letterSpacing: "0em",
        textAlign: "left",
    },
    normalText: {
        color: "white",
        fontFamily: "Montserrat",
        fontSize: "1.2rem",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "2rem",
        letterSpacing: "0em",
        textAlign: "left",
    },
    rowMargin: {
        margin: 20,
    },
    btn: {
        backgroundColor: theme.palette.secondary.contrastText,
        color: theme.palette.secondary.main,
        marginTop: 2,
        borderRadius: 10,
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
        }
    },
    icon: {
        width: '30px',
        height: '30px',
    }
});

class UserFilter extends Component {
    render() {
        const { classes, ata } = this.props;

        return (
            <Container>
                <Grid container className={classes.grid} alignItems="center"
                    justify='space-evenly'>
                    <Grid>
                        <FormLabel className={classes.normalText}>
                            Usuário
                    </FormLabel>
                        <Input
                            className={classes.textField}
                            disableUnderline
                            type="search"
                        ></Input>
                    </Grid>
                    <Grid>
                        <FormLabel className={classes.normalText}>
                            Área/Empresa
                    </FormLabel>
                        <Input
                            className={classes.textField}
                            disableUnderline
                            type="search"
                        ></Input>
                    </Grid>
                    <Grid>
                        <FormLabel className={classes.normalText}>
                            E-mail
                    </FormLabel>
                        <Input
                            className={classes.textField}
                            disableUnderline
                            type="search"
                        ></Input>
                    </Grid>
                    <Button className={classes.btn}><SearchIcon className={classes.icon} /></Button>
                </Grid>
            </Container>
        );
    }
}

export default withStyles(styles, { withTheme: true })(UserFilter);
