import { Button, Container, Grid, Typography, withStyles } from "@material-ui/core";
import { styles } from "../../assets/styles/Styles";
import "../Ata/CreateAta/Style.css";
import userServices from "../../services/user";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { useHistory, useLocation } from "react-router-dom";
import Alerta from "../../components/Snackbar/Alerta";
import { BrokenImage } from "@material-ui/icons";

export const isEmpty = (user) => {
  const keys = Object.keys(user);
  if (keys.length === 0) {
    return 1;
  }
  return 0;
};

const UserProfile = (props) => {
  const { classes } = props;
  const [usuario, setUsuario] = useState({
    usuNome: "",
    usuId: "",
    usuEmail: "",
    usuCargo: "",
    usuAreaEmpresa: "",
    usuTelefone: "",
    usuPerfil: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [openSnack, setOpenSnack] = useState(false);
  const [msgSucesso, setMsgSucesso] = useState("");
  const [msgErro, setMsgErro] = useState("");
  const history = useHistory();
  const voltar = () => {
    history.goBack();
  };
  const location = useLocation();

  useEffect(() => {
    userServices
      .pegarUsuario(location.state.id)
      .then(({ data }) => {
        if (!data.erro && !isEmpty(data.data)) {
          setUsuario(data.data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setMsgSucesso(false);
          setMsgErro("Ocorreu um erro ao carregar informações deste perfil");
          setOpenSnack(true);
        }
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
        setMsgSucesso(false);
        setMsgErro("Ocorreu um erro ao na requisição ao servidor");
        setOpenSnack(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const editar = () => {
    history.push("/editar-usuario", { id: usuario.usuId });
  };

  return (
    <Container>
      {isLoading && <Loading />}
      {!isLoading && (
        <Grid container justify="center" className={classes.grid} style={{ padding: "0px 25px 20px" }}>
          <Grid container justify="center">
            <Typography className={classes.biggerText} style={{ paddingBottom: 80, paddingTop: 20 }}>
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
                    <strong>{usuario.usuNome}</strong>
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
                    <strong>{usuario.usuEmail}</strong>
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
                    <strong>{usuario.usuTelefone}</strong>
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
                    <strong>{usuario.usuCargo}</strong>
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
                    <strong>{usuario.usuAreaEmpresa}</strong>
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
                    {/* Alteração Daniel */}
                    <strong>{usuario.usuPerfil}</strong>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={5}>
              <Grid container justify="center">
                <Grid container justify="center">
                  {usuario.usuAssinatura && (
                    <img
                      // Alteração Daniel
                      src={"data:image/png;base64," + usuario.usuAssinatura}
                      alt="Imagem da assinatura"
                      style={{ maxWidth: 400, maxHeight: 400 }}
                    />
                  )}
                  {!usuario.usuAssinatura && <BrokenImage color="secondary" style={{ width: 300, height: 300 }} />}
                </Grid>
                <Grid container justify="center" style={{ paddingTop: 20 }}>
                  <Typography className={classes.normalText}>Assinatura Atual</Typography>
                </Grid>
                <Grid container justify="space-around" style={{ paddingTop: 50 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className="bold"
                    onClick={() => voltar()}
                    style={{
                      color: "white",
                      fontSize: "1.5rem",
                      borderRadius: 40,
                      padding: "10px 50px",
                      margin: "10px 0px",
                    }}
                  >
                    Voltar
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className="bold"
                    onClick={() => editar()}
                    style={{
                      color: "white",
                      fontSize: "1.5rem",
                      borderRadius: 40,
                      padding: "10px 50px",
                      margin: "10px 0px",
                    }}
                    disabled={!String(usuario.usuId).length}
                  >
                    Editar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
      <Alerta isOpen={openSnack} setIsOpen={setOpenSnack} sucesso={msgSucesso} erro={msgErro} />
    </Container>
  );
};
export default withStyles(styles, { withTheme: true })(UserProfile);
