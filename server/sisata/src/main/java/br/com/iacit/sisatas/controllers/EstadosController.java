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

import br.com.iacit.sisatas.models.EstadosModel;
import br.com.iacit.sisatas.repository.EstadosRepository;

@Controller
@RequestMapping("/estados")
public class EstadosController {

			@Autowired
			private EstadosRepository ep;

			@ResponseBody
			@RequestMapping(value = "/cadastrarEstados", method = RequestMethod.POST, consumes = "application/json")
			public String cadastrarEstados(@RequestBody EstadosModel estado) {
				String result = null;
				try {
					ep.save(estado);
				} catch (DataAccessException e) {
					e.printStackTrace();
					result = e.getMessage();
				}
				return result;
			}
			
			@ResponseBody
			@RequestMapping(value = "/atualizarEstados", method = RequestMethod.GET)
			public void atualizarEstados() {
				// Desenvolver
			}

			@ResponseBody
			@RequestMapping(value = "/listarEstados", method = RequestMethod.GET)
			public List<EstadosModel> listarEstados() {
				List<EstadosModel> estados = null;
				try {
					estados = ep.findAll();
				} catch (DataAccessException e) {
					e.printStackTrace();
				}
				return estados;
			}

			@ResponseBody
			@RequestMapping(value = "/excluirEstados/{est_id}", method = RequestMethod.GET)
			public String excluirEstados(@PathVariable long est_id) {
				String result = null;
				try {
					EstadosModel estadoSelecionado = ep.findByestId(est_id);
					ep.delete(estadoSelecionado);
				} catch (DataAccessException e) {
					result = e.getMessage();
				}
				return result;
			}
}
