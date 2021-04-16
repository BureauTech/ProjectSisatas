package br.com.iacit.sisatas.controllers;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import br.com.iacit.sisatas.models.Perfis;
import br.com.iacit.sisatas.models.Usuarios;
import br.com.iacit.sisatas.repository.UsuariosRepository;

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
    		"usuNome": "<String>",
    		"usuEmail": "<String>",
    		"usuSenha" : "<String>",
    		"usuTelefone": "<String>",
    		"usuCargo": "<String>",
    		"usuAreaAmpresa": "<String>",
    		"usuAssinatura": "<String>",
    		"pertenceUsuarios": {
        							"perId":<long>,
        							"perNome": "<String>"
    							}
		}
		Conforme <models.Usuarios>;
		Obs: <pertenceUsuarios>, deverá ser atribuído um objeto, este objeto deverá existir no banco de dados;
		Pode passar os dois argumentos ou somente o <id> para o objeto <pertenceUsuarios>.
	 * 
	 * RETURN: Retorna uma String <result>;
	 * result = 1, persistência realizada com sucesso;
	 * result != 1, persistência não realizada; null ou a mensagem de erro apresentada ao tentar realizar a persistência.
	 * @throws IOException 
	 *
	 */
	
	@ResponseBody
	@RequestMapping(value = "/cadastrarUsuarios", method = RequestMethod.POST)
	public String cadastrarUsuario(@RequestParam("file") MultipartFile file, @RequestParam("dados") List<String> dados) throws IOException {
		String result = null;
		
		byte[] assinatura = file.getBytes();
		Perfis pefil = new Perfis(Long.parseLong(dados.get(6)));
		
		Usuarios usuario = new Usuarios(dados.get(0), dados.get(1), dados.get(2), dados.get(3), dados.get(4), dados.get(5), assinatura, pefil);
		
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
	 		"usuId": <long>,
    		"usuNome": "<String>",
    		"usuEmail": "<String>",
    		"usuSenha" : "<String>",
    		"usuTelefone": "<String>",
    		"usuCargo": "<String>",
    		"usuAreaAmpresa": "<String>",
    		"usuAssinatura": "<String>",
    		"pertenceUsuarios": {
        							"perId":<long>,
        							"perNome": "<String>"
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
	@RequestMapping(value = "/retornarAssinatura/{usu_id}", method = RequestMethod.GET)
	public void retornarAssinatura(@PathVariable long usu_id) {
		//ResponseEntity<Resource>
		Usuarios usuarios = null;
		// byte[] imageByte = null;
		System.out.println(usu_id);

		try {
			usuarios = up.findByusuId(usu_id);
		} catch (DataAccessException e) {
			e.printStackTrace();
		}
		
		System.out.println(usuarios.getUsuId());

		/*
		 * HttpHeaders header = new HttpHeaders();
		 * header.add(HttpHeaders.CONTENT_DISPOSITION,
		 * "attachment; filename="+usuarios.getUsuNome()+".png");
		 * header.add("Cache-Control", "no-cache, no-store, must-revalidate");
		 * header.add("Pragma", "no-cache"); header.add("Expires", "0");
		 * 
		 * imageByte = usuarios.getUsuAssinatura(); ByteArrayResource resource = new
		 * ByteArrayResource(imageByte);
		 * 
		 * return ResponseEntity.ok() .headers(header) .contentLength(imageByte.length)
		 * .contentType(MediaType.parseMediaType("image/png")) .body(resource);
		 */
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
	}
	
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
	@RequestMapping(value = "/excluirUsuarios/{usu_id}", method = RequestMethod.GET)
	public String excluirUsuarios(@PathVariable long usu_id) {
		String result = null;
		try {
			Usuarios usuarioSelecionado = up.findByusuId(usu_id);
			up.delete(usuarioSelecionado);
		} catch (DataAccessException e) {
			result = e.getMessage();
		}
		return result;
	}
}
