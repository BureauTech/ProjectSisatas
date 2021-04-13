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

@Controller
@RequestMapping("/perfis")
public class PerfisController {

	@Autowired
	private PerfisRepository pp;

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
	
	@ResponseBody
	@RequestMapping(value = "/atualizarPerfis", method = RequestMethod.GET)
	public void atualizarPerfis() {
		//Desenvolver
	}

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

	@ResponseBody
	@RequestMapping(value = "/excluirPerfis/{per_id}", method = RequestMethod.GET)
	public String excluirPerfis(@PathVariable long per_id) {
		String result = null;
		try {
			Perfis perfilSelecionado = pp.findById(per_id);
			pp.delete(perfilSelecionado);
		} catch (DataAccessException e) {
			result = e.getMessage();
		}
		return result;
	}
}
