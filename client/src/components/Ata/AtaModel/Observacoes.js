import { Container, Grid, TableBody, TableContainer, Typography } from "@material-ui/core";

/**
 * @author Denis Lima
 * @param {any} props 
 * @returns Componente com as observações no modelo de Ata em PDF
 */
const Observacoes = (props) => {
  const { observacoes } = props.dados;
  return (
    <Container style={{ marginTop: 20, border: "1px solid black", padding: 0 }}>
      <Grid container justify="flex-start" style={{ padding: 5 }}>
        <Typography>
          <strong>Observações:</strong>
        </Typography>
        <TableContainer>
          <TableBody className="breakline">{observacoes}</TableBody>
        </TableContainer>
      </Grid>
    </Container>
  );
};

export default Observacoes;
