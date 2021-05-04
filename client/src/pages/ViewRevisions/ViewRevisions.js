import {
  Button,
  Container,
  Grid,
  useTheme,
} from "@material-ui/core";

import { Link } from "react-router-dom";

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
        <Link to="/ata" style={{ textDecoration: 'none' }}>
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
        </Link>
      </form>
    </Container>
  );
};

export default ViewRevisions;
