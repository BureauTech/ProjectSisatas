import { Container, Grid, withStyles, Typography } from "@material-ui/core";
import { Lock } from "@material-ui/icons";
import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import { styles } from "../../assets/styles/Styles";
import Loading from "../../pages/Loading/Loading";
import userServices from "../../services/user";
import Botao from "../Login/Botao";
import InputLogin from "../Login/InputLogin";
import Alerta from "../Snackbar/Alerta";
import "./RegisterPassword.css";

/**
 * Componente para página de cadastro de senha.
 * Ao entrar, é necessário pegar o token que virá por meio da URL.
 * O token precisa ser validado com o servidor para garantir que o mesmo é válido e único.
 *
 * @author Denis Lima
 * @param {any} props
 * @returns Componente de cadastro de senha
 */

const RegisterPassword = (props) => {
  const { classes } = props;
  const [tokenValido, setTokenValido] = useState(false);
  const [loading, setLoading] = useState(true);
  const [msgSucesso, setMsgSucesso] = useState(false);
  const [msgErro, setMsgErro] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [senha, setSenha] = useState("");
  const [senha2, setSenha2] = useState("");

  const history = useHistory();

  // Redireciona o usuário para a página de login
  const redirectDelay = () => {
    setTimeout(() => history.push("/login"), 3000);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("usu_token");

    // Caso não tenha token na URL, informa o usuário e redirecionar para o login
    if (!token) {
      setLoading(false);
      setMsgErro("Não encontrei seus dados, por favor, solicite uma nova redefinição de senha!");
      setMsgSucesso(false);
      setIsOpen(true);
      redirectDelay();
    }

    // Validação do token antes do componente ser montado
    userServices
      .validadorToken(token)
      .then((r) => {
        if (!r.data) {
          setLoading(false);
          setMsgErro("Não encontrei seus dados, por favor, solicite uma nova redefinição de senha!");
          setMsgSucesso(false);
          setIsOpen(true);
          redirectDelay();
        } else {
          setLoading(false);
          setTokenValido(token);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setMsgErro("Ocorreu um erro na requisição, por favor, solicite uma nova redefinição de senha!");
        setMsgSucesso(false);
        setIsOpen(true);
        redirectDelay();
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Método para cadastrar senha.
   * Chamado ao clicar no botão de enviar.
   * Verifica se as senhas são iguais, caso não sejam, informa o usuário.
   * Requisita ao servidor a troca de senha, informando a nova senha e o token.
   * Em caso de sucesso ou erro, informa o usuário e redireciona para a página de Login.
   * @author Denis Lima
   * @param {Event} e Recebe o evento
   */
  const cadastrarSenha = (e) => {
    e.preventDefault();
    if (tokenValido) {
      if (senha === senha2) {
        userServices
          .alterarSenha(tokenValido, senha)
          .then((r) => {
            const { data } = r;
            if (!data.erro) {
              setMsgErro(false);
              setMsgSucesso(data.mensagem);
              setIsOpen(true);
              redirectDelay();
            } else {
              setMsgErro(data.mensagem);
              setMsgSucesso(false);
              setIsOpen(true);
              redirectDelay();
            }
          })
          .catch((err) => {
            console.log(err);
            setMsgErro("Ocorreu um erro na requisição, por favor, solicite uma nova redefinição de senha!");
            setMsgSucesso(false);
            setIsOpen(true);
            redirectDelay();
          });
      } else {
        setMsgErro("As senhas estão diferentes!");
        setMsgSucesso(false);
        setIsOpen(true);
      }
    }
  };

  return (
    <Container maxWidth="xs">
      <Alerta isOpen={isOpen} setIsOpen={setIsOpen} sucesso={msgSucesso} erro={msgErro} />
      {loading && <Loading />}

      <Grid container className={classes.grid} justify="center">
        <Grid item xs={11} style={{ paddingTop: 20 }}>
          <Typography className={classes.normalText}>Cadastrar senha</Typography>
        </Grid>
        <Grid item xs={11} style={{ paddingBottom: 20 }}>
          <form onSubmit={cadastrarSenha}>
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
                  label="Digite sua senha"
                  Icone={Lock}
                  type="password"
                  placeholder="Senha*"
                  id="pw"
                  value={senha}
                  setValue={setSenha}
                />
              </Grid>
              <Grid item xs={11}>
                <InputLogin
                  required
                  label="Digite novamente"
                  Icone={Lock}
                  type="password"
                  placeholder="Senha*"
                  id="pw2"
                  value={senha2}
                  setValue={setSenha2}
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

export default withStyles(styles, { withTheme: true })(RegisterPassword);
