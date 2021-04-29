package br.com.iacit.sisatas.controllers;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.iacit.sisatas.mapper.UsuarioMapper;
import br.com.iacit.sisatas.models.UsuariosCadastrarControllerModel;
import br.com.iacit.sisatas.models.UsuariosModel;
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
	 *
	 		imagem: multipart/form-data
    		"usuNome": "<String>",
    		"usuEmail": "<String>",
    		"usuTelefone": "<String>",
    		"usuCargo": "<String>",
    		"usuAreaEmpresa": "<String>",
    		"usuPerfil" : <Long>
    		
		Conforme <models.UsuariosControllerModel>;
	
	 * 
	 * RETURN: Retorna uma String <result>;
	 * result = 1, persistência realizada com sucesso;
	 * result != 1, persistência não realizada; null ou a mensagem de erro apresentada ao tentar realizar a persistência.
	 *
	 */
	
	@ResponseBody
	@RequestMapping(value = "/cadastrarUsuarios", method = RequestMethod.POST, consumes = { "multipart/form-data" })
	public ResponseEntity<String> cadastrarUsuario(MultipartFile imagem, String usuario) throws IOException {
		String result = "1";
		
		ObjectMapper mapper = new ObjectMapper();
		UsuariosCadastrarControllerModel pessoa = null;
		
		try {
			pessoa = mapper.readValue(usuario, UsuariosCadastrarControllerModel.class);
			up.save(UsuarioMapper.converter(pessoa, imagem));
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		return ResponseEntity.ok(result);
	}
	
	/**
	 * @author daniel.oliveira
	 * 
	 * METHOD: POST; Para atualizar Usuários.
	 * URL: http://localhost:8080/usuarios/atualizarUsuarios
	 * BODY: 
	 *  	imagem: multipart/form-data
	 *  	"usuId": Long,
    		"usuNome": "<String>",
    		"usuEmail": "<String>",
    		"usuTelefone": "<String>",
    		"usuCargo": "<String>",
    		"usuAreaEmpresa": "<String>",
    		"usuAssinatura": "<String>",
    		"usuPerfil" : <Long>
		Conforme <models.UsuariosControllerModel>;
		

		<usuId> deverá ser informado, pois será utilizado como referência para realizar a atualização;
	 * 
	 * RETURN: Retorna uma String <result>;
	 * result = 1, Atualização realizada com sucesso;
	 * result != 1, Atualização não realizada; null ou a mensagem de erro apresentada ao tentar realizar a persistência.
	 *
	 */
	
	@ResponseBody
	@RequestMapping(value = "/atualizarUsuarios", method = RequestMethod.PUT, consumes = "application/json")
	public ResponseEntity<String> atualizarUsuarios(@RequestBody UsuariosModel usuario) {
		String result = "1";
		try {
			up.save(usuario);
		} catch (DataAccessException e) {
			e.printStackTrace();
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(result);
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
	public ResponseEntity<List<UsuariosModel>> listarUsuarios() {

		List<UsuariosModel> usuarios = null;

		try {
			usuarios = up.findAll();
		} catch (DataAccessException e) {
			e.printStackTrace();
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok(usuarios);
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
	public ResponseEntity<UsuariosModel> pegarUsuario(@PathVariable long usu_id) {
		UsuariosModel usuarioSelecionado = null;
		try {
			usuarioSelecionado = up.findByusuId(usu_id);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.ok(usuarioSelecionado);	
	}
	

	/**
	 * @author daniel.oliveira
	 * 
	 * METHOD: DELETE; Para excluir Perfis.
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
	public ResponseEntity<String> excluirUsuarios(@PathVariable long usu_id) {
		String result = null;
		try {
			UsuariosModel usuarioSelecionado = up.findByusuId(usu_id);
			up.delete(usuarioSelecionado);
		} catch (DataAccessException e) {
			result = e.getMessage();
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(result);
	}
}
