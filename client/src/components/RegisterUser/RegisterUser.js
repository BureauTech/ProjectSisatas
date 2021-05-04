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
import { useState } from "react";
import clsx from "clsx";
import "./RegisterUser.css";
import userServices from "../../services/user";

const RegisterUser = (props) => {
  const { classes } = props;
  const theme = useTheme();

  const [perfil, setPerfil] = useState("USU");
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();
  const [cargo, setCargo] = useState();
  const [area, setArea] = useState();

  const clear = () => {
    setPerfil("USU");
    setNome("");
    setEmail("");
    setTelefone("");
    setCargo("");
    setArea("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let perfilId = "";
    if (perfil === "ADM") {
      perfilId = 1;
    } else if (perfil === "GER") {
      perfilId = 2;
    } else {
      perfilId = 3;
    }

    const body = {
      usuNome: nome,
      usuEmail: email,
      usuSenha: "123",
      usuTelefone: telefone,
      usuCargo: cargo,
      usuAreaEmpresa: area,
       /* Alterações Daniel */
      usuPerfil: perfilId
    };

    var imagem = document.querySelector('#assinatura').files[0];

    var formData = new FormData();
    formData.append("usuario", JSON.stringify(body));
    formData.append("imagem", imagem);

    userServices
      .cadastrarUsuario(formData)
      /* / Alterações Daniel */
      .then((res) => clear())
      .catch((err) => console.log(err.message));
  };

  return (
    <Container style={{width: "50%"}}>
      <Grid container className={classes.grid} style={{paddingBottom: 20}}>

        {/* cabeçalho */}
        <Grid container justify="center" style={{paddingTop: 10}}>
          <Typography
            className={classes.normalText}
            style={{ paddingBottom: 30 }}
          >
            Cadastro de Usuário
          </Typography>
        </Grid>

        {/* formulario */}
        <Grid container>
          <form
            id="form"
            onSubmit={(e) => handleSubmit(e)}
            style={{ width: "100%" }}
          >
            {/* inputs */}
            <Grid item sm={11}>
              <Grid container alignItems="center" justify="center">
                {/* input nome */}
                <Grid
                  container
                  alignItems="center"
                  style={{ paddingBottom: 15 }}
                >
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
                  <Grid item xs>
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
                <Grid
                  container
                  alignItems="center"
                  style={{ paddingBottom: 15 }}
                >
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
                  <Grid item xs>
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
                <Grid
                  container
                  alignItems="center"
                  style={{ paddingBottom: 15 }}
                >
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
                  <Grid item xs>
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
                <Grid
                  container
                  alignItems="center"
                  style={{ paddingBottom: 15 }}
                >
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
                  <Grid item xs>
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
                <Grid
                  container
                  alignItems="center"
                  style={{ paddingBottom: 15 }}
                >
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
                  <Grid item xs>
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
                  <Grid item xs>
                    <RadioGroup
                      row
                      name="perfil"
                      style={{ color: "white" }}
                      onChange={(e) => setPerfil(e.target.value)}
                      value={perfil}
                    >
                      <FormControlLabel
                        style={{ paddingLeft: 5 }}
                        labelPlacement="end"
                        value="ADM"
                        control={
                          <Radio
                            className={classes.radio}
                            checkedIcon={
                              <span
                                className={clsx(
                                  classes.icon,
                                  classes.checkedIcon
                                )}
                              />
                            }
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
                            checkedIcon={
                              <span
                                className={clsx(
                                  classes.icon,
                                  classes.checkedIcon
                                )}
                              />
                            }
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
                            checkedIcon={
                              <span
                                className={clsx(
                                  classes.icon,
                                  classes.checkedIcon
                                )}
                              />
                            }
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
                      <Typography style={{ fontSize: '1.5rem', paddingRight: 20, color: 'white' }}>
                        Assinatura
                    </Typography>
                    </FormLabel>
                  </Grid>
                  <Grid item xs>
                    <input name="assinatura" accept="image/*" id="assinatura" type="file" style={{ display: "none" }} />
                    <label htmlFor="assinatura">
                      <IconButton color="primary" aria-label="upload picture" component="span" className="no-margin">
                        <ImageOutlinedIcon className={classes.uploadFile} style={{ width: 50, height: 50 }} />
                      </IconButton>
                    </label>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* button cadastrar */}
            <Grid container justify="flex-end" style={{ paddingRight: 25 }}>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                style={{ borderRadius: 18 }}
              >
                Cadastrar
              </Button>
            </Grid>

          </form>
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

    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(RegisterUser);
