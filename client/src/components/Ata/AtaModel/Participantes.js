import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

/**
 * @author Denis Lima
 * @param {any} props 
 * @returns Componente para o tema da pauta e a listagem de participantes da Ata no modelo de Ata em PDF
 */
const Participantes = (props) => {
  const { tema, listaParticipantes } = props.dados;
  return (
    <Container style={{ border: "1px solid black", padding: 0 }}>
      <Grid container>
        <Grid container>
          <Typography display="inline" style={{ paddingTop: 5, paddingLeft: 10 }}>
            <strong>Projeto: </strong>
            {tema}
          </Typography>
        </Grid>
      </Grid>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ paddingTop: 5, paddingBottom: 5 }}>
                <strong>Participante</strong>
              </TableCell>
              <TableCell style={{ paddingTop: 5, paddingBottom: 5 }}>
                <strong>Área</strong>
              </TableCell>
              <TableCell style={{ paddingTop: 5, paddingBottom: 5 }}>
                <strong>E-mail</strong>
              </TableCell>
              <TableCell style={{ paddingTop: 5, paddingBottom: 5 }}>
                <strong>Telefone</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listaParticipantes.map((participante) => (
              <TableRow>
                <TableCell
                  style={{
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingRight: 5,
                    fontSize: "10pt",
                  }}
                >
                  {participante.usuCargo} - {participante.usuNome}
                </TableCell>
                <TableCell
                  style={{
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingRight: 5,
                    fontSize: "10pt",
                  }}
                >
                  {participante.usuAreaEmpresa}
                </TableCell>
                <TableCell
                  style={{
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingRight: 5,
                    fontSize: "10pt",
                  }}
                >
                  {participante.usuEmail}
                </TableCell>
                <TableCell
                  style={{
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingRight: 5,
                    fontSize: "10pt",
                  }}
                >
                  {participante.usuTelefone}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Participantes;
