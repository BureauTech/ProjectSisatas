import {
  Container,
  FormLabel,
  Grid,
  Input,
  withStyles,
} from "@material-ui/core";
import { Component } from "react";
import "./Components.css";
import { styles } from "../../assets/styles/Styles";
import ParticipantsRow from "./ParticipantsRow";

// Alterando css de componentes

class ProjectParticipants extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Container>
        <Grid container className={classes.grid}>
          <Grid item xs={12}>
            <Grid
              container
              justify="flex-start"
              alignItems="center"
              style={{ marginBottom: 30 }}
            >
              <FormLabel className={classes.normalText}>Projeto</FormLabel>
              <Grid item xs={12} sm={5} md={4}>
                <Input className={classes.textField} disableUnderline />
              </Grid>
            </Grid>
            <ParticipantsRow />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ProjectParticipants);
