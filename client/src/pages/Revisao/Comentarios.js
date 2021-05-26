import { Button, Container, Grid, Typography, useTheme } from "@material-ui/core";

import Campo from "../../components/Comentarios/Comentarios";
import { useState } from "react";
import "./Style.css";
import ataServices from "../../services/comentarios";

/*
 * @author Charles Ramos
 * @param {any} props
 * 
 * @returns Cadastro de comentários em uma revisão.
 *
 * Cadastro de comentários em uma revisão que foi recusada.
*/

const CreateComentario = (props) => {
  const theme = useTheme();

  const [newNewComentario, setNewNewComentario] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      comDescricao: newNewComentario,
      contemRevisao: 1, //precisa ser mexido ainda
    };
    try {
      ataServices.salvarComentario(body);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid container style={{ marginBottom: 10 }}>
          <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>Comentários</Typography>
          <Campo setNewComentario={setNewNewComentario} commmm={newNewComentario} />
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
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className="bold"
            type="submit"
            style={{
              color: "white",
              fontSize: "1.5rem",
              borderRadius: 20,
              padding: "0 30px",
            }}
          >
            Comentar
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default CreateComentario;
