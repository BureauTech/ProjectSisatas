import {
  Container,
  Grid,
  TextareaAutosize,
  withStyles,
} from "@material-ui/core";
import { styles } from "../../assets/styles/Styles";

const Register = (props) => {
  const { classes } = props;

  return (
    <Container>
      <Grid container className={classes.grid} style={{ padding: 20 }}>
        <Grid item xs={12}>
          <Grid container>
            <TextareaAutosize/>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(Register);