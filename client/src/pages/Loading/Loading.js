import { CircularProgress, Container, Grid } from "@material-ui/core";

const Loading = () => {
  return (
    <Container>
      <Grid container justify="center">
        <CircularProgress style={{ width: "4rem", height: "4rem" }} />
      </Grid>
    </Container>
  );
};

export default Loading;
