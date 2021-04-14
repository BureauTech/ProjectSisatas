import {
  Button,
  Container,
  FormLabel,
  Grid,
  IconButton,
  Input,
  Typography,
  withStyles,
} from "@material-ui/core";
import { styles } from "../../assets/styles/Styles";
import logo from "../../assets/images/BureauTechFundoBranco-01.png";
import "../CreateAta/Style.css";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";

const EditUser = (props) => {
  const { classes } = props;
  return (
    <Container>
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
                  className={classes.textField}
                  disableUnderline
                />
              </Grid>
            </Grid>

            {/* input perfil */}
            <Grid container alignItems="center" style={{ paddingBottom: 50 }}>
              <Grid item>
                <FormLabel htmlFor="perfil">
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
                <Input
                  required
                  name="perfil"
                  id="perfil"
                  className={classes.textField}
                  style={{ backgroundColor: "lightgray" }}
                  disableUnderline
                  disabled
                />
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
                />
                <label htmlFor="assinatura">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    className="no-margin"
                  >
                    <ImageOutlinedIcon
                      className={classes.uploadFile}
                      style={{ width: 100, height: 100 }}
                    />
                  </IconButton>
                </label>
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
                  Salvar Alterações
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(EditUser);
