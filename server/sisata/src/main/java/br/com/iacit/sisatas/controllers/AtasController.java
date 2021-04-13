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

import br.com.iacit.sisatas.models.Atas;
import br.com.iacit.sisatas.repository.AtasRepository;

@Controller
@RequestMapping("/atas")
public class AtasController {

		@Autowired
		private AtasRepository ap;

		@ResponseBody
		@RequestMapping(value = "/cadastrarAtas", method = RequestMethod.POST, consumes = "application/json")
		public String cadastrarAtas(@RequestBody Atas ata) {
			String result = null;
			try {
				ap.save(ata);
			} catch (DataAccessException e) {
				e.printStackTrace();
				result = e.getMessage();
			}
			return result;
		}
		
		@ResponseBody
		@RequestMapping(value = "/atualizarAtas", method = RequestMethod.GET)
		public void atualizarAtas() {
			// Desenvolver
		}

		@ResponseBody
		@RequestMapping(value = "/listarAtas", method = RequestMethod.GET)
		public List<Atas> listarAtas() {
			List<Atas> atas = null;
			try {
				atas = ap.findAll();
			} catch (DataAccessException e) {
				e.printStackTrace();
			}
			return atas;
		}

		@ResponseBody
		@RequestMapping(value = "/excluirAtas/{ata_id}", method = RequestMethod.GET)
		public String excluirAtas(@PathVariable long ata_id) {
			String result = null;
			try {
				Atas ataSelecionada = ap.findById(ata_id);
				ap.delete(ataSelecionada);
			} catch (DataAccessException e) {
				result = e.getMessage();
			}
			return result;
		}

}
