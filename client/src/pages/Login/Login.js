import { Container, Grid, makeStyles, Typography, withStyles } from "@material-ui/core";
import { Lock, MailOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { styles } from "../../assets/styles/Styles";
import Botao from "../../components/Login/Botao";
import InputLogin from "../../components/Login/InputLogin";

const style = makeStyles((theme) => ({
  forgot: {
    "&:hover": {
      color: theme.palette.secondary.main,
    },
    color: "white",
  },
}));

const Login = (props) => {
  const { classes } = props;
  const useStyles = style();
  document.body.style.margin = "10% auto";
  document.body.style.padding = "0";
  document.body.style.overflow = "hidden";
  return (
    <Container maxWidth="xs">
      <Grid container className={classes.grid} justify="center">
        <Grid item xs={11} style={{ paddingTop: 20 }}>
          <Typography className={classes.normalText}>Login</Typography>
        </Grid>
        <Grid item xs={11} style={{ paddingBottom: 20 }}>
          <form>
            <Grid container justify="center" style={{ paddingTop: 25, paddingBottom: 15 }}>
              <Grid item xs={11}>
                <InputLogin required label="Email" Icone={MailOutline} type="email" placeholder="Email*" id="email" />
              </Grid>
              <Grid item xs={11}>
                <InputLogin required label="Senha" Icone={Lock} type="password" placeholder="Senha*" id="pw" />
              </Grid>
              <Grid item xs={11}>
                <Link style={{ textDecoration: "none" }}>
                  <Typography className={useStyles.forgot}>Esqueci minha senha</Typography>
                </Link>
              </Grid>
              <Grid item xs={11}>
                <Grid container justify="flex-end">
                  <Botao type="submit" />
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(Login);
