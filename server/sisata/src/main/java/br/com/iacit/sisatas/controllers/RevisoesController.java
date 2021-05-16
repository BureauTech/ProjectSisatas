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

import br.com.iacit.sisatas.models.AtasModel;
import br.com.iacit.sisatas.models.RevisoesModel;
import br.com.iacit.sisatas.projections.RevisoesProjection;
import br.com.iacit.sisatas.repository.RevisoesRepository;
import br.com.iacit.sisatas.returns.MessageReturn;

@Controller
@RequestMapping("/revisoes")
public class RevisoesController {

		@Autowired
		private RevisoesRepository rp;

		@ResponseBody
		@RequestMapping(value = "/cadastrarRevisoes", method = RequestMethod.POST, consumes = "application/json")
		public String cadastrarRevisoes(@RequestBody RevisoesModel usuario) {
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
		public List<RevisoesProjection> listarRevisoes() {
			List<RevisoesProjection> revisoes = null;
			try {
				revisoes = rp.findAllProjectedBy();
			} catch (DataAccessException e) {
				e.printStackTrace();
			}

			return revisoes;
		}

		
		/**
		 * @Author Daniel Oliveira
		 * 
		 * METHOD: GET; Para pegar revisões de uma ata específica.
		 * URL: http://localhost:8080/revisoes/pegarRevisoes
		 * BODY:
		 	{
		 		"ataId": <String>
		 	}
		 * RETURN: Retorna um objeto <result> MessageReturn(
		 * 	String operacao;
		 *  Boolean erro;
		 *  String mensagem;
		 *  List<RevisoesModel>
		 * )
		 * 
		 * operacao: "pegarRevisoes";
		 * erro: true, erro ao realizar a busca; false: busca realizada com sucesso.
		 * mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
		 * List<RevisoesModel>: Retorna o(s) objetos correspondentes encontrados.
		 */ 

		@ResponseBody
		@RequestMapping(value = "/pegarRevisoes", method = RequestMethod.GET)
		public MessageReturn pegarRevisoes(@RequestBody AtasModel ata) {

			MessageReturn result = new MessageReturn();

			result.setOperacao("pegarRevisoes");
			List<RevisoesModel> revisoes = null;

			try {
				revisoes = (List<RevisoesModel>) rp.findBycontemRevisoes(ata);
				
				if (revisoes != null) {
					result.setMensagem("Sucesso ao pegar revisões");
					result.setErro(false);
					result.setData(revisoes);
				}
				result.setMensagem("Não há revisões para a ata informada.");
				result.setErro(false);
			} catch (DataAccessException e) {
				e.printStackTrace();
				result.setMensagem(e.getMessage());
				result.setErro(true);
			}

			return result;
		}
		
		@ResponseBody
		@RequestMapping(value = "/excluirRevisoes/{rev_id}", method = RequestMethod.GET)
		public String excluirRevisoes(@PathVariable long rev_id) {
			String result = null;
			try {
				RevisoesModel revisaoSelecionada = rp.findByrevId(rev_id);
				rp.delete(revisaoSelecionada);
			} catch (DataAccessException e) {
				result = e.getMessage();
			}
			return result;
		}

}
