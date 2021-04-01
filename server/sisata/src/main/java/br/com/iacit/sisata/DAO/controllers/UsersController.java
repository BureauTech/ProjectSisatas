package br.com.iacit.sisata.DAO.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import br.com.iacit.sisata.DAO.models.Users;
import br.com.iacit.sisata.DAO.repository.UsersRepository;

@Controller
public class UsersController {

	@Autowired
	private UsersRepository up;

	/*
	 * @author: Daniel S. Oliveira
	 * 
	 * Método criado para cadastrar usuários; O método recebe um objeto Users dados
	 * oriundos do front; Utiliza a interface UsersRepository que extend a interface
	 * CrudRepository passado como referência a variável "up" para efetuar a
	 * gravação dos usuários no banco de dados através do método <CrudRepository.save>. Seu retorno é um redirect para o
	 * método <listarUsuarios>, usado como testes.
	 * 
	 * URL: localhost:8080/cadastrar-usuarios
	 * BODY:
		{
		    "usu_nome": "Nome do Usuario",
		    "usu_email": "email@do.usuario",
		    "usu_telefone": "+55DDXXXXXXXX",
		    "usu_cargo": "Cargo do Usuário",
		    "usu_area_empresa" : "Área / Empresa do Usuário",
		    "usu_assinatura" : "Assinatura do Usuário",
		    "perfil.per_id" : "1"
		}
	 * "perfil.per_id": pode ser 1 para Administrador, 2 para Gerente ou 3 para Usuários.
	 */

	@RequestMapping(value = "/cadastrar-usuarios", method = RequestMethod.POST)
	public String cadastrar(Users usuario) {
		up.save(usuario);
		return "redirect:/usuarios"; // retorno utilizado para testar o código.
	}

	/*
	 * @author: Daniel S. Oliveira
	 * 
	 * Método criado para listar usuários; é gerado o objeto ModelAndView a variável <mv>, é setado o nome da view;
	 * Gerado o objeto Iterable<Users> do tipo Users como referência em users, que recebe up.findAll() 
	 * que utiliza a interface UsersRepository que extend a interface CrudRepository passado como referência a variável "up" para efetuar a
	 * busca dos usuários no banco de dados através do método <CrudRepository.findAll>; retorna ModelAndView mv
	 * 
	 * URL: localhost:8080/usuarios"
	 * 
	 */
	@RequestMapping(value = "/usuarios", method = RequestMethod.GET)
	public ModelAndView listarUsuarios() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("usuarios");
		Iterable<Users> users = up.findAll();
		mv.addObject("listaUsers", users);
		return mv;
	}
	
	/*
	 * @author: Daniel S. Oliveira
	 * 
	 * Método criado para excluir usuários; recebe através da url o id do usuário a ser excluído;
	 * Cria a referêcia do tipo User a "userSelect", que recebe, através do da interface UsersRepository 
	 * que extend a interface CrudRepository passado como referência a variável "up" para efetuar a
	 * busca do usuário no banco de dados através do método <CrudRepository.findById>; 
	 * Executa a exclusão do usuário através do método <CrudRepository.delete>
	 * 
	 * URL: localhost:8080/excluir-usuario/{usu_id}
	 * 
	 */

	@RequestMapping(value = "/excluir-usuario/{usu_id}", method = RequestMethod.GET)
	public String excluir(@PathVariable int usu_id) {
		Users userSelect = up.findById(usu_id);
		up.delete(userSelect);
		return "redirect:/usuarios";
	}

}
