import {
  Container,
  Grid,
  TextareaAutosize,
  withStyles,
} from "@material-ui/core";
import { useState } from "react";
import { styles } from "../../assets/styles/Styles";
import "./Components.css";

const Pauta = (props) => {
  const { classes } = props;
  const [pauta, setPauta] = useState("");

  return (
    <Container>
      <Grid container className={classes.grid} style={{ padding: 20 }}>
        <Grid item xs={12}>
          <Grid container>
            <TextareaAutosize
              rowsMin={5}
              rowsMax={5}
              value={pauta}
              onChange={(e) => setPauta(e.target.value)}
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

export default withStyles(styles, { withTheme: true })(Pauta);
