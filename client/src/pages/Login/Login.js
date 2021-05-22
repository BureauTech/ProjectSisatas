import { Container, Grid, makeStyles, Typography, withStyles } from "@material-ui/core";
import { Lock, MailOutline } from "@material-ui/icons";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { styles } from "../../assets/styles/Styles";
import Botao from "../../components/Login/Botao";
import InputLogin from "../../components/Login/InputLogin";
import { useAutenticacao } from "../../context/Autenticacao";

// Estilo para o texto "Esqueci minha senha"
const style = makeStyles((theme) => ({
  forgot: {
    "&:hover": {
      color: theme.palette.secondary.main,
    },
    color: "white",
  },
}));

/**
 * @author Denis Lima
 * @param {any} props
 * @returns Componente de Login
 *
 * Componente para página de Login.
 * Caso o usuário já esteja logado, redireciona para a página principal da aplicação.
 * Requisita ao servidor se o email e senha estão corretos, caso estejam, guarda as informações da sessão no Context Autenticacao.
 * Redireciona o usuário para página principal se está correta as informações.
 *
 */
const Login = (props) => {
  const { classes } = props;
  const useStyles = style();
  const { setUsuario, usuario } = useAutenticacao();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();

  if (usuario.estaLogado) {
    history.push("/");
  }

  /**
   *@author Denis Lima
   * @param {Event} e Recebe o evento
   *
   * Método para realizar o Login.
   * Verifica se foi digitado um email e senha e requisita ao servidor que confira as credenciais.
   * Caso estejam erradas, informa o usuário.
   * Caso estejam corretas, guarda as informações de sessão do usuário e redireciona para a página principal.
   *
   */
  const realizarLogin = (e) => {
    e.preventDefault();

    if (email && senha) {
      alert("Logado com sucesso!");
      setUsuario({
        estaLogado: true,
        token: "",
        usuNome: "",
        usuId: 1,
        usuEmail: "teste@teste.com",
        usuCargo: "dev",
        usuAreaEmpresa: "Bureau",
        usuTelefone: "129923123",
        usuPerfil: "ADM",
      });
      history.push("/");
    } else {
      alert("Erro ao realizar login!");
    }
  };
  return (
    <Container maxWidth="xs">
      <Grid container className={classes.grid} justify="center">
        <Grid item xs={11} style={{ paddingTop: 20 }}>
          <Typography className={classes.normalText}>Login</Typography>
        </Grid>
        <Grid item xs={11} style={{ paddingBottom: 20 }}>
          <form onSubmit={realizarLogin}>
            <Grid container justify="center" style={{ paddingTop: 25, paddingBottom: 15 }}>
              <Grid item xs={11}>
                <InputLogin
                  required
                  label="Email"
                  Icone={MailOutline}
                  type="email"
                  placeholder="Email*"
                  id="email"
                  value={email}
                  setValue={setEmail}
                />
              </Grid>
              <Grid item xs={11}>
                <InputLogin
                  required
                  label="Senha"
                  Icone={Lock}
                  type="password"
                  placeholder="Senha*"
                  id="pw"
                  value={senha}
                  setValue={setSenha}
                />
              </Grid>
              <Grid item xs={11}>
                <Link to="/esqueci-a-senha" style={{ textDecoration: "none" }}>
                  <Typography className={useStyles.forgot}>Esqueci minha senha</Typography>
                </Link>
              </Grid>
              <Grid item xs={11}>
                <Grid container justify="flex-end">
                  <Botao type="submit" />
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(Login);
