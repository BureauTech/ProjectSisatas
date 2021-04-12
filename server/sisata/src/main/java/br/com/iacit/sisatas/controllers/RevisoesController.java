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

import br.com.iacit.sisatas.models.Revisoes;
import br.com.iacit.sisatas.repository.RevisoesRepository;

@Controller
@RequestMapping("/revisoes")
public class RevisoesController {

		@Autowired
		private RevisoesRepository rp;

		@ResponseBody
		@PostMapping(path = "/cadastrarRevisoes", consumes = "application/json")
		public String cadastrarRevisoes(@RequestBody Revisoes usuario) {
			String result = null;
			try {
				rp.save(usuario);
			} catch (DataAccessException e) {
				e.printStackTrace();
				result = e.getMessage();
			}
			return result;
		}
		
		@ResponseBody
		@RequestMapping(value = "/atualizarRevisoes", method = RequestMethod.GET)
		public void atualizarRevisoes() {
			// Desenvolver
		}

		@ResponseBody
		@RequestMapping(value = "/listarRevisoes", method = RequestMethod.GET)
		public List<Revisoes> listarRevisoes() {
			List<Revisoes> revisoes = null;
			try {
				revisoes = rp.findAll();
			} catch (DataAccessException e) {
				e.printStackTrace();
			}

			return revisoes;
		}

		@ResponseBody
		@RequestMapping(value = "/excluirRevisoes/{rev_id}", method = RequestMethod.GET)
		public String excluirRevisoes(@PathVariable long rev_id) {
			String result = null;
			try {
				Revisoes revisaoSelecionada = rp.findById(rev_id);
				rp.delete(revisaoSelecionada);
			} catch (DataAccessException e) {
				result = e.getMessage();
			}
			return result;
		}

}
