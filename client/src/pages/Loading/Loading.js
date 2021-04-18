import { CircularProgress, Dialog, Grid } from "@material-ui/core";
import "./Loading.css";

const Loading = () => {
  return (
    <Dialog open className="invisible">
      <Grid
        container
        justify="center"
        style={{ width: "6rem", height: "6rem" }}
      >
        <CircularProgress style={{ width: "4rem", height: "4rem" }} />
      </Grid>
    </Dialog>
  );
};

export default Loading;
