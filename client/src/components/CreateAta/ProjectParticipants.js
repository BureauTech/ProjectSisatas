import {
  Container,
  FormLabel,
  Grid,
  Input,
  withStyles,
} from "@material-ui/core";
import { Component } from "react";
import "./Components.css";

// Alterando css de componentes
const styles = (theme) => ({
  grid: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "20px",
    padding: 15,
    paddingLeft: 25,
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

class ProjectParticipants extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Container>
        <Grid container className={classes.grid}>
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            spacing={2}
            style={{ marginBottom: 10 }}
          >
            <FormLabel className={classes.normalText}>Projeto</FormLabel>
            <Grid item xs={12} sm={4} md={4}>
              <Input className={classes.textField} disableUnderline />
            </Grid>
          </Grid>
          <Grid container justify="space-between">
            <Grid container justify="flex-start">
              <Grid item xs={12} sm={5} md={3} className="inputsGrid">
                <FormLabel className={classes.normalText}>
                  Participante
                </FormLabel>
                <Grid item md={11}>
                  <Input className={classes.textField} disableUnderline />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={5} md={3} className="inputsGrid">
                <FormLabel className={classes.normalText}>Área</FormLabel>
                <Grid item md={11}>
                  <Input className={classes.textField} disableUnderline />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={5} md={3} className="inputsGrid">
                <FormLabel className={classes.normalText}>Telefone</FormLabel>
                <Grid item md={11}>
                  <Input className={classes.textField} disableUnderline />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={5} md={3} className="inputsGrid">
                <FormLabel className={classes.normalText}>E-mail</FormLabel>
                <Grid item md={11}>
                  <Input className={classes.textField} disableUnderline />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ProjectParticipants);
