import { Container, Grid, TextareaAutosize, withStyles } from "@material-ui/core";
import { styles } from "../../../assets/styles/Styles";
import "./Components.css";

const TextareaView = (props) => {
  const { classes, infoValue, id } = props;

  return (
    <Container>
      <Grid container className={classes.grid} style={{ padding: 20 }}>
        <Grid item xs={12}>
          <Grid container>
            <TextareaAutosize
              disabled
              rowsMax={15}
              id={id}
              value={infoValue}
              style={{
                width: "100%",
                fontSize: "1.8rem",
                borderBottomLeftRadius: "20px",
                borderTopLeftRadius: "20px",
                color: "white",
                paddingLeft: 10,
                paddingBottom: 20,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(TextareaView);
