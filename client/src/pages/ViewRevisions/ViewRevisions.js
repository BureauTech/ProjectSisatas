import {
  Button,
  Container,
  Grid,
  useTheme,
} from "@material-ui/core";

import ViewRevisionsComponent from "../../components/ViewRevisionsComponent/ViewRevisionsComponent";
import "./Style.css";

const ViewRevisions = (props) => {
  const theme = useTheme();

  return (
    <Container>
      <form>
        <Grid container style={{ marginBottom: 10 }}>
          <ViewRevisionsComponent />
        </Grid>
        <Grid container justify="space-between" style={{ padding: 24 }}>
          <Button
            variant="contained"
            className="bold"
            style={{
              backgroundColor: "white",
              color: theme.palette.secondary.main,
              fontWeight: 700,
              fontSize: "1.5rem",
              borderRadius: 20,
              padding: "0 30px",
            }}
          >
            Voltar
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default ViewRevisions;
