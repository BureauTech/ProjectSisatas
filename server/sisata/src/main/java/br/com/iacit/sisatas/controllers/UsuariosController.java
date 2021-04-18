package br.com.iacit.sisatas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.CrossOrigin;


import br.com.iacit.sisatas.models.Usuarios;
import br.com.iacit.sisatas.repository.UsuariosRepository;

@CrossOrigin
@Controller
@RequestMapping("/usuarios")
public class UsuariosController {
	
	/**
	 * @author daniel.oliveira
	 * 
	 * Atribuição à variável <up> os métodos implementados de JpaRepository<>,
	 * via interface <br.com.iacit.sisatas.repository.UsuariosRepository>
	 *
	 */
	
	@Autowired
	private UsuariosRepository up;

	/**
	 * @author daniel.oliveira
	 * 
	 * METHOD: POST; Para cadastrar Usuários.
	 * URL: http://localhost:8080/usuarios/cadastrarUsuarios
	 * BODY: 
	 * {
    		"usu_nome": "<String>",
    		"usu_email": "<String>",
    		"usu_senha" : "<String>",
    		"usu_telefone": "<String>",
    		"usu_cargo": "<String>",
    		"usu_area_empresa": "<String>",
    		"usu_assinatura": "<String>",
    		"pertenceUsuarios": {
        							"id":<int>,
        							"per_nome": "<String>"
    							}
		}
		Conforme <models.Usuarios>;
		Obs: <pertenceUsuarios>, deverá ser atribuído um objeto, este objeto deverá existir no banco de dados;
		Pode passar os dois argumentos ou somente o <id> para o objeto <pertenceUsuarios>.
	 * 
	 * RETURN: Retorna uma String <result>;
	 * result = 1, persistência realizada com sucesso;
	 * result != 1, persistência não realizada; null ou a mensagem de erro apresentada ao tentar realizar a persistência.
	 *
	 */
	
	@ResponseBody
	@RequestMapping(value = "/cadastrarUsuarios", method = RequestMethod.POST, consumes = "application/json")
	public String cadastrarUsuario(@RequestBody Usuarios usuario) {
		String result = null;
		try {
			up.save(usuario);
		} catch (DataAccessException e) {
			e.printStackTrace();
			result = e.getMessage();
		}
		return result;
	}
	
	/**
	 * @author daniel.oliveira
	 * 
	 * METHOD: POST; Para atualizar Usuários.
	 * URL: http://localhost:8080/usuarios/atualizarUsuarios
	 * BODY: 
	 * {	
	 		"id": <long>,
    		"usu_nome": "<String>",
    		"usu_email": "<String>",
    		"usu_senha" : "<String>",
    		"usu_telefone": "<String>",
    		"usu_cargo": "<String>",
    		"usu_area_empresa": "<String>",
    		"usu_assinatura": "<String>",
    		"pertenceUsuarios": {
        							"id":<long>,
        							"per_nome": "<String>"
    							}
		}
		Conforme <models.Perfis>
		Obs: <pertenceUsuarios>, deverá ser atribuído um objeto, este objeto deverá existir no banco de dados;
		Pode passar os dois argumentos ou somente o <id> para o objeto <pertenceUsuarios>.
			 <id> deverá ser informado, pois será utilizado como referência para realizar a atualização;
	 * 
	 * RETURN: Retorna uma String <result>;
	 * result = 1, Atualização realizada com sucesso;
	 * result != 1, Atualização não realizada; null ou a mensagem de erro apresentada ao tentar realizar a persistência.
	 *
	 */
	
	@ResponseBody
	@Query(value = "")
	@RequestMapping(value = "/atualizarUsuarios", method = RequestMethod.POST, consumes = "application/json")
	public String atualizarUsuarios(@RequestBody Usuarios usuario) {
		String result = null;
		try {
			up.save(usuario);
		} catch (DataAccessException e) {
			e.printStackTrace();
			result = e.getMessage();
		}
		return result;
	}
	
	/**
	 * @author daniel.oliveira
	 * 
	 * METHOD: GET; Para listar Usuários.
	 * URL: http://localhost:8080/usuarios/listarUsuarios
	 * 
	 * RETURN: Retorna uma List<Usuarios> <usuarios>;
	 *
	 */

	@ResponseBody
	@RequestMapping(value = "/listarUsuarios", method = RequestMethod.GET)
	public List<Usuarios> listarUsuarios() {
		List<Usuarios> usuarios = null;
		try {
			usuarios = up.findAll();
		} catch (DataAccessException e) {
			e.printStackTrace();
		}

		return usuarios;
	}
	
	@ResponseBody
	@RequestMapping(value = "/listarUsuariosContainingIgnoreCaseUsuNome", method = RequestMethod.GET)
	public List<Usuarios> listarUsuariosContainingIgnoreCaseUsuNome(@RequestParam("usuNome") String usuNome) {
		List<Usuarios> usuarios = null;
		try {
			usuarios = up.searchByusuNomeContainingIgnoreCase(usuNome);
		} catch (DataAccessException e) {
			e.printStackTrace();
		}

		return usuarios;
	}
	/*
	@ResponseBody
	@RequestMapping(value = "/listarUsuariosContainingIgnoreCaseUsuAreaEmpresa", method = RequestMethod.GET)
	public List<Usuarios> listarUsuariosContainingIgnoreCaseUsuAreaEmpresa(@RequestParam("usuAreaEmpresa") String usuAreaEmpresa) {
		List<Usuarios> usuarios = null;
		try {
			usuarios = up.searchByusuAreaEmpresaContainingIgnoreCase(usuAreaEmpresa);
		} catch (DataAccessException e) {
			e.printStackTrace();
		}

		return usuarios;
	}*/
	
	@ResponseBody
	@RequestMapping(value = "/listarUsuariosContainingIgnoreCaseUsuEmail", method = RequestMethod.GET)
	public List<Usuarios> listarUsuariosContainingIgnoreCaseUsuEmail(@RequestParam("usuEmail") String usuEmail) {
		List<Usuarios> usuarios = null;
		try {
			usuarios = up.searchByusuEmailContainingIgnoreCase(usuEmail);
		} catch (DataAccessException e) {
			e.printStackTrace();
		}

		return usuarios;
	}

	/**
	 * @author Denis Lima
	 * 
	 * METHOD: GET; Para pegar apenas 1 usuário.
	 * URL: http://localhost:8080/usuarios/pegarUsuario/{usu_id}
	 * 
	 * PathVariable: {usu_id}
	 * 
	 * RETURN: Retorna um usuário <Usuarios>;
	 *
	 */
	
	@ResponseBody
	@RequestMapping(value = "/pegarUsuario/{usu_id}", method = RequestMethod.GET)
	public Usuarios pegarUsuario(@PathVariable long usu_id) {
		Usuarios result = null;
		try {
			Usuarios usuarioSelecionado = up.findByusuId(usu_id);
			result = usuarioSelecionado;
		} catch (DataAccessException e) {
			e.printStackTrace();
		}
		return result;
	}

	/**
	 * @author daniel.oliveira
	 * 
	 * METHOD: GET; Para excluir Perfis.
	 * URL: http://localhost:8080/usuarios/excluirUsuarios/{usu_id}
	 * 
	 * PathVariable: {usu_id}
	 * 
	 * RETURN: Retorna uma String <result>;
	 * result = 1, Exclusão realizada com sucesso;
	 * result != 1, Exclusão não realizada; null ou a mensagem de erro apresentada ao tentar realizar a persistência.
	 *
	 */
	
	@ResponseBody
	@RequestMapping(value = "/excluirUsuarios/{usu_id}", method = RequestMethod.DELETE)
	public String excluirUsuarios(@PathVariable long usu_id) {
		String result = null;
		System.out.println(usu_id);
		try {
			Usuarios usuarioSelecionado = up.findByusuId(usu_id);
			up.delete(usuarioSelecionado);
		} catch (DataAccessException e) {
			result = e.getMessage();
		}
		return result;
	}
}
