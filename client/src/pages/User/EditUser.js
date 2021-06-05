import {
  Button,
  Container,
  FormLabel,
  Grid,
  IconButton,
  Input,
  MenuItem,
  Select,
  Typography,
  withStyles,
} from "@material-ui/core";
import { styles } from "../../assets/styles/Styles";
import "../Ata/CreateAta/Style.css";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import Loading from "../Loading/Loading";
import userServices from "../../services/user";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Alerta from "../../components/Snackbar/Alerta";
import { BrokenImage } from "@material-ui/icons";
import { useAutenticacao } from "../../context/Autenticacao";
import { getLocalStorage, setLocalStorage } from "../../auth/auth";
import { isEmpty } from "./UserProfile";

const EditUser = (props) => {
  const { classes } = props;
  const usuario_logado = useAutenticacao().usuario;
  const setUsuario_logado = useAutenticacao().setUsuario;
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
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [msgSucesso, setMsgSucesso] = useState("");
  const [msgErro, setMsgErro] = useState("");
  const [preview, setPreview] = useState("");
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

  const handleChange = (event) => {
    setUsuario({
      ...usuario,
      usuPerfil: event.target.value,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const changePreview = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => setPreview(reader.result);
    }
  };

  // Redireciona o usuário para a página de login
  const redirectDelay = () => {
    setTimeout(() => history.push("/perfil", { id: usuario.usuId }), 2000);
  };

  const atualizarUsuario = (event) => {
    event.preventDefault();
    setIsLoadingBtn(true);

    async function atualizarUsuarioLogado() {
      const token = getLocalStorage("sisata_token");
      if (token) {
        const { data } = await userServices.validarTokenSessao(token);
        if (!data.erro) {
          const dados = data.data;
          setUsuario_logado({ ...dados, estaLogado: true });
          setLocalStorage("sisata_token", dados.usuSessionToken, 120);
        }
      }
    }

    var imagem = document.querySelector("#assinatura").files[0];
    var formData = new FormData();
    formData.append("usuario", JSON.stringify(usuario));
    formData.append("imagem", imagem ? imagem : null);

    userServices
      .atualizarUsuario(formData)
      .then(({ data }) => {
        if (!data.erro) {
          setIsLoadingBtn(false);
          atualizarUsuarioLogado();
          setMsgSucesso("Sucesso ao salvar alterações!");
          setMsgErro(false);
        } else {
          setIsLoadingBtn(false);
          setMsgSucesso(false);
          setMsgErro(data.message);
        }
        setOpenSnack(true);
        redirectDelay();
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoadingBtn(false);
        setOpenSnack(true);
        setMsgSucesso(false);
        setMsgErro("Ocorreu um erro na requisição ao servidor");
      });
  };

  const solicitarAlteracaoSenha = (event) => {
    event.preventDefault();
    setIsLoadingBtn(true);
    // tratar possíveis falhas oriundas do backend
    userServices
      .solicitarAlteracaoSenha(usuario.usuEmail)
      .then((res) => {
        if (res.data.erro !== false) {
          setIsLoadingBtn(false);
          setMsgSucesso("Sucesso ao salvar alterações!");
          setMsgErro(false);
          setOpenSnack(true);
          history.push(`/cadastrar-senha?token=${res.data.data}`);
        } else {
          console.log(res.data.message);
          setIsLoadingBtn(false);
          setOpenSnack(true);
          setMsgSucesso(false);
          setMsgErro(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoadingBtn(false);
        setOpenSnack(true);
        setMsgSucesso(false);
        setMsgErro("Ocorreu um erro ao salvar alterações");
      });
  };

  return (
    <Container style={{ marginTop: 30, marginBottom: 20 }}>
      {isLoading && <Loading />}
      {!isLoading && (
        <Grid container justify="center" className={classes.grid} style={{ padding: "0px 25px 20px" }}>
          <Grid container justify="center">
            <Typography className={classes.biggerText} style={{ paddingBottom: 80, paddingTop: 20 }}>
              Edição do perfil
            </Typography>
          </Grid>
          <Grid container justify="space-around">
            <Grid item md={6}>
              {/* input nome */}
              <Grid container alignItems="center" style={{ paddingBottom: 50 }}>
                <Grid item>
                  <FormLabel htmlFor="nome">
                    <Typography
                      className={classes.normalText}
                      style={{
                        paddingRight: 20,
                        color: "white",
                      }}
                    >
                      Nome
                    </Typography>
                  </FormLabel>
                </Grid>
                <Grid item xs>
                  <Input
                    required
                    name="nome"
                    id="nome"
                    value={usuario.usuNome}
                    onChange={(e) => setUsuario({ ...usuario, usuNome: e.target.value })}
                    className={classes.textField}
                    disableUnderline
                  />
                </Grid>
              </Grid>

              {/* input email */}
              <Grid container alignItems="center" style={{ paddingBottom: 50 }}>
                <Grid item>
                  <FormLabel htmlFor="email">
                    <Typography
                      className={classes.normalText}
                      style={{
                        paddingRight: 20,
                        color: "white",
                      }}
                    >
                      Email
                    </Typography>
                  </FormLabel>
                </Grid>
                <Grid item xs>
                  <Input
                    type="email"
                    required
                    name="email"
                    id="email"
                    value={usuario.usuEmail}
                    onChange={(e) => setUsuario({ ...usuario, usuEmail: e.target.value })}
                    className={classes.textField}
                    disableUnderline
                  />
                </Grid>
              </Grid>

              {/* input telefone */}
              <Grid container alignItems="center" style={{ paddingBottom: 50 }}>
                <Grid item>
                  <FormLabel htmlFor="telefone">
                    <Typography
                      className={classes.normalText}
                      style={{
                        paddingRight: 20,
                        color: "white",
                      }}
                    >
                      Telefone
                    </Typography>
                  </FormLabel>
                </Grid>
                <Grid item xs>
                  <Input
                    type="tel"
                    required
                    name="telefone"
                    id="telefone"
                    value={usuario.usuTelefone}
                    onChange={(e) => setUsuario({ ...usuario, usuTelefone: e.target.value })}
                    className={classes.textField}
                    disableUnderline
                  />
                </Grid>
              </Grid>

              {/* input cargo */}
              <Grid container alignItems="center" style={{ paddingBottom: 50 }}>
                <Grid item>
                  <FormLabel htmlFor="cargo">
                    <Typography
                      className={classes.normalText}
                      style={{
                        paddingRight: 20,
                        color: "white",
                      }}
                    >
                      Cargo
                    </Typography>
                  </FormLabel>
                </Grid>
                <Grid item xs>
                  <Input
                    required
                    name="cargo"
                    id="cargo"
                    value={usuario.usuCargo}
                    onChange={(e) => setUsuario({ ...usuario, usuCargo: e.target.value })}
                    className={classes.textField}
                    disableUnderline
                  />
                </Grid>
              </Grid>

              {/* input área/empresa */}
              <Grid container alignItems="center" style={{ paddingBottom: 50 }}>
                <Grid item>
                  <FormLabel htmlFor="area">
                    <Typography
                      className={classes.normalText}
                      style={{
                        paddingRight: 20,
                        color: "white",
                      }}
                    >
                      Área/Empresa
                    </Typography>
                  </FormLabel>
                </Grid>
                <Grid item xs>
                  <Input
                    required
                    name="area"
                    id="area"
                    value={usuario.usuAreaEmpresa}
                    onChange={(e) => setUsuario({ ...usuario, usuAreaEmpresa: e.target.value })}
                    className={classes.textField}
                    disableUnderline
                  />
                </Grid>
              </Grid>

              {/* input perfil */}
              <Grid container alignItems="center" style={{ paddingBottom: 50 }}>
                <Grid item>
                  <FormLabel htmlFor="profile">
                    <Typography
                      className={classes.normalText}
                      style={{
                        paddingRight: 20,
                        color: "white",
                      }}
                    >
                      Perfil
                    </Typography>
                  </FormLabel>
                </Grid>
                <Grid item xs>
                  {usuario_logado.usuPerfil === "ADM" && (
                    <Select
                      id="profile"
                      open={open}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      // Ateração Daniel
                      value={usuario.usuPerfil}
                      onChange={handleChange}
                      className={classes.textField}
                      style={{ width: "7rem" }}
                    >
                      <MenuItem value={"ADM"}>ADM</MenuItem>
                      <MenuItem value={"GER"}>GER</MenuItem>
                      <MenuItem value={"USU"}>USU</MenuItem>
                    </Select>
                  )}
                  {usuario_logado.usuPerfil !== "ADM" && (
                    <Typography className={classes.normalText}>{usuario.usuPerfil}</Typography>
                  )}
                </Grid>
              </Grid>
              {/* upload assinatura */}
              <Grid container alignItems="center">
                <Grid item>
                  <FormLabel htmlFor="assinatura">
                    <Typography
                      className={classes.normalText}
                      style={{
                        paddingRight: 20,
                        color: "white",
                      }}
                    >
                      Assinatura
                    </Typography>
                  </FormLabel>
                </Grid>
                <Grid item xs>
                  <input
                    required
                    name="assinatura"
                    accept="image/*"
                    id="assinatura"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => changePreview(e.target.files[0])}
                  />
                  <label htmlFor="assinatura">
                    <IconButton color="primary" aria-label="upload picture" component="span" className="no-margin">
                      <ImageOutlinedIcon className={classes.uploadFile} style={{ width: 100, height: 100 }} />
                    </IconButton>
                  </label>
                </Grid>
              </Grid>
              {preview && (
                <Grid item xs style={{ marginTop: 10 }}>
                  <Typography style={{ color: "white" }}>Prévia: </Typography>
                  <img src={preview} alt="Prévia da assinatura" style={{ maxWidth: 200, maxHeight: 200 }} />
                </Grid>
              )}
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
                    onClick={atualizarUsuario}
                    style={{
                      color: "white",
                      fontSize: "1.5rem",
                      borderRadius: 40,
                      padding: "10px 50px",
                      margin: "10px 0px",
                    }}
                  >
                    {isLoadingBtn ? <Loading /> : "Salvar"}
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className="bold"
                    onClick={() => history.push({ pathname: '/alterar-senha' })}
                    style={{
                      color: "white",
                      fontSize: "1.5rem",
                      borderRadius: 40,
                      padding: "10px 50px",
                      margin: "10px 0px",
                    }}
                  >
                    {isLoadingBtn ? <Loading /> : "Editar senha"}
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className="bold"
                    onClick={voltar}
                    style={{
                      color: "white",
                      fontSize: "1.5rem",
                      borderRadius: 40,
                      padding: "10px 50px",
                      margin: "10px 0px",
                    }}
                  >
                    {isLoadingBtn ? <Loading /> : "Voltar"}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Alerta isOpen={openSnack} setIsOpen={setOpenSnack} sucesso={msgSucesso} erro={msgErro} />
        </Grid>
      )}
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(EditUser);
