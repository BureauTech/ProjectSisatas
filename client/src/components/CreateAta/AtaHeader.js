import {
  Container,
  Grid,
  withStyles,
  Typography,
  FormLabel,
  Input,
} from "@material-ui/core";
import { Component } from "react";

// Alterando css de componentes
const styles = (theme) => ({
  grid: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "20px",
    padding: 5,
  },
  textField: {
    backgroundColor: "white",
    borderRadius: "10px",
    color: "black",
    width: "100%",
    paddingLeft: "0.4rem",
  },
  biggerText: {
    color: "white",
    fontFamily: "Montserrat",
    fontSize: "2.5rem",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "3.0625rem",
    letterSpacing: "0em",
    textAlign: "left",
  },
  normalText: {
    color: "white",
    fontFamily: "Montserrat",
    fontSize: "1.875rem",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "2rem",
    letterSpacing: "0em",
    textAlign: "left",
  },
  rowMargin: {
    margin: 20,
  },
});

class AtaHeader extends Component {
  render() {
    const { classes, ata } = this.props;

    return (
      <Container>
        <Grid container>
          <Typography>Cabeçalho</Typography>
          <Grid
            container
            className={classes.grid}
            alignItems="center"
            justify="space-evenly"
          >
            {/* LATERAL ESQUERDA (NÚMERO DA ATA)*/}
            <Grid item sm={10} lg={4}>
              <Grid container justify="center">
                <Grid container justify="center">
                  <Typography className={classes.biggerText}>
                    ATA Nº:
                  </Typography>
                </Grid>
                <Grid container justify="center">
                  <Typography className={classes.biggerText}>
                    {ata.id}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* CONTEINER DA DIREITA (INPUTS)*/}
            <Grid item xs={12} sm={10} md={8} lg={8}>
              <Grid item xs={11} lg={10}>
                {/* ROW DATA INÍCIO */}
                <Grid container className={classes.rowMargin}>
                  <Grid item lg={3}>
                    <FormLabel className={classes.normalText}>
                      Data Início
                    </FormLabel>
                  </Grid>
                  <Grid item xs={12} lg={7}>
                    <Grid container justify="space-between">
                      <Grid item xs={7} lg={5}>
                        <Input
                          className={classes.textField}
                          disableUnderline
                          type="date"
                        ></Input>
                      </Grid>
                      <Grid xs={4} lg={5}>
                        <Input
                          className={classes.textField}
                          disableUnderline
                          type="time"
                        ></Input>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {/* ROW DATA FINAL */}
                <Grid container className={classes.rowMargin}>
                  <Grid item lg={3}>
                    <FormLabel className={classes.normalText}>
                      Data Final
                    </FormLabel>
                  </Grid>
                  <Grid item xs={12} lg={7}>
                    <Grid container justify="space-between">
                      <Grid item xs={7} lg={5}>
                        <Input
                          className={classes.textField}
                          disableUnderline
                          type="date"
                        ></Input>
                      </Grid>
                      <Grid item xs={4} lg={5}>
                        <Input
                          className={classes.textField}
                          disableUnderline
                          type="time"
                        ></Input>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {/* ROW LOCAL */}
                <Grid container className={classes.rowMargin}>
                  <Grid item lg={2} xs={10}>
                    <FormLabel className={classes.normalText}>Local</FormLabel>
                  </Grid>
                  <Grid item xs={12} lg={8}>
                    <Input
                      className={classes.textField}
                      disableUnderline
                      type="text"
                    ></Input>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AtaHeader);
