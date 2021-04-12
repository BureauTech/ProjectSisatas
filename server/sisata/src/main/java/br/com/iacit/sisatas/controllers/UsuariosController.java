package br.com.iacit.sisatas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.iacit.sisatas.models.Usuarios;
import br.com.iacit.sisatas.repository.UsuariosRepository;

@Controller
@RequestMapping("/usuarios")
public class UsuariosController {

	@Autowired
	private UsuariosRepository up;

	@ResponseBody
	@PostMapping(path = "/cadastrarUsuarios", consumes = "application/json")
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
	
	@ResponseBody
	@RequestMapping(value = "/atualizarUsuarios", method = RequestMethod.GET)
	public void atualizarUsuarios() {
		// Desenvolver
	}

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
	@RequestMapping(value = "/excluirUsuarios/{usu_id}", method = RequestMethod.GET)
	public String excluirUsuarios(@PathVariable long usu_id) {
		String result = null;
		try {
			Usuarios usuarioSelecionado = up.findById(usu_id);
			up.delete(usuarioSelecionado);
		} catch (DataAccessException e) {
			result = e.getMessage();
		}
		return result;
	}
}
