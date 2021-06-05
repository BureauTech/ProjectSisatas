import {
  Container,
  Grid,
  withStyles,
  Typography,
  FormLabel,
  Input,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  IconButton,
  useTheme,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { styles } from "../../assets/styles/Styles";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import { useEffect, useState } from "react";
import clsx from "clsx";
import "./Register.css";
import userServices from "../../services/user";
import Alerta from "../Snackbar/Alerta";
import { Delete } from "@material-ui/icons";
import emailServices from "../../services/email";

const Register = (props) => {
  const { classes } = props;
  const theme = useTheme();

  const [perfil, setPerfil] = useState("USU");
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();
  const [cargo, setCargo] = useState();
  const [area, setArea] = useState();
  const [preview, setPreview] = useState("");
  const [openSnack, setOpenSnack] = useState(false);
  const [msgSucesso, setMsgSucesso] = useState("");
  const [msgErro, setMsgErro] = useState("");


  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  const clear = () => {
    setPerfil("USU");
    setNome("");
    setEmail("");
    setTelefone("");
    setCargo("");
    setArea("");
    setPreview("");
  };

  const deletePreview = () => {
    setPreview(null);
  };

  const changePreview = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => setPreview(reader.result);
    }
  };



  const EnviarEmail = () => {
    //console.log(body)

    userServices.solicitarAlteracaoSenha(email)
      .then(res => {

    var body = [
      {
          userEnviar: "Noreply.bureautech",
          senhaEnviar: "bureautech",
          emailEnviar: "noreply.bureautech@gmail.com",
          nomeEnviar: "Sisatas",
          emailReceber: email,
          nomeReceber: nome,         
          linkSenha : `http://localhost:3000/cadastrar-senha?usu_token=${res.data.data}`
        }]

        emailServices
          .novoUsuario(body)
          .then(res => {
            console.log("email enviado\nresp: " + res.data)
            console.log("email env: " + JSON.stringify(body))
          })
          .catch(err => {
            console.log("não foi o email\nerr: " + err)
          })

      })
      .catch(err => console.log("erro ao solicitar" + err))


  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      usuNome: nome,
      usuEmail: email,
      usuTelefone: telefone,
      usuCargo: cargo,
      usuAreaEmpresa: area,
      /* Alterações Daniel */
      usuPerfil: perfil,
    };

    var imagem = document.querySelector("#assinatura").files[0];

    var formData = new FormData();
    formData.append("usuario", JSON.stringify(body));
    formData.append("imagem", imagem);

    userServices
      .cadastrarUsuario(formData)
      /* / Alterações Daniel */
      .then((res) => {
        if (res.data.erro === true) {
          setMsgSucesso(false);
          setMsgErro(res.data.mensagem);

        } else {
          clear();
          setMsgSucesso("Usuário cadastrado com sucesso!");
          setMsgErro(false);
          EnviarEmail()
        }
        setOpenSnack(true);
      })
      .catch((err) => {
        console.log(err.message);
        setMsgSucesso(false);
        setMsgErro("Ocorreu um erro ao deletar o usuário");
        setOpenSnack(true);
      });
  };

  return (
    <Container style={{ marginTop: 40 }} maxWidth="md">
      <Grid container className={classes.grid} style={{ padding: "0px 15px 20px" }} justify="center">
        <Grid item xs={12}>
          {/* cabeçalho */}
          <Grid container justify="center" style={{ paddingTop: 20 }}>
            <Typography className={classes.normalText} style={{ paddingBottom: 60, textAlign: "center" }}>
              Cadastro de Usuário
            </Typography>
          </Grid>

          {/* formulario */}
          <Grid container justify="center">
            <form id="form" onSubmit={(e) => handleSubmit(e)} style={{ width: "100%" }}>
              {/* inputs */}
              <Grid container alignItems="center" justify="center">
                <Grid item xs={11} sm={10}>
                  {/* input nome */}
                  <Grid container alignItems="center" style={{ paddingBottom: 15 }}>
                    <Grid item>
                      <FormLabel htmlFor="nome">
                        <Typography
                          style={{
                            fontSize: "1.5rem",
                            paddingRight: 20,
                            color: "white",
                          }}
                        >
                          Nome
                        </Typography>
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm>
                      <Input
                        required
                        name="nome"
                        id="nome"
                        className={classes.textField}
                        onChange={(e) => setNome(e.target.value)}
                        value={nome}
                        disableUnderline
                      />
                    </Grid>
                  </Grid>

                  {/* input email */}
                  <Grid container alignItems="center" style={{ paddingBottom: 15 }}>
                    <Grid item>
                      <FormLabel htmlFor="email">
                        <Typography
                          style={{
                            fontSize: "1.5rem",
                            paddingRight: 20,
                            color: "white",
                          }}
                        >
                          Email
                        </Typography>
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm>
                      <Input
                        type="email"
                        required
                        name="email"
                        id="email"
                        className={classes.textField}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        disableUnderline
                      />
                    </Grid>
                  </Grid>

                  {/* input telefone */}
                  <Grid container alignItems="center" style={{ paddingBottom: 15 }}>
                    <Grid item>
                      <FormLabel htmlFor="telefone">
                        <Typography
                          style={{
                            fontSize: "1.5rem",
                            paddingRight: 20,
                            color: "white",
                          }}
                        >
                          Telefone
                        </Typography>
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm>
                      <Input
                        type="tel"
                        required
                        name="telefone"
                        id="telefone"
                        className={classes.textField}
                        onChange={(e) => setTelefone(e.target.value)}
                        value={telefone}
                        disableUnderline
                      />
                    </Grid>
                  </Grid>

                  {/* input cargo */}
                  <Grid container alignItems="center" style={{ paddingBottom: 15 }}>
                    <Grid item>
                      <FormLabel htmlFor="cargo">
                        <Typography
                          style={{
                            fontSize: "1.5rem",
                            paddingRight: 20,
                            color: "white",
                          }}
                        >
                          Cargo
                        </Typography>
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm>
                      <Input
                        required
                        name="cargo"
                        id="cargo"
                        className={classes.textField}
                        onChange={(e) => setCargo(e.target.value)}
                        value={cargo}
                        disableUnderline
                      />
                    </Grid>
                  </Grid>

                  {/* input área/empresa */}
                  <Grid container alignItems="center" style={{ paddingBottom: 15 }}>
                    <Grid item>
                      <FormLabel htmlFor="area">
                        <Typography
                          style={{
                            fontSize: "1.5rem",
                            paddingRight: 20,
                            color: "white",
                          }}
                        >
                          Área/Empresa
                        </Typography>
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm>
                      <Input
                        required
                        name="area"
                        id="area"
                        className={classes.textField}
                        onChange={(e) => setArea(e.target.value)}
                        value={area}
                        disableUnderline
                      />
                    </Grid>
                  </Grid>

                  {/* inputradio perfil */}
                  <Grid container alignItems="center">
                    <Grid item>
                      <FormLabel>
                        <Typography
                          style={{
                            paddingRight: 20,
                            fontSize: "1.5rem",
                            color: "white",
                          }}
                        >
                          Perfil
                        </Typography>
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm>
                      <RadioGroup
                        row={windowSize >= 600 ? true : false}
                        name="perfil"
                        style={{ color: "white" }}
                        onChange={(e) => setPerfil(e.target.value)}
                        value={perfil}
                      >
                        <FormControlLabel
                          style={{ paddingLeft: 15 }}
                          labelPlacement="end"
                          value="ADM"
                          control={
                            <Radio
                              className={classes.radio}
                              checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                              icon={<span className={classes.icon} />}
                              {...props}
                            />
                          }
                          label="ADM"
                        />
                        <FormControlLabel
                          style={{ paddingLeft: 15 }}
                          labelPlacement="end"
                          value="GER"
                          control={
                            <Radio
                              className={classes.radio}
                              checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                              icon={<span className={classes.icon} />}
                              {...props}
                            />
                          }
                          label="GER"
                        />
                        <FormControlLabel
                          style={{ paddingLeft: 15 }}
                          labelPlacement="end"
                          value="USU"
                          control={
                            <Radio
                              className={classes.radio}
                              checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                              icon={<span className={classes.icon} />}
                              {...props}
                            />
                          }
                          label="USU"
                        />
                      </RadioGroup>
                    </Grid>
                  </Grid>

                  {/* upload assinatura */}
                  <Grid container alignItems="center">
                    <Grid item>
                      <FormLabel htmlFor="assinatura">
                        <Typography style={{ fontSize: "1.5rem", paddingRight: 20, color: "white" }}>
                          Assinatura
                        </Typography>
                      </FormLabel>
                    </Grid>
                    <Grid item xs>
                      <input
                        name="assinatura"
                        accept="image/*"
                        id="assinatura"
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => changePreview(e.target.files[0])}
                      />
                      <label htmlFor="assinatura">
                        <IconButton color="primary" aria-label="upload picture" component="span" className="no-margin">
                          <ImageOutlinedIcon className={classes.uploadFile} style={{ width: 50, height: 50 }} />
                        </IconButton>
                      </label>
                    </Grid>
                  </Grid>
                </Grid>
                {preview && (
                  <Grid item xs={11} sm={10} style={{ marginTop: 10 }}>
                    <Grid container>
                      <Typography style={{ color: "white" }}>Prévia: </Typography>
                      <img src={preview} alt="Prévia da assinatura" style={{ maxWidth: 200, maxHeight: 200 }} />
                    </Grid>
                    <Grid container>
                      <IconButton
                        onClick={deletePreview}
                        style={{ borderRadius: 20, color: "white", fontSize: "1.2rem", padding: "10px 0px" }}
                      >
                        Remover
                        <Delete color="secondary" />
                      </IconButton>
                    </Grid>
                  </Grid>
                )}
              </Grid>

              {/* button cadastrar */}
              <Grid container justify="flex-end" style={{ paddingRight: 20, marginTop: 10 }}>
                <Button variant="contained" color="secondary" type="submit" style={{ borderRadius: 18 }}>
                  Cadastrar
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>

      {/* button voltar */}
      <Grid container>
        <Link to="/listar-usuarios" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            className="bold"
            style={{
              backgroundColor: "white",
              color: theme.palette.secondary.main,
              fontSize: "1rem",
              borderRadius: 20,
              padding: 0,
              marginTop: 5,
            }}
          >
            Voltar
          </Button>
        </Link>
      </Grid>
      <Alerta isOpen={openSnack} setIsOpen={setOpenSnack} sucesso={msgSucesso} erro={msgErro} />
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(Register);
