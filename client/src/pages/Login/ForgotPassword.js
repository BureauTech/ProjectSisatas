import { Container, Grid, Typography, withStyles } from "@material-ui/core";
import { MailOutline } from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { styles } from "../../assets/styles/Styles";
import Botao from "../../components/Login/Botao";
import InputLogin from "../../components/Login/InputLogin";
import Alerta from "../../components/Snackbar/Alerta";
import { useAutenticacao } from "../../context/Autenticacao";
import emailServices from "../../services/email";
import userServices from "../../services/user";

/**
 *
 * @param {any} props
 * @returns Componente de Esqueci a senha
 *
 * Componente para página de Esqueci minha senha.
 * Caso o usuário esteja logado, redireciona para a página principal.
 * Envia um email para o usuário com o link de redefinição de senha caso seu email esteja cadastrado no sistema.
 *
 */
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

  /**
   * @author Denis Lima
   * @param {Event} e Recebe o evento
   * @async
   * Método para solicitar a recuperação da senha.
   * Caso o email esteja digitado, solicita ao servidor que confira o email.
   * Estando correto, será disparado um email para o usuário com um link para a redefinição de sua senha.
   * Informa o usuário em caso de sucesso ou erro
   *
   */
  const recuperarSenha = async (e) => {
    e.preventDefault();

    if (email) {
      try {
        const { data } = await userServices.solicitarAlteracaoSenha(email);
        if (!data.erro) {
          var body = [
            {
                userEnviar: "Noreply.bureautech",
                senhaEnviar: "bureautech",
                emailEnviar: "noreply.bureautech@gmail.com",
                nomeEnviar: "Sisatas",
                emailReceber: email,
                nomeReceber: "",         
                linkSenha : `http://localhost:3000/cadastrar-senha?usu_token=${data.data}`
              }]
      
              emailServices
                .esqueciSenha(body)
                .then(res => {
                  console.log("email enviado\nresp: " + res.data)
                  console.log("email env: " + JSON.stringify(body))
                })
                .catch(err => {
                  console.log("não foi o email\nerr: " + err)
                })

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
      setMsgErro("Por favor, digite seu email");
      setMsgSucesso(false);
      setIsOpen(true);
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
