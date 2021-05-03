import {
  Container,
  Grid,
  TableBody,
  TableCell,
  TableContainer,
  Typography,
} from "@material-ui/core";

const Pauta = (props) => {
  const { pauta } = props.dados;
  return (
    <Container style={{ marginTop: 20, padding: 0 }}>
      <Grid style={{ border: "1px solid black" }}>
        <Typography className="blue" style={{ backgroundColor: "#c6d9f1" }}>
          <strong>PAUTA</strong>
        </Typography>
      </Grid>
      <Grid style={{ border: "1px solid black", borderTop: "none" }}>
        <TableContainer>
          <TableBody>
            <TableCell style={{ padding: "5px 20px" }}>{pauta}</TableCell>
          </TableBody>
        </TableContainer>
      </Grid>
    </Container>
  );
};

export default Pauta;
