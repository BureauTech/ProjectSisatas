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
  console.log(props, observacoes)
  return (
    <Container style={{ marginTop: 20, border: "1px solid black", padding: 0 }}>
      <Grid container justify="flex-start" style={{ padding: 5 }}>
        <Typography>
          <strong>Observações:</strong>
        </Typography>
        <TableContainer>
          <TableBody>
            <Typography>{observacoes}</Typography>
          </TableBody>
        </TableContainer>
      </Grid>
    </Container>
  );
};

export default Observacoes;
