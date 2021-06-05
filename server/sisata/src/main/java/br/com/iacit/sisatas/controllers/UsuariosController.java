package br.com.iacit.sisatas.controllers;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.iacit.sisatas.conversor.Conversor;
import br.com.iacit.sisatas.mapper.UsuarioMapper;
import br.com.iacit.sisatas.models.UsuariosModel;
import br.com.iacit.sisatas.projections.UsuariosProjectionDataGrid;
import br.com.iacit.sisatas.projections.UsuariosProjectionLogin;
import br.com.iacit.sisatas.projections.UsuariosProjectionParticipante;
import br.com.iacit.sisatas.projections.UsuariosProjectionPerfil;
import br.com.iacit.sisatas.repository.UsuariosRepository;
import br.com.iacit.sisatas.returns.MessageReturn;

@Controller
@RequestMapping("/usuarios")
public class UsuariosController {
	
	private String msgSucesso = "Sucesso ao realizar a operação.";
	private String msgFalha = "Falha ao realizar a operação.";

	/**
	 *	@Author Daniel Oliveira
	 * 
	 *	Atribuição à variável <up> os métodos implementados de JpaRepository<>, 
	 *	via interface <br.com.iacit.sisatas.repository.UsuariosRepository>
	 *
	 */

	@Autowired
	private UsuariosRepository up;

	/**
	 *	@Author Daniel Oliveira
	 *
	 *	Valida se e-mail já está cadastrado no DB.
	 *
	 */
	
	@ResponseBody
	@RequestMapping(value = "/validadorUsuEmail", method = RequestMethod.GET)
	public Boolean validadorUsuEmail(@RequestParam String usuEmail) {
		return up.existsByusuEmail(usuEmail);
	}
	
	/**
	 * @Author Daniel Oliveira
	 *
	 * METHOD: GET; Para validar token para alteração de senha.
	 * URL: http://localhost:8080/usuarios/validadorToken
	 * PARAM: usu_token
	 *
	 * RETURN: true ou false.
	 */
	
	@ResponseBody
	@RequestMapping(value = "/validadorToken", method = RequestMethod.GET)
	public Boolean validadorToken(@RequestParam String usu_token) {
		Boolean result = false;
		if(!usu_token.isEmpty() || !usu_token.isBlank() || (usu_token != null)) {
			result = up.existsByusuConfirmationToken(usu_token);
		}
		return result;
	}
	
	/**
	 * @Author Daniel Oliveira
	 *
	 * METHOD: GET; Para validar token de sessão
	 * URL: http://localhost:8080/usuarios/validadorSessionToken
	 * PARAM: usu_sessionToken
	 *
	 * RETURN: Retorna um objeto <result> MessageReturn(
		 														String operacao;
															    Boolean erro;
															    String mensagem;
															    T data;
		 												)
	 * operacao: "validadorSessionToken";
	 * erro: true, erro ao realizar a validação; false: validação realizada com sucesso.
	 * mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
	 * data: Retorna <UsuariosProjectionLogin> do objeto correspondente encontrado.
	 */

	@SuppressWarnings("unused")
	@ResponseBody
	@RequestMapping(value = "/validadorSessionToken", method = RequestMethod.GET)
	public MessageReturn<?> validadorSessionToken(@RequestParam String usu_sessionToken) {
		MessageReturn<UsuariosProjectionLogin> result = new MessageReturn<UsuariosProjectionLogin>();

		result.setOperacao("validadorSessionToken");
		try {
			if (!usu_sessionToken.isEmpty() || !usu_sessionToken.isBlank() || !(usu_sessionToken == null)
					|| up.existsByusuSessionToken(usu_sessionToken)) {
				UsuariosProjectionLogin usuarioBD = up.getByusuSessionToken(usu_sessionToken);
				result.setMensagem(msgSucesso);
				result.setErro(false);
				result.setData(usuarioBD);
			} else {
				result.setMensagem(msgFalha + " Causa: Token de sessão invalido.");
				result.setErro(true);
			}
		} catch (Exception e) {
			e.printStackTrace();
			result.setMensagem(msgFalha + " Causa: " + e.getMessage());
			result.setErro(true);
		}
		return result;
	}

	/**
	 *	@Author Daniel Oliveira
	 * 
	 *	METHOD: POST; Para cadastrar Usuários. 
	 *	URL: http://localhost:8080/usuarios/cadastrarUsuarios
	 *	FORM-DATA: 
	 *		<MultipartFile> imagem: multipart/form-data;
	 *		<String> usuario: {
	 *							"usuNome": "<String>" <NotNull>,
	 *							"usuEmail": "<String>" <NotNull>, 
	 *							"usuTelefone": "<String>" <NotNull>, 
	 *							"usuCargo": "<String>" <NotNull>,
	 *        					"usuAreaEmpresa": "<String>" <NotNull>, 
	 *        					"usuAssinatura": "<String>" <Null>,
	 *         					"usuPerfil" : <String> <NotNull>
	 * 						   }	 * 
	 * 
	 * RETURN: Retorna um objeto <result> MessageReturn(
		 														String operacao;
															    Boolean erro;
															    String mensagem;
		 												)
	 * operacao: "cadastrarUsuarios";
	 * erro: true, erro ao realizar o cadastro; false: cadastro realizada com sucesso.
	 * mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
	 */

	@ResponseBody
	@RequestMapping(value = "/cadastrarUsuarios", method = RequestMethod.POST, consumes = { "multipart/form-data" })
	public MessageReturn<?> cadastrarUsuario(MultipartFile imagem, String usuario) throws IOException {
		MessageReturn<?> result = new MessageReturn<String>();

		result.setOperacao("cadastrarUsuarios");
		
		try {
			ObjectMapper mapper = new ObjectMapper();
			UsuariosModel pessoa = mapper.readValue(usuario, UsuariosModel.class);
			// Validar unicidade de e-mail.

			if (!up.existsByusuEmail(pessoa.getUsuEmail())) {
				// Validar se a imagem é difente de null,
				// Caso seja null, não será feito o mapeamento da imagem, para não gerar erros.
				if (imagem != null) {
					// save os dados no DB, antes, faz o mepeamento dos dados e da imagem.
					up.save(UsuarioMapper.converter(pessoa, imagem));
				} else {
					// save os dados no DB, sem imagem/assinatura.
					up.save(pessoa);
				}

				result.setMensagem(msgSucesso);
				result.setErro(false);
			} else {
				result.setMensagem(msgFalha + " Causa: E-mail já cadastrado.");
				result.setErro(true);
			}
		} catch (Exception e) {
			e.printStackTrace();
			result.setMensagem(msgFalha + " Causa: " + e.getMessage());
			result.setErro(true);
		}
		return result;
	}

	/**
	 * @Author Daniel Oliveira
	 * 
	 *	METHOD: PUT; Para atualizar Usuários. 
	 *	URL: http://localhost:8080/usuarios/atualizarUsuarios 
	 *	FORM-DATA: 
	 *		<MultipartFile> imagem: multipart/form-data;
	 *		<String> usuario: {
	 *							"usuId": Long, 
	 *							"usuNome": "<String>",
	 *							"usuEmail": "<String>", 
	 *							"usuTelefone": "<String>", 
	 *							"usuCargo": "<String>",
	 *        					"usuAreaEmpresa": "<String>", 
	 *        					"usuAssinatura": "<String>",
	 *         					"usuPerfil" : <Long>
	 * 						   }
	 *	<usuId> deverá ser informado, pois será utilizado como referência para realizar a atualização;
	 * 
	 * RETURN: Retorna um objeto <result> MessageReturn(
		 														String operacao;
															    Boolean erro;
															    String mensagem;
		 												)
	 * operacao: "atualizarUsuarios";
	 * erro: true, erro ao realizar a atualização; false: atualização realizada com sucesso.
	 * mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
	 */

	@ResponseBody
	@RequestMapping(value = "/atualizarUsuarios", method = RequestMethod.PUT, consumes = { "multipart/form-data" })
	public MessageReturn<?> atualizarUsuarios(MultipartFile imagem, String usuario) {
		MessageReturn<String> result = new MessageReturn<String>();

		result.setOperacao("atualizarUsuarios");

		ObjectMapper mapper = new ObjectMapper();
		UsuariosModel usuarioController = null;

		try {
			// Mapeia o usuário vindo do front para UsuariosModel;
			usuarioController = mapper.readValue(usuario, UsuariosModel.class);
			// Constroi o objeto, para comparar os emails antes de fazer a atualização;
			UsuariosModel usuarioBanco = up.findByusuId(usuarioController.getUsuId());

			// Verifica se o e-mail salvo no banco é o mesmo enviado do front;
			if (!usuarioBanco.getUsuEmail().equals(usuarioController.getUsuEmail())) {

				// Validar unicidade de e-mail.
				if (!up.existsByusuEmail(usuarioController.getUsuEmail())) {
					// Validar se a imagem é difente de null,
					// Caso seja null, não será feito o mapeamento da imagem, para não gerar erros.
					if (imagem != null) {
						// save os dados no DB, antes, faz o mepeamento dos dados e da imagem.
						up.save(UsuarioMapper.converter(usuarioController, imagem));
					} else {
						// save os dados no DB, antes, faz o mepeamento dos dados sem a imagem.
						up.save(usuarioController);
					}
					result.setMensagem(msgSucesso);
					result.setErro(false);
				} else {
					result.setMensagem(msgFalha + " Causa: E-mail já cadastrado.");
					result.setErro(true);
				}
			} else {
				// Validar se a imagem é difente de null,
				// Caso seja null, não será feito o mapeamento da imagem, para não gerar erros.
				if (imagem != null) {
					// save os dados no DB, antes, faz o mepeamento dos dados e da imagem.
					up.save(UsuarioMapper.converter(usuarioController, imagem));
				} else {
					// save os dados no DB, antes, faz o mepeamento dos dados sem a imagem.
					up.save(usuarioController);
				}
				result.setMensagem(msgSucesso);
				result.setErro(false);
			}

		} catch (Exception e) {
			e.printStackTrace();
			result.setMensagem(msgFalha + " Causa: " + e.getMessage());
			result.setErro(true);
		}
		return result;
	}

	/**
	 * @Author Daniel Oliveira
	 * 
	 *	METHOD: GET; Para listar Usuários. 
	 *	URL: http://localhost:8080/usuarios/listarUsuarios 
	 *	PARAM: <String> lista: <DataGrid> ou <Participante>
	 * 
	 *  RETURN: Retorna uma Lista <usuarios> List<UsuariosProjectionDataGrid> ou List<UsuariosProjectionParticipante>;
	 *
	 */

	@ResponseBody
	@RequestMapping(value = "/listarUsuarios", method = RequestMethod.GET)
	public List<?> listarUsuarios(@RequestParam String lista) {

		List<?> usuarios = null;

		switch (lista) {
		case "DataGrid":
			try {
				usuarios = up.findBy(UsuariosProjectionDataGrid.class);

			} catch (Exception e) {
				e.printStackTrace();
			}
			break;
		case "Participante":
			try {
				usuarios = up.findBy(UsuariosProjectionParticipante.class);

			} catch (Exception e) {
				e.printStackTrace();
			}
			break;
		default:
			break;
		}
		return usuarios;
	}


	/**
	 * @author Denis Lima
	 * @Updated Daniel Oliveira
	 * 
	 *	METHOD: GET; Para pegar apenas 1 usuário. 
	 *	URL: http://localhost:8080/usuarios/pegarUsuario/{usu_id}
	 *	PathVariable: {usu_id}
	 * 
	 * RETURN: Retorna um objeto <result> MessageReturn(
		 														String operacao;
															    Boolean erro;
															    String mensagem;
															    T data;
		 												)
	 * operacao: "pegarUsuario";
	 * erro: true, erro ao pegar usuario; false: operacao realizada com sucesso.
	 * mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
	 * data: Retorna <UsuariosModel> do objeto correspondente encontrado.
	 */
	
	@ResponseBody
	@RequestMapping(value = "/pegarUsuario/{usu_id}", method = RequestMethod.GET)
	public MessageReturn<?> pegarUsuario(@PathVariable Long usu_id) {
		
		MessageReturn<UsuariosProjectionPerfil> result = new MessageReturn<UsuariosProjectionPerfil>();
		result.setOperacao("pegarUsuario");
		
		try {
			UsuariosProjectionPerfil usuarioSelecionado = up.findByUsuId(usu_id);
			result.setMensagem(msgSucesso);
			result.setErro(false);
			result.setData(usuarioSelecionado);
		} catch (Exception e) {
			e.printStackTrace();
			result.setMensagem(msgFalha + " Causa: " + e.getMessage());
			result.setErro(true);
		}
		return result;
	}

	/**
	 * @Author Daniel Oliveira
	 * @Updated Denis Lima
	 * 
	 *	METHOD: DELETE; Para excluir Usuários. 
	 *	URL: http://localhost:8080/usuarios/excluirUsuarios/{usu_id}
	 *	PathVariable: {usu_id}
	 * 
	 * RETURN: Retorna um objeto <result> MessageReturn(
		 														String operacao;
															    Boolean erro;
															    String mensagem;
		 												)
	 * operacao: "excluirUsuarios";
	 * erro: true, erro ao excluir usuario; false: operacao realizada com sucesso.
	 * mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
	 */

	@ResponseBody
	@RequestMapping(value = "/excluirUsuarios/{usu_id}", method = RequestMethod.DELETE)
	public MessageReturn<?> excluirUsuarios(@PathVariable long usu_id) {
		
		MessageReturn<String> result = new MessageReturn<String>();
		result.setOperacao("excluirUsuarios");
		
		try {
			UsuariosModel usuarioSelecionado = up.findByusuId(usu_id);
			up.delete(usuarioSelecionado);
			result.setMensagem(msgSucesso);
			result.setErro(false);
		} catch (Exception e) {
			e.printStackTrace();
			result.setMensagem(msgFalha + " Causa: " + e.getMessage());
			result.setErro(true);
		}
		return result;
	}

	/**
	 * @Author Daniel Oliveira
	 * 
	 *	METHOD: POST; Para solicitar a alteração de senha. 
	 *	URL: http://localhost:8080/usuarios/solicitarAlteracaoSenha 
	 *	PARAM: usu_email
	 * 
	 * 
	 *	RETURN: Retorna um objeto <result> MessageReturn( 
	 *														String operacao;
	 *         												Boolean erro; 
	 *         												String mensagem;
	 *         												T data; 
	 *         											 ) 
	 *			operacao: "solicitarAlteracaoSenha"; 
	 *			erro: true, e-mail/usuario não encontrado; false: solicitação realizada com sucesso.
	 *			mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
	 *			data: <String> token registrado para o usuário que solicitou a alteração
	 *
	 */
	
	@ResponseBody
	@RequestMapping(value = "/solicitarAlteracaoSenha", method = RequestMethod.POST)
	public MessageReturn<?> solicitarAlteracaoSenha(@RequestParam String usu_email)
			throws NoSuchAlgorithmException, UnsupportedEncodingException {
		MessageReturn<String> result = new MessageReturn<String>();

		result.setOperacao("solicitarAlteracaoSenha");
		Date data = new Date();
		String token = Conversor.geradorHashString(usu_email + data);

		try {

			if (up.existsByusuEmail(usu_email)) {
				UsuariosModel usuarioDB = up.findByusuEmail(usu_email);
				usuarioDB.setUsuConfirmationToken(token);
				up.save(usuarioDB);
				result.setMensagem(msgSucesso);
				result.setData(token);
				result.setErro(false);

				/*
				 * Desenvolver o envio do e-mail para enviar ao usuário os parâmetros para
				 * alteração da senha
				 */

			} else {
				result.setMensagem(msgFalha + " Causa: O e-mail informado não está cadastrado no sistema, favor verificar.");
				result.setErro(true);
			}
		} catch (DataAccessException e) {
			e.printStackTrace();
			result.setMensagem(msgFalha + " Causa: " + e.getMessage());
			result.setErro(true);
		}
		return result;
	}

	/**
	 * @Author Daniel Oliveira
	 * 
	 *	METHOD: POST; Para alterar a senha. 
	 *	URL: http://localhost:8080/usuarios/alterarSenha 
	 *	PARAM: usu_token e usu_senha
	 * 
	 *	RETURN: Retorna um objeto <result> MessageReturn( 
	 *														String operacao;
	 *         												Boolean erro; 
	 *         												String mensagem;
	 *         												T data; 
	 *         											) 
	 *			operacao: "alterarSenha"; 
	 *			erro: true, token não cadastrado/encontrado; false: alteração realizada com sucesso. 
	 *			mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
	 *
	 */

	@ResponseBody
	@RequestMapping(value = "/alterarSenha", method = RequestMethod.POST)
	public MessageReturn<?> alterarSenha(@RequestParam String usu_token, @RequestParam String usu_senha)
			throws NoSuchAlgorithmException, UnsupportedEncodingException {
		MessageReturn<String> result = new MessageReturn<String>();

		result.setOperacao("alterarSenha");

		String senha = Conversor.codificaBase64Encoder(usu_senha);

		try {

			if (up.existsByusuConfirmationToken(usu_token)) {
				UsuariosModel usuarioDB = up.findByusuConfirmationToken(usu_token);
				usuarioDB.setUsuSenha(senha);
				usuarioDB.setUsuConfirmationToken("");
				up.save(usuarioDB);
				result.setMensagem(msgSucesso);
				result.setErro(false);

				/*
				 * Desenvolver o envio do e-mail para informar ao usuário da alteração de senha
				 * realizada
				 */

			} else {
				result.setMensagem(msgFalha + " Causa: Token inválido.");
				result.setErro(true);
			}
		} catch (DataAccessException e) {
			e.printStackTrace();
			result.setMensagem(msgFalha + " Causa: " + e.getMessage());
			result.setErro(true);
		}
		return result;
	}
	
	/**
	 * @Author Daniel Oliveira
	 * 
	 *	METHOD: POST; Para alterar a senha. 
	 *	URL: http://localhost:8080/usuarios/alterarSenha 
	 *	PARAM: usu_id, usu_senha_nova e usu_senha_antiga
	 * 
	 *	RETURN: Retorna um objeto <result> MessageReturn( 
	 *														String operacao;
	 *         												Boolean erro; 
	 *         												String mensagem;
	 *         												T data; 
	 *         											) 
	 *			operacao: "alterarSenha"; 
	 *			erro: true, token não cadastrado/encontrado; false: alteração realizada com sucesso. 
	 *			mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
	 *
	 */

	@ResponseBody
	@RequestMapping(value = "/alterarSenhaLogado", method = RequestMethod.POST)
	public MessageReturn<?> alterarSenhaLogado(@RequestParam Long usu_id, @RequestParam String usu_senha_nova, @RequestParam String usu_senha_antiga) {
		
		MessageReturn<String> result = new MessageReturn<String>();
		result.setOperacao("alterarSenhaLogado");

		String senha_nova = Conversor.codificaBase64Encoder(usu_senha_nova);
		String senha_antiga = Conversor.codificaBase64Encoder(usu_senha_antiga);

		try {
				UsuariosModel usuarioDB = up.findByusuId(usu_id);
				if (usuarioDB != null) {
					if (senha_antiga.equals(usuarioDB.getUsuSenha())) {
						usuarioDB.setUsuSenha(senha_nova);
						up.save(usuarioDB);
						result.setMensagem(msgSucesso);
						result.setErro(false);
					} else {
						result.setMensagem(msgFalha + " Causa: Senha antiga incorreta.");
						result.setErro(true);
					}
				} else {
					result.setMensagem(msgFalha + " Causa: Cadastro não encontrado.");
					result.setErro(true);
				}
				/*
				 * Desenvolver o envio do e-mail para informar ao usuário da alteração de senha
				 * realizada
				 */

		} catch (DataAccessException e) {
			e.printStackTrace();
			result.setMensagem(msgFalha + " Causa: " + e.getMessage());
			result.setErro(true);
		}
		return result;
	}
	
	/**
	 * @Author Daniel Oliveira
	 * 
	 *	METHOD: POST; Para validar Email e Senha
	 *	URL: http://localhost:8080/usuarios/validarEmailSenha 
	 *	PARAM: usu_email e usu_senha
	 * 
	 *	RETURN: Retorna um objeto <result> MessageReturn( 
	 *														String operacao;
	 *         												Boolean erro; 
	 *         												String mensagem; 
	 *        												T data; 
	 *         											) 
	 *			operacao: "validarEmailSenha"; 
	 *			erro: true, Email e Senha não conferem; false: operação realizada com sucesso. 
	 *			mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
	 *			data: <UsuariosProjectionLogin> dados do usuário.
	 *	
	 */
	
	@ResponseBody
	@RequestMapping(value = "/validarEmailSenha", method = RequestMethod.POST)
	public MessageReturn<UsuariosProjectionLogin> validarEmailSenha(@RequestParam String usu_email,
			@RequestParam String usu_senha) {

		MessageReturn<UsuariosProjectionLogin> result = new MessageReturn<UsuariosProjectionLogin>();
		result.setOperacao("validarEmailSenha");

		try {
			String senhaCodificada = Conversor.codificaBase64Encoder(usu_senha);
			Date data = new Date();
			String tokenSession = Conversor.geradorHashString(usu_email + data + usu_senha);

			UsuariosProjectionLogin usuarioReturn = up.getByUsuEmailAndUsuSenha(usu_email, senhaCodificada);

			if (usuarioReturn != null) {
				// Busca os dados do usário no banco para salvar o token da seção.
				UsuariosModel usuarioDB = up.findByusuEmail(usu_email);
				usuarioDB.setUsuSessionToken(tokenSession);
				up.save(usuarioDB);
				usuarioReturn = up.getByUsuEmailAndUsuSenha(usu_email, senhaCodificada);

				result.setMensagem(msgSucesso);
				result.setData(usuarioReturn);
				result.setErro(false);

			} else {
				result.setMensagem(msgFalha + " Causa: Dados invalidados.");
				result.setErro(true);
			}
		} catch (Exception e) {
			e.printStackTrace();
			result.setMensagem(msgFalha + " Causa: " + e.getMessage());
			result.setErro(true);
		}

		return result;
	}
}
