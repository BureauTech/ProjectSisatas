import { Container, Grid, Table, TableBody, TableCell, TableContainer, Typography } from "@material-ui/core";

/**
 * @author Denis Lima
 * @param {any} props 
 * @returns Componente com a Pauta da Ata no modelo de Ata em PDF
 */
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
        <Table>
          <TableContainer>
            <TableBody>
              <TableCell className="breakline" style={{ padding: "5px 20px" }}>
                {pauta}
              </TableCell>
            </TableBody>
          </TableContainer>
        </Table>
      </Grid>
    </Container>
  );
};

export default Pauta;
