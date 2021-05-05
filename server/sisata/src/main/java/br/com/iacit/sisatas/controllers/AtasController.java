package br.com.iacit.sisatas.controllers;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.iacit.sisatas.models.AtasBodyModel;
import br.com.iacit.sisatas.models.AtasModel;
import br.com.iacit.sisatas.projections.AtasProjectionId;
import br.com.iacit.sisatas.repository.AtasRepository;

@CrossOrigin
@Controller
@RequestMapping("/atas")
public class AtasController {

		@Autowired
		private AtasRepository ap;
		
		/**
		 * @Author Daniel Oliveira
		 *
		 * Retorna o ataId da última Ata.
		 *
		 */		
		@ResponseBody
		@RequestMapping(value = "/ultimoRegistro", method = RequestMethod.GET)
		public AtasProjectionId ultimoRegistro() {
			return ap.findTopBy();
		}
		
		
		/**
		 * @Author Daniel Oliveira
		 *
		 * Cadastr
		 *
		 */	
		@ResponseBody
		@RequestMapping(value = "/cadastrarAtas", method = RequestMethod.POST, consumes = { "multipart/form-data" })
		public String cadastrarAtas(String ata) throws IOException {
			System.out.println(ata);
			
			String result = null;
			
			ObjectMapper mapper = new ObjectMapper();
			AtasBodyModel pessoa = mapper.readValue(ata, AtasBodyModel.class);
			System.out.println(pessoa);
			
			try {
				//System.out.println(pessoa);
				//ap.save(AtasMapper.converter(ataHeader, ataProject, ataPauta, ataTopics));
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
		public List<AtasModel> listarAtas() {
			List<AtasModel> atas = null;
			try {
				atas = ap.findAll();
			} catch (DataAccessException e) {
				e.printStackTrace();
			}
			return atas;
		}
		
		@ResponseBody
		@RequestMapping(value = "/pegarAta/{ata_id}", method = RequestMethod.GET)
		public ResponseEntity<AtasModel> pegarAta(@PathVariable long ata_id) {
			try {
				if (ap.existsByataId(ata_id)) {
					AtasModel ataSelecionada = ap.findByataId(ata_id);
			        return ResponseEntity.ok(ataSelecionada);
			    }
			} catch (DataAccessException e) {
				e.printStackTrace();
			}
			return ResponseEntity.notFound().build();
		}

		@ResponseBody
		@RequestMapping(value = "/excluirAtas/{ata_id}", method = RequestMethod.DELETE)
		public ResponseEntity<String> excluirAtas(@PathVariable long ata_id) {
			try {
				AtasModel ataSelecionada = ap.findByataId(ata_id);
				if (ap.existsByataId(ata_id)) {
					ap.delete(ataSelecionada);
			        return ResponseEntity.ok().build();
			    }
			} catch (DataAccessException e) {
				e.printStackTrace();
			}
			
			return ResponseEntity.notFound().build();
		}

}
