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
import { useHistory, useParams } from "react-router-dom";

const EditUser = (props) => {
  const { classes } = props;
  const [usuario, setUsuario] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const voltar = () => {
    history.goBack();
  };
  const { id } = useParams();

  useEffect(() => {
    // Se tiver parâmetro, busca o usuário do parâmetro, se não tiver, busca o usuário logado
    let idBuscar = "";
    if (id) {
      idBuscar = id;
    } else {
      idBuscar = props.id;
    }

    userServices
      .pegarUsuario(idBuscar)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    {usuario.usuNome}
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
                    {usuario.usuEmail}
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
                    {usuario.usuTelefone}
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
                    {usuario.usuCargo}
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
                    {usuario.usuAreaEmpresa}
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
                    {usuario.pertenceUsuarios.perNome}
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
                    onClick={() => voltar()}
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
