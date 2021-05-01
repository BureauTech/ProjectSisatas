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

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.iacit.sisatas.models.ComentariosModel;
import br.com.iacit.sisatas.repository.ComentariosRepository;

@Controller
@RequestMapping("/comentarios")
public class ComentariosController {

		@Autowired
		private ComentariosRepository cp;

		@ResponseBody
		@RequestMapping(value = "/cadastrarComentarios", method = RequestMethod.POST, consumes = "application/json")
		public String cadastrarComentarios(@RequestBody String comentario) {
			String result = null;
			
			ObjectMapper mapper = new ObjectMapper();
			ComentariosModel comentarioDB = null;
			
			try {
				comentarioDB = mapper.readValue(comentario, ComentariosModel.class);
				cp.save(comentarioDB);
			} catch (DataAccessException | JsonProcessingException e) {
				e.printStackTrace();
				result = e.getMessage();
			}
			return result;
		}
		
		@ResponseBody
		@RequestMapping(value = "/atualizarComentarios", method = RequestMethod.GET)
		public void atualizarComentarios() {
			// Desenvolver
		}

		@ResponseBody
		@RequestMapping(value = "/listarComentarios", method = RequestMethod.GET)
		public List<ComentariosModel> listarComentarios() {
			List<ComentariosModel> comentarios = null;
			try {
				comentarios = cp.findAll();
			} catch (DataAccessException e) {
				e.printStackTrace();
			}
			return comentarios;
		}

		@ResponseBody
		@RequestMapping(value = "/excluirComentarios/{com_id}", method = RequestMethod.GET)
		public String excluirComentarios(@PathVariable long com_id) {
			String result = null;
			try {
				ComentariosModel comentarioSelecionado = cp.findBycomId(com_id);
				cp.delete(comentarioSelecionado);
			} catch (DataAccessException e) {
				result = e.getMessage();
			}
			return result;
		}
}
