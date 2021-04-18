package br.com.iacit.sisatas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.iacit.sisatas.models.Perfis;
import br.com.iacit.sisatas.repository.PerfisRepository;

/**
 * @author daniel.oliveira
 *
 */

@Controller
@RequestMapping("/perfis")
public class PerfisController {

	/**
	 * @author daniel.oliveira
	 * 
	 * Atribuição à variável <pp> os métodos implementados de JpaRepository<>,
	 * via interface <br.com.iacit.sisatas.repository.PerfisRepository>
	 *
	 */
	
	@Autowired
	private PerfisRepository pp;
	
	/**
	 * @author daniel.oliveira
	 * 
	 * METHOD: POST; Para cadastrar Perfis.
	 * URL: http://localhost:8080/perfis/cadastrarPerfis
	 * BODY: 
	 * {
        	"id":<long>,
        	"per_nome": "<String>"
		} 
		Conforme <models.Perfis>
	 * 
	 * RETURN: Retorna uma String <result>;
	 * result = 1, persistência realizada com sucesso;
	 * result != 1, persistência não realizada; null ou a mensagem de erro apresentada ao tentar realizar a persistência.
	 *
	 */
	@ResponseBody
	@RequestMapping(value = "/cadastrarPerfis", method = RequestMethod.POST, consumes = "application/json")
	public String cadastrarPerfis(@RequestBody Perfis perfil) {
		String result = null;
		try {
			pp.save(perfil);
		} catch (DataAccessException e) {
			e.printStackTrace();
			result = e.getMessage();
		}
		return result;
	}
	
	/**
	 * @author daniel.oliveira
	 * 
	 * METHOD: POST; Para atualizar Perfis.
	 * URL: http://localhost:8080/perfis/atualizarPerfis
	 * BODY: 
	 * {
        	"id":<long>,
        	"per_nome": "<String>"
		} 
		Conforme <models.Perfis>
	 * 
	 * RETURN: Retorna uma String <result>;
	 * result = 1, Atualização realizada com sucesso;
	 * result != 1, Atualização não realizada; null ou a mensagem de erro apresentada ao tentar realizar a persistência.
	 *
	 */
	@ResponseBody
	@RequestMapping(value = "/atualizarPerfis", method = RequestMethod.POST, consumes = "application/json")
	public String atualizarPerfis(@RequestBody Perfis perfil) {
		String result = null;
		try {
			pp.save(perfil);
		} catch (Exception e) {
			e.printStackTrace();
			result = e.getMessage();
		}
		return result;
	}
	
	/**
	 * @author daniel.oliveira
	 * 
	 * METHOD: GET; Para listar Perfis.
	 * URL: http://localhost:8080/perfis/listarPerfis
	 * 
	 * RETURN: Retorna uma List<Perfis> <perfil>;
	 *
	 */

	@ResponseBody
	@RequestMapping(value = "/listarPerfis", method = RequestMethod.GET)
	public List<Perfis> listarPerfis() {
		List<Perfis> perfil = null;
		try {
			perfil = pp.findAll();
		} catch (DataAccessException e) {
			e.printStackTrace();
		}

		return perfil;
	}

	/**
	 * @author daniel.oliveira
	 * 
	 * METHOD: GET; Para excluir Perfis.
	 * URL: http://localhost:8080/perfis/excluirPerfis/{per_id}
	 * 
	 * PathVariable: {per_id}
	 * 
	 * RETURN: Retorna uma String <result>;
	 * result = 1, Exclusão realizada com sucesso;
	 * result != 1, Exclusão não realizada; null ou a mensagem de erro apresentada ao tentar realizar a persistência.
	 *
	 */
	
	@ResponseBody
	@RequestMapping(value = "/excluirPerfis/{per_id}", method = RequestMethod.GET)
	public String excluirPerfis(@PathVariable long per_id) {
		String result = null;
		try {
			Perfis perfilSelecionado = pp.findByperId(per_id);
			pp.delete(perfilSelecionado);
		} catch (DataAccessException e) {
			result = e.getMessage();
		}
		return result;
	}
}
