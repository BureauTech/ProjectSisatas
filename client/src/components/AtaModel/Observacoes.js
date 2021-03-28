import {
  Container,
  Grid,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@material-ui/core";

const Observacoes = (props) => {
  const { observacoes } = props.dados;
  const observs = [];
  observacoes.forEach((obs, index) => observs.push(`${index + 1} - ${obs}`));
  return (
    <Container style={{ marginTop: 20, border: "1px solid black", padding: 0 }}>
      <Grid container justify="flex-start" style={{ padding: 5 }}>
        <Typography>
          <strong>Observações:</strong>
        </Typography>
        <TableContainer>
          <TableBody>
            {observs.map((obs) => (
              <TableRow>
                <TableCell style={{ padding: 0, borderBottom: "none" }}>
                  {obs}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      </Grid>
    </Container>
  );
};

export default Observacoes;
