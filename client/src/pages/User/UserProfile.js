import {
  Button,
  Container,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import { styles } from "../../assets/styles/Styles";
import logo from "../../assets/images/BureauTechFundoBranco-01.png";
import "../CreateAta/Style.css";
import userServices from "../../services/user";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const EditUser = (props) => {
  const { classes } = props;
  const [usuario, setUsuario] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    userServices
      .pegarUsuario(props.id)
      .then((user) => {
        setUsuario(user.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setUsuario({
          nome: "Denis",
          email: "denis@bureautech.com",
          telefone: "12 991234567",
          cargo: "Desenvolvedor",
          area: "Bureau Tech Frontend",
          perfil: "ADM",
        });
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      {isLoading && <Loading />}
      {!isLoading && (
        <Grid
          container
          justify="center"
          className={classes.grid}
          style={{ paddingBottom: 40 }}
        >
          <Grid container justify="center">
            <Typography
              className={classes.biggerText}
              style={{ paddingBottom: 80, paddingTop: 20 }}
            >
              Perfil de Usuário
            </Typography>
          </Grid>
          <Grid container justify="space-around">
            <Grid item md={6}>
              {/* input nome */}
              <Grid container alignItems="center" style={{ paddingBottom: 50 }}>
                <Grid item>
                  <Typography
                    className={classes.normalText}
                    style={{
                      paddingRight: 20,
                      color: "white",
                    }}
                  >
                    Nome
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography
                    className={classes.normalText}
                    style={{
                      paddingRight: 20,
                      color: "white",
                    }}
                  >
                    {usuario.nome}
                  </Typography>
                </Grid>
              </Grid>

              {/* input email */}
              <Grid container alignItems="center" style={{ paddingBottom: 50 }}>
                <Grid item>
                  <Typography
                    className={classes.normalText}
                    style={{
                      paddingRight: 20,
                      color: "white",
                    }}
                  >
                    Email
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography
                    className={classes.normalText}
                    style={{
                      paddingRight: 20,
                      color: "white",
                    }}
                  >
                    {usuario.email}
                  </Typography>
                </Grid>
              </Grid>

              {/* input telefone */}
              <Grid container alignItems="center" style={{ paddingBottom: 50 }}>
                <Grid item>
                  <Typography
                    className={classes.normalText}
                    style={{
                      paddingRight: 20,
                      color: "white",
                    }}
                  >
                    Telefone
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography
                    className={classes.normalText}
                    style={{
                      paddingRight: 20,
                      color: "white",
                    }}
                  >
                    {usuario.telefone}
                  </Typography>
                </Grid>
              </Grid>

              {/* input cargo */}
              <Grid container alignItems="center" style={{ paddingBottom: 50 }}>
                <Grid item>
                  <Typography
                    className={classes.normalText}
                    style={{
                      paddingRight: 20,
                      color: "white",
                    }}
                  >
                    Cargo
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography
                    className={classes.normalText}
                    style={{
                      paddingRight: 20,
                      color: "white",
                    }}
                  >
                    {usuario.cargo}
                  </Typography>
                </Grid>
              </Grid>

              {/* input área/empresa */}
              <Grid container alignItems="center" style={{ paddingBottom: 50 }}>
                <Grid item>
                  <Typography
                    className={classes.normalText}
                    style={{
                      paddingRight: 20,
                      color: "white",
                    }}
                  >
                    Área/Empresa
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography
                    className={classes.normalText}
                    style={{
                      paddingRight: 20,
                      color: "white",
                    }}
                  >
                    {usuario.area}
                  </Typography>
                </Grid>
              </Grid>

              {/* input perfil */}
              <Grid container alignItems="center" style={{ paddingBottom: 50 }}>
                <Grid item>
                  <Typography
                    className={classes.normalText}
                    style={{
                      paddingRight: 20,
                      color: "white",
                    }}
                  >
                    Perfil
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography
                    className={classes.normalText}
                    style={{
                      paddingRight: 20,
                      color: "white",
                    }}
                  >
                    {usuario.perfil}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={5}>
              <Grid container justify="center">
                <Grid container justify="center">
                  <img
                    src={logo}
                    alt="Imagem da assinatura"
                    style={{ maxWidth: 400, maxHeight: 400 }}
                  />
                </Grid>
                <Grid container justify="center" style={{ paddingTop: 20 }}>
                  <Typography className={classes.normalText}>
                    Assinatura Atual
                  </Typography>
                </Grid>
                <Grid container justify="center" style={{ paddingTop: 50 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className="bold"
                    style={{
                      color: "white",
                      fontSize: "1.5rem",
                      borderRadius: 40,
                      padding: "10px 30px",
                    }}
                  >
                    Voltar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
export default withStyles(styles, { withTheme: true })(EditUser);
