import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";

/**
 * @author Denis Lima
 * @param {any} props 
 * @returns Componente para lista de assuntos no modelo de Ata em PDF
 */
const Assunto = (props) => {
  const { assuntos } = props.dados;

  const formatDate = (date) => {
    const data = new Date(date).toLocaleDateString();
    return data;
  };

  return (
    <Container style={{ marginTop: 20, padding: 0 }}>
      <TableContainer>
        <Table style={{ borderCollapse: "collapse" }} size="small">
          <TableHead>
            <TableRow className="blue" style={{ backgroundColor: "#c6d9f1" }}>
              <TableCell
                align="center"
                style={{
                  padding: 5,
                  border: "1px solid black",
                  height: 5,
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
              >
                <strong>ID</strong>
              </TableCell>
              <TableCell
                align="center"
                style={{
                  border: "1px solid black",
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
              >
                <strong>ASSUNTO</strong>
              </TableCell>
              <TableCell
                align="center"
                style={{
                  border: "1px solid black",
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
              >
                <strong>RESPONSÁVEL</strong>
              </TableCell>
              <TableCell
                align="center"
                style={{
                  border: "1px solid black",
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
              >
                <strong>PRAZO</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assuntos &&
              assuntos.map((dados, index) => (
                <TableRow>
                  <TableCell
                    style={{
                      width: "5%",
                      padding: 5,
                      border: "1px solid black",
                    }}
                  >
                    {index + 1}.
                  </TableCell>
                  <TableCell
                    style={{
                      width: "55%",
                      padding: 5,
                      border: "1px solid black",
                    }}
                  >
                    {dados.assAssunto}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      width: "25%",
                      padding: 5,
                      border: "1px solid black",
                    }}
                  >
                    {dados.responsavelAssuntos[0].usuNome}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      width: "25%",
                      padding: 5,
                      border: "1px solid black",
                    }}
                  >
                    {formatDate(dados.assPrazo)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Assunto;
