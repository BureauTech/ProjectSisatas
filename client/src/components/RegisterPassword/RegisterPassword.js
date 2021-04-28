import {
  Container,
  Grid,
  withStyles,
  Typography,
  FormLabel,
  Input,
  Button, IconButton
} from "@material-ui/core";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import { styles } from "../../assets/styles/Styles";
import "./RegisterPassword.css";

const RegisterPassword = (props) => {
  const { classes } = props;

  return (
    <Container style={{width: "35%"}}>
      <Grid className={classes.grid}>

        {/* cabeçalho */}
        <Grid container>
          <Typography
            className={classes.normalText}
            style={{ paddingBottom: 20, paddingTop: 10}}
          >
            Cadastrar Senha
          </Typography>
        </Grid>

        {/* formulario */}
        <Grid container style={{paddingBottom: 20}}>
          <form
            id="form"
            style={{ width: "90%", paddingLeft: 20}}
          >
            {/* inputs */}
            <Grid item>
              <Grid container alignItems="center">

                {/* input senha */}
                <Grid item>
                    <FormLabel htmlFor="nome">
                      <Typography
                        style={{
                          fontSize: "1.5rem",
                          paddingRight: 20,
                          color: "white",
                        }}
                      >
                        Digite sua senha
                      </Typography>
                    </FormLabel>
                  </Grid>

                <Grid
                  container
                  alignItems="center"
                  style={{ paddingBottom: 15 }}
                >
                  <Grid item xs>
                    <Input
                      type="password"
                      required
                      name="senha"
                      id="senha"
                      className={classes.textField}
                      disableUnderline
                    />
                  </Grid>
                </Grid>

                {/* input senha novamente */}
                <Grid item>
                    <FormLabel htmlFor="nome">
                      <Typography
                        style={{
                          fontSize: "1.5rem",
                          paddingRight: 20,
                          color: "white",
                        }}
                      >
                        Digite novamente
                      </Typography>
                    </FormLabel>
                  </Grid>

                <Grid
                  container
                  alignItems="center"
                  style={{ paddingBottom: 15 }}
                >
                  <Grid item xs>
                    <Input
                      required
                      type="password"
                      name="senhaNovamente"
                      id="senhaNovamente"
                      className={classes.textField}
                      disableUnderline
                    />
                  </Grid>
                </Grid>

                {/* button cadastrar */}
                <Grid container justify="flex-end">
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    style={{ borderRadius: 18, padding: 0}}
                  >
                    <ArrowRightAltIcon style={{width: 90, height: 30}} />
                  </Button>
                </Grid>

              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>

    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(RegisterPassword);
