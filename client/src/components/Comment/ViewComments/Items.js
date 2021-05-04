import { Grid, Typography, withStyles } from "@material-ui/core";
import { styles } from "../../../assets/styles/Styles";

const ResponsibleItem = (props) => {
  const { classes, theme, text1, text2, xs1, xs } = props;
  return (
    <Grid item xs={xs1} style={{ marginBottom: 15, marginTop: 15 }}>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Typography className={classes.normalText} style={{ fontSize: "1.5rem", margin: "0px 25px" }}>
            {text1}
          </Typography>
        </Grid>
        {!xs && (
          <Grid item xs style={{ backgroundColor: theme.palette.secondary.main, borderRadius: 15 }}>
            <Typography className={classes.normalText} style={{ padding: 5, paddingLeft: 15, fontSize: "1.5rem" }}>
              <strong>{text2}</strong>
            </Typography>
          </Grid>
        )}
        {xs && (
          <Grid item xs={xs} style={{ backgroundColor: theme.palette.secondary.main, borderRadius: 15 }}>
            <Typography className={classes.normalText} style={{ padding: 5, paddingLeft: 15, fontSize: "1.5rem" }}>
              <strong>{text2}</strong>
            </Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles, { withTheme: true })(ResponsibleItem);
