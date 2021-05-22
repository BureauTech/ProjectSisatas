import { Container, Grid, Typography, withStyles } from "@material-ui/core";
import { MailOutline } from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { styles } from "../../assets/styles/Styles";
import Botao from "../../components/Login/Botao";
import InputLogin from "../../components/Login/InputLogin";
import Alerta from "../../components/Snackbar/Alerta";
import { useAutenticacao } from "../../context/Autenticacao";
import userServices from "../../services/user";

const ForgotPassword = (props) => {
  const { classes } = props;
  const { usuario } = useAutenticacao();
  const [email, setEmail] = useState("");
  const history = useHistory();

  const [msgSucesso, setMsgSucesso] = useState(false);
  const [msgErro, setMsgErro] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  if (usuario.estaLogado) {
    history.push("/");
  }

  const recuperarSenha = async (e) => {
    e.preventDefault();

    if (email) {
      try {
        const { data } = await userServices.solicitarAlteracaoSenha(email);
        if (!data.erro) {
          setMsgSucesso(data.mensagem + " Por favor, confira seu email.");
          setMsgErro(false);
          setIsOpen(true);
          console.log(data);
        } else {
          setMsgErro(data.mensagem);
          setMsgSucesso(false);
          setIsOpen(true);
        }
      } catch (error) {
        console.log(error);
        setMsgErro("Ocorreu um erro na requisição");
        setMsgSucesso(false);
        setIsOpen(true);
      }
    } else {
      alert("Erro ao realizar login!");
    }
  };
  return (
    <Container maxWidth="xs">
      <Alerta isOpen={isOpen} setIsOpen={setIsOpen} sucesso={msgSucesso} erro={msgErro} />
      <Grid container className={classes.grid} justify="center">
        <Grid item xs={11} style={{ paddingTop: 20 }}>
          <Typography className={classes.normalText}>Recuperar a senha</Typography>
        </Grid>
        <Grid item xs={11} style={{ paddingBottom: 20 }}>
          <form onSubmit={recuperarSenha}>
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

export default withStyles(styles, { withTheme: true })(ForgotPassword);
