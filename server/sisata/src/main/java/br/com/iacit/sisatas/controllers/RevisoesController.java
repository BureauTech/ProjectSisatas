package br.com.iacit.sisatas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.iacit.sisatas.models.AtasModel;
import br.com.iacit.sisatas.models.RevisoesModel;
import br.com.iacit.sisatas.projections.AtasProjectionRevisao;
import br.com.iacit.sisatas.projections.RevisoesProjection;
import br.com.iacit.sisatas.repository.AtasRepository;
import br.com.iacit.sisatas.repository.RevisoesRepository;
import br.com.iacit.sisatas.returns.MessageReturn;

@SuppressWarnings("unchecked")
@Controller
@RequestMapping("/revisoes")
public class RevisoesController {

		private String msgSucesso = "Sucesso ao realizar a operação.";
		private String msgFalha = "Falha ao realizar a operação.";
		
		/**
		 * @Author Daniel Oliveira
		 * 
		 *	Atribuição à variável <rp> os métodos implementados de
		 *  JpaRepository<>, via interface
		 *  <br.com.iacit.sisatas.repository.AtasRepository>
		 *
		 */

		@Autowired
		private RevisoesRepository rp;
		
		@Autowired
		private AtasRepository ap;
		
		/**
		 * @Author Daniel Oliveira
		 * 
		 * METHOD: GET; Para pegar todas a revisões
		 * URL: http://localhost:8080/revisoes/cadastrarRevisoes
		 * BODY: 
		 	{
					"revAssunto": <String>,
					"revPrazo": <LocalDate>,
					"revData":<LocalDate>,
					"responsavelRevisoes": {
						"usuId": Long
					}
					"contemRevisoes": {
						"ataId": <String>
					}
		   }
		 *  
		 * RETURN: Retorna um objeto <result> MessageReturn(
		 														String operacao;
															    Boolean erro;
															    String mensagem;
															    T data;
		 													)
		 * operacao: "cadastrarRevisoes";
		 * erro: true, erro ao realizar a busca; false: busca realizada com sucesso.
		 * mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
		 * data: Retorna List<RevisoesModel> do(s) objetos correspondentes encontrados.
		 */ 
		
		@ResponseBody
		@RequestMapping(value = "/cadastrarRevisoes", method = RequestMethod.POST, consumes = "application/json")
		public String cadastrarRevisoes(@RequestBody RevisoesModel revisao) {
			String result = null;
			try {
				revisao = rp.save(revisao);

				String ataId = revisao.getContemRevisoes().getAtaId();
				List<AtasModel> ataBanco =  ap.findBy(AtasModel.class);
				AtasModel ataBd = null;
				for (AtasModel ata : ataBanco) {
					System.out.println(ata.getAtaId() + ataId);
					if (ata.getAtaId().equals(ataId)) {
						ataBd = ata;
					}
				}
				ataBd.setAtaEstado("Revisada");
				ap.save(ataBd);
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

		/**
		 * @Author Daniel Oliveira
		 * @Updated Denis Lima
		 * 
		 * METHOD: GET; Para pegar todas a revisões
		 * URL: http://localhost:8080/revisoes/listarRevisoes
		 * RETURN: Retorna um objeto <result> MessageReturn(
		 														String operacao;
															    Boolean erro;
															    String mensagem;
															    T data;
		 													)
		 * operacao: "pegarRevisoes";
		 * erro: true, erro ao realizar a busca; false: busca realizada com sucesso.
		 * mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
		 * data: Retorna List<RevisoesModel> do(s) objetos correspondentes encontrados.
		 */ 
		
		@ResponseBody
		@RequestMapping(value = "/listarRevisoes", method = RequestMethod.GET)
		public MessageReturn<?> listarRevisoes() {
			
			MessageReturn<List<RevisoesProjection>> result = new MessageReturn<>();
			result.setOperacao("pegarRevisoes");
			
			try {
				List<RevisoesProjection> revisoes = rp.findAllProjectedBy();
				result.setMensagem(msgSucesso);
				result.setErro(false);
				result.setData(revisoes);
			} catch (DataAccessException e) {
				e.printStackTrace();
				result.setMensagem(msgFalha + " Causa: " + e.getMessage());
				result.setErro(false);
			}

			return result;
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
		 														String operacao;
															    Boolean erro;
															    String mensagem;
															    T data;
		 													)
		 * operacao: "pegarRevisoes";
		 * erro: true, erro ao realizar a busca; false: busca realizada com sucesso.
		 * mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
		 * data: Retorna List<RevisoesModel> do(s) objetos correspondentes encontrados.
		 */ 

		@ResponseBody
		@RequestMapping(value = "/pegarRevisoes", method = RequestMethod.GET)
		public MessageReturn<?> pegarRevisoes(@RequestBody AtasModel ata) {

			MessageReturn<List<RevisoesModel>> result = new MessageReturn<>();
			result.setOperacao("pegarRevisoes");

			try {
				List<RevisoesModel> revisoes = (List<RevisoesModel>) rp.findBycontemRevisoes(ata);

				if (revisoes != null) {
					result.setMensagem(msgSucesso);
					result.setErro(false);
					result.setData(revisoes);
				} else {
					result.setMensagem(msgFalha+" Causa: Não há revisões para a ata informada.");
					result.setErro(true);
				}
			} catch (DataAccessException e) {
				e.printStackTrace();
				result.setMensagem(msgFalha + " Causa: " + e.getMessage());
				result.setErro(true);
			}

			return result;
		}
		
		/**
		 * @Author Daniel Oliveira
		 * 
		 *	METHOD: DELETE; Para excluir Revisões. 
		 *	URL: http://localhost:8080/revisoes/excluirRevisoes/{rev_id}
		 *	PathVariable: {rev_id}
		 * 
		 * RETURN: Retorna um objeto <result> MessageReturn(
																String operacao;
																Boolean erro;
																String mensagem;
		 													)
		 * 
		 * operacao: "excluirRevisoes";
		 * erro: true, erro ao realizar a exclusao; false: exclusão realizada com sucesso.
		 * mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
		 */ 
		
		@ResponseBody
		@RequestMapping(value = "/excluirRevisoes/{rev_id}", method = RequestMethod.GET)
		public MessageReturn<?> excluirRevisoes(@PathVariable long rev_id) {
			MessageReturn<List<RevisoesModel>> result = new MessageReturn<>();
			result.setOperacao("pegarRevisoes");

			try {
				RevisoesModel revisaoSelecionada = rp.findByrevId(rev_id);
				rp.delete(revisaoSelecionada);
				result.setMensagem(msgSucesso);
				result.setErro(false);
			} catch (DataAccessException e) {
				e.printStackTrace();
				result.setMensagem(msgFalha + " Causa: " + e.getMessage());
				result.setErro(true);
			}
			return result;
		}
		
		/**
		 * @Author Daniel Oliveira
		 * 
		 * METHOD: DELETE; Para aprovar Revisões.
		 * URL: http://localhost:8080/revisao/aprovarRevisao
		 * 
		 * PARAM: usu_email, rev_id e ata_id
		 * 
		 * RETURN: Retorna um objeto <result> MessageReturn(
			 														String operacao;
																    Boolean erro;
																    String mensagem;
			 												)
		 * operacao: "aprovarRevisao";
		 * erro: true, erro ao aprovar a ata; false: aprovação realizada com sucesso.
		 * mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
		 */
		
		@ResponseBody
		@RequestMapping(value = "/aprovarRevisao", method = RequestMethod.POST)
		public MessageReturn<?> aprovarRevisao(@RequestParam String usu_email, @RequestParam long rev_id, @RequestParam String ata_id) {
			
			MessageReturn<?> result = new MessageReturn<String>();
			result.setOperacao("aprovarRevisao");

			try {
				RevisoesModel revisaoBD = rp.findByrevId(rev_id);
				AtasProjectionRevisao ataBD = (AtasProjectionRevisao) ap.findByataId(ata_id);
				
				if (revisaoBD != null || ataBD != null) {
					revisaoBD.setRevQuemAprovou(usu_email + ";");
					revisaoBD.setRevQtdAprovacao(revisaoBD.getRevQtdAprovacao() + 1);
					if (revisaoBD.getRevQtdAprovacao() == ataBD.getParticipaAtas().size()) {
						revisaoBD.setRevEstado("Aprovada");
						rp.save(revisaoBD);
					} else {
						rp.save(revisaoBD);
						result.setMensagem(msgSucesso);
						result.setErro(false);
					}
				} else {
					result.setMensagem(msgFalha + " Causa: Não há Revisão ou Ata para o ID informado.");
					result.setErro(true);
				}
			} catch (DataAccessException e) {
				e.printStackTrace();
				result.setMensagem(msgFalha + " Causa: " + e.getMessage());
				result.setErro(true);
			}
			return result;
		}
}
