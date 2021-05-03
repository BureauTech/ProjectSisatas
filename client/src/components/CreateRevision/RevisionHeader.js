import {
  Container,
  Grid,
  withStyles,
  Typography,
  FormLabel,
  Input,
} from "@material-ui/core";
import "./Components.css";
import { styles } from "../../assets/styles/Styles";

// Alterando css de componentes

const RevisionHeader = (props) => {
  const { classes } = props;

  return (
    <Container>
      <Grid container style={{ marginBottom: 10 }}>
        <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>
          Cabeçalho
          </Typography>
      </Grid>
      <Grid container>
        <Grid
          container
          className={classes.grid}
          alignItems="center"
          justify="space-evenly"
          style={{ paddingTop: 15, paddingBottom: 15 }}
        >
          {/* LATERAL ESQUERDA (NÚMERO DA REVISÃO)*/}
          <Grid item sm={10} md={3} lg={4}>
            <Grid container justify="center">
              <Grid container justify="center">
                <Typography className={classes.biggerText}>Revisão Nº:</Typography>
              </Grid>
              <Grid container justify="center">
                <Typography className={classes.biggerText}>02</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* CONTEINER DA DIREITA (INFOS)*/}
          <Grid item xs={12} sm={10} md={5} lg={4}>
            <Grid item xs={11} md={10} lg={12}>
              {/* ROW ATA REF */}
              <Grid container className={classes.rowMargin}>
                <Grid item md={4} lg={4}>
                  <FormLabel className={classes.normalText}>
                    Ata Ref.
                  </FormLabel>
                </Grid>
                <Grid item xs={12} md={8} lg={6} >
                  <Grid container justify="space-between">
                    <Grid item xs={7} md={6} lg={5}>
                      <FormLabel className={classes.normalText}>
                        <strong>01/21</strong>
                      </FormLabel>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* ROW PRAZO */}
              <Grid container className={classes.rowMargin}>
                <Grid item md={4} lg={4}>
                  <FormLabel className={classes.normalText}>
                    Prazo
                  </FormLabel>
                </Grid>
                <Grid item xs={12} md={8} lg={8}>
                  <Grid container justify="space-between">
                    <Grid item xs={7} md={8} lg={8}>
                      <Input
                        className={classes.textField}
                        disableUnderline
                        type="date"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={10} md={4} lg={4}>
            <Grid item xs={11} md={10} lg={12}>
              {/* ROW RESPONSAVEL*/}
              <Grid container className={classes.rowMargin}>
                <Grid item md={4} lg={4}>
                  <FormLabel className={classes.normalText}>
                    Responsável
                  </FormLabel>
                </Grid>
              </Grid>
              <Grid container className={classes.rowMargin}>
                <Grid item xs={10} md={12} lg={12}>
                  <FormLabel className={classes.normalText}><strong>Fulano da Silva</strong></FormLabel>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(RevisionHeader);
