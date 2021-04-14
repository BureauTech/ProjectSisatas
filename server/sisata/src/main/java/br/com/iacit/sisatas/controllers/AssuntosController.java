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

import br.com.iacit.sisatas.models.Assuntos;
import br.com.iacit.sisatas.repository.AssuntosRepository;

@Controller
@RequestMapping("/assuntos")
public class AssuntosController {
	
	@Autowired
	private AssuntosRepository ap;
	
	@ResponseBody
	@RequestMapping(value = "/cadastrarAssuntos", method = RequestMethod.POST, consumes = "application/json")
	public String cadastrarAssuntos(@RequestBody Assuntos assunto) {
		String result = null;
		if (assunto.equals(null)) {
			try {
				ap.save(assunto);
			} catch (DataAccessException e) {
				e.printStackTrace();
				result = e.getMessage();
			}	
		}
		return result;
	}
	
	@ResponseBody
	@RequestMapping(value = "/atualizarAssuntos", method = RequestMethod.GET)
	public void atualizarAssuntos() {
		// Desenvolver
	}
	
	@ResponseBody
	@RequestMapping(value = "/listarAssuntos", method = RequestMethod.GET)
	public List<Assuntos> listarAssuntos() {
		List<Assuntos> assuntos = null;
		try {
			assuntos = ap.findAll();
		} catch (DataAccessException e) {
			e.printStackTrace();
		}

		return assuntos;
	}

	@ResponseBody
	@RequestMapping(value = "/excluirAssuntos/{ass_id}", method = RequestMethod.GET)
	public String excluirAssuntos(@PathVariable long ass_id) {
		String result = null;
		try {
			Assuntos assuntoSelecionado = ap.findById(ass_id);
			ap.delete(assuntoSelecionado);
		} catch (DataAccessException e) {
			result = e.getMessage();
		}
		return result;
	}

}
