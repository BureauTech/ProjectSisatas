import {
  Container,
  Grid,
  TextareaAutosize,
  withStyles,
  Typography
} from "@material-ui/core";
import { styles } from "../../assets/styles/Styles";
import "./Components.css";

const RevisionSubject = (props) => {
  const { classes } = props;

  return (
    <Container>
      <Grid container style={{ marginBottom: 10 }}>
        <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>
          Assunto da Revisão
          </Typography>
      </Grid>
      <Grid container className={classes.grid} style={{ padding: 20 }}>
        <Grid item xs={12}>
          <Grid container>
            <TextareaAutosize
              rowsMin={8}
              rowsMax={8}
              style={{
                width: "100%",
                fontSize: "1.8rem",
                borderBottomLeftRadius: "20px",
                borderTopLeftRadius: "20px",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(RevisionSubject);
