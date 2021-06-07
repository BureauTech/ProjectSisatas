import { Container, Grid, Typography, withStyles } from "@material-ui/core";
import { Lock, MailOutline } from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { styles } from "../../assets/styles/Styles";
import Botao from "../../components/Login/Botao";
import InputLogin from "../../components/Login/InputLogin";
import Alerta from "../../components/Snackbar/Alerta";
import { useAutenticacao } from "../../context/Autenticacao";
import userServices from "../../services/user";

/**
 * Componente para página de alterar a senha.
 * @author Denis Lima
 * @param {any} props
 * @returns Componente de alterar a senha
 */
const EditPassword = (props) => {
  const { classes } = props;
  const { usuario } = useAutenticacao();
  const [senhaAtual, setSenhaAtual] = useState("");
  const [senhaNova, setSenhaNova] = useState("");
  const [senhaNova2, setSenhaNova2] = useState("");
  const history = useHistory();

  const [msgSucesso, setMsgSucesso] = useState(false);
  const [msgErro, setMsgErro] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Método para solicitar a recuperação da senha.
   * Caso o email esteja digitado, solicita ao servidor que confira o email.
   * Estando correto, será disparado um email para o usuário com um link para a redefinição de sua senha.
   * Informa o usuário em caso de sucesso ou erro
   * @author Denis Lima
   * @param {Event} e Recebe o evento
   * @async
   */
  const novaSenha = async (e) => {
    e.preventDefault();

    if (senhaAtual && senhaNova && senhaNova === senhaNova2) {
      try {
        const { data } = await userServices.alterarSenhaLogado(usuario.usuId, senhaNova, senhaAtual);
        if (!data.erro) {
          setMsgSucesso(data.mensagem);
          setMsgErro(false);
          setIsOpen(true);
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
      setMsgErro("Por favor, verifique se digitou corretamente");
      setMsgSucesso(false);
      setIsOpen(true);
    }
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: 30 }}>
      <Alerta isOpen={isOpen} setIsOpen={setIsOpen} sucesso={msgSucesso} erro={msgErro} />
      <Grid container className={classes.grid} justify="center">
        <Grid item xs={11} style={{ paddingTop: 20 }}>
          <Typography className={classes.normalText}>Alterar a senha</Typography>
        </Grid>
        <Grid item xs={11} style={{ paddingBottom: 20 }}>
          <form onSubmit={novaSenha}>
            <Grid container justify="center" style={{ paddingTop: 25, paddingBottom: 15 }}>
              <Grid container style={{ paddingLeft: 10 }}>
                <Typography variant="subtitle2" style={{ color: "white" }}>
                  *A senha deve conter de 8 a 30 caracteres
                </Typography>
              </Grid>
              <Grid container style={{ paddingLeft: 10 }}>
                <Typography variant="subtitle2" style={{ color: "white" }}>
                  *Uma letra maiúscula e uma letra minúscula
                </Typography>
              </Grid>
              <Grid container style={{ paddingLeft: 10 }}>
                <Typography variant="subtitle2" style={{ color: "white" }}>
                  *Um número e um símbolo especial
                </Typography>
              </Grid>
              <Grid item xs={11}>
                <InputLogin
                  required
                  label="Senha atual"
                  Icone={Lock}
                  type="password"
                  placeholder="Senha atual*"
                  id="senhaAtual"
                  value={senhaAtual}
                  setValue={setSenhaAtual}
                />
              </Grid>
              <Grid item xs={11}>
                <InputLogin
                  required
                  label="Senha nova"
                  Icone={Lock}
                  type="password"
                  placeholder="Senha nova*"
                  id="senhaNova"
                  value={senhaNova}
                  setValue={setSenhaNova}
                />
              </Grid>
              <Grid item xs={11}>
                <InputLogin
                  required
                  label="Digite a senha nova novamente"
                  Icone={Lock}
                  type="password"
                  placeholder="Senha nova*"
                  id="senhaNova2"
                  value={senhaNova2}
                  setValue={setSenhaNova2}
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

export default withStyles(styles, { withTheme: true })(EditPassword);
