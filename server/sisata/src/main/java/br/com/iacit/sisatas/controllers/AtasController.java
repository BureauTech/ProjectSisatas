package br.com.iacit.sisatas.controllers;

import java.io.IOException;
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

import br.com.iacit.sisatas.conversor.Conversor;
import br.com.iacit.sisatas.models.AprovacaoAtaModel;
import br.com.iacit.sisatas.models.AtasModel;
import br.com.iacit.sisatas.models.UsuariosModel;
import br.com.iacit.sisatas.projections.AtasProjectionDataGrid;
import br.com.iacit.sisatas.projections.AtasProjectionExibir;
import br.com.iacit.sisatas.projections.AtasProjectionRevisao;
import br.com.iacit.sisatas.repository.AprovacaoAtaRepository;
import br.com.iacit.sisatas.repository.AtasRepository;
import br.com.iacit.sisatas.returns.MessageReturn;

@Controller
@RequestMapping("/atas")
public class AtasController {
	
	private String msgSucesso = "Sucesso ao realizar a operação.";
	private String msgFalha = "Falha ao realizar a operação.";
	
	/**
	 * @Author Daniel Oliveira
	 * 
	 *	Atribuição à variável <ap> os métodos implementados de
	 *  JpaRepository<>, via interface
	 *  <br.com.iacit.sisatas.repository.AtasRepository>
	 *
	 */

	@Autowired
	private AtasRepository ap;

	@Autowired
	private AprovacaoAtaRepository aar;
		
	/**
	 * @Author Daniel Oliveira
	 *
	 *	Retorna o ataId da última Ata.
	 *
	 */
	
	@ResponseBody
	@RequestMapping(value = "/ultimoRegistro", method = RequestMethod.GET)
	public AtasProjectionRevisao ultimoRegistro() {
		return ap.findTopByOrderByAtaIdDesc();
	}
	
	/**
	 * @Author Caique
	 * @Updade Denis Lima
	 * 
	 * METHOD: POST; Para cadastrar Atas.
	 * URL: http://localhost:8080/atas/cadastrarAta
	 * BODY: 
	 * {
		    "ataDataInicio": <Date>,
		    "ataDataFim": <Date>,
		    "ataHoraInicio": <DateTime>,
		    "ataHoraFim": <DateTime>,
		    "ataLocal": <String>,
		    "ataProjeto": <String>,
		    "ataPauta": <String>,
		    "ataObservacao": <String>,
		    "geraAtas": { // Objetos<UsuariosModel.usuId>
		    	 "usuId": <long>
		    },
		    "participaAtas": [ // Lista de Objetos<UsuariosModel.usuId>
		        {
		            "usuId": <Long>
		        }
		     ],
		    "assuntos": [ // Lista de Objetos<AssuntosModel>
		        {
		            "assId": <Long>,
		            "assAssunto": <String>,
		            "assPrazo": <Date>,
		            "ataId": <String>,
		            "responsavelAssuntos": [ // Lista de Objetos<UsuariosModel.usuId>
		                {
		                    "usuId": <Long>
		                }
		            ]
		        }
		    ]
		}

	 * 
	 * RETURN: Retorna um objeto <result> MessageReturn(
		 														String operacao;
															    Boolean erro;
															    String mensagem;
															    T data;
		 												)
	 * operacao: "cadastrarAta";
	 * erro: true, erro ao realizar a persistência; false: Ata atualizada com sucesso.
	 * mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
	 * 
	 */

	@ResponseBody
	@RequestMapping(value = "/cadastrarAta", method = RequestMethod.POST, consumes = "application/json")
	public MessageReturn<?> cadastrarAtas(@RequestBody AtasModel ata) throws IOException {

		MessageReturn<?> result = new MessageReturn<String>();

		result.setOperacao("cadastrarAta");

		String ultimoId = "";
		if (ap.findTopByOrderByAtaIdDesc() == null)
			ultimoId = "00/00";
		else
			ultimoId = ap.findTopByOrderByAtaIdDesc().getAtaId();

		Conversor conversor = new Conversor();
		String novoId = conversor.calcularId(ultimoId);
		ata.setAtaId(novoId);

		try {
			ata.setAtaEstado("Nova");
			ata = ap.save(ata);
			System.out.println(ata.getAtaId());
			result.setMensagem(msgSucesso);
			result.setErro(false);

			List<UsuariosModel> participantes = ata.getParticipaAtas();
			for (UsuariosModel participante : participantes) {
				System.out.println(participante.getUsuId());
				AprovacaoAtaModel aam = new AprovacaoAtaModel("Pendente", participante, ata);
				// aam.setAprDescricao("Pendente");
				// aam.setAtaReferencia(ata);
				// aam.setAprovaAta(participante);

				aar.save(aam);
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
	 * METHOD: PUT; Para atualizar Atas.
	 * URL: http://localhost:8080/atas/atualizarAtas
	 * BODY: 
	 * {
		    "ataId": <String>,
		    "ataDataInicio": <Date>,
		    "ataDataFim": <Date>,
		    "ataHoraInicio": <DateTime>,
		    "ataHoraFim": <DateTime>,
		    "ataLocal": <String>,
		    "ataProjeto": <String>,
		    "ataPauta": <String>,
		    "ataObservacao": <String>,
		    "geraAtas": { // Objetos<UsuariosModel.usuId>
		    	 "usuId": <long>
		    },
		    "participaAtas": [ // Lista de Objetos<UsuariosModel.usuId>
		        {
		            "usuId": <Long>
		        }
		     ],
		    "assuntos": [ // Lista de Objetos<AssuntosModel>
		        {
		            "assId": <Long>,
		            "assAssunto": <String>,
		            "assPrazo": <Date>,
		            "ataId": <String>,
		            "responsavelAssuntos": [ // Lista de Objetos<UsuariosModel.usuId>
		                {
		                    "usuId": <Long>
		                }
		            ]
		        }
		    ]
		}

		<ataId> deverá ser informado, pois será utilizado como referência para realizar a atualização;
	 * 
	 * RETURN: Retorna um objeto <result> MessageReturn(
		 														String operacao;
															    Boolean erro;
															    String mensagem;
															    T data;
		 												)
	 * operacao: "atualizarAtas";
	 * erro: true, erro ao realizar a persistência; false: Ata atualizada com sucesso.
	 * mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
	 * 
	 */ 
	
	@ResponseBody
	@RequestMapping(value = "/atualizarAtas", method = RequestMethod.PUT)
	public MessageReturn<?> atualizarAtas(@RequestBody AtasModel ata) {

		MessageReturn<String> result = new MessageReturn<>();
		result.setOperacao("atualizarAtas");

		try {
			ap.save(ata);
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
	 * METHOD: GET; Para listar atas.
	 * URL: http://localhost:8080/atas/listarAtas
	 * 
	 * RETURN: Retorna um objeto <result> MessageReturn(
		 														String operacao;
															    Boolean erro;
															    String mensagem;
															    T data;
		 												)
	 * operacao: "listarAtas";
	 * erro: true, erro ao realizar a busca; false: busca realizada com sucesso.
	 * mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
	 * data: Retorna List<AtasProjectionDataGrid> do(s) objetos correspondentes encontrados.
	 */ 
	
	@ResponseBody
	@RequestMapping(value = "/listarAtas", method = RequestMethod.GET)
	public MessageReturn<?> listarAtas() {
		MessageReturn<List<AtasProjectionDataGrid>> result = new MessageReturn<>();
		result.setOperacao("listarAtas");

		try {
			List<AtasProjectionDataGrid> atas = ap.findBy(AtasProjectionDataGrid.class);
			result.setMensagem(msgSucesso);
			result.setErro(false);
			result.setData(atas);
		} catch (DataAccessException e) {
			e.printStackTrace();
			result.setMensagem(msgFalha + " Causa: " + e.getMessage());
			result.setErro(true);
		}
		return result;
	}
	
	/**
	 * @Author Denis Lima
	 * @Update Daniel Oliveira
	 * 
	 * METHOD: GET; Para pegar apenas 1 Ata.
	 * URL: http://localhost:8080/atas/pegarAta/{numeroId}
	 * PathVariable: {numeroId}
	 * 
	 * RETURN: Retorna um objeto <result> MessageReturn(
		 														String operacao;
															    Boolean erro;
															    String mensagem;
															    T data;
		 												)
	 * operacao: "pegarAta";
	 * erro: true, erro ao realizar a busca; false: busca realizada com sucesso.
	 * mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
	 * data: Retorna <AtasProjectionExibir> do objeto correspondente encontrado.
	 */
		
	@ResponseBody
	@RequestMapping(value = "/pegarAta/{numeroId}", method = RequestMethod.GET)
	public MessageReturn<?> pegarAta(@PathVariable String numeroId) {

		MessageReturn<AtasProjectionExibir> result = new MessageReturn<>();
		result.setOperacao("pegarAta");
		String ata_id = numeroId.substring(0, numeroId.length() - 2) + "/" + numeroId.substring(numeroId.length() - 2);

		try {
			if (ap.existsByataId(ata_id)) {
				AtasProjectionExibir ataSelecionada = ap.findByataId(ata_id);
				result.setMensagem(msgSucesso);
				result.setErro(false);
				result.setData(ataSelecionada);
			} else {
				result.setMensagem(msgFalha + " Causa: Não há Ata para o ID informado.");
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
	 * @Author Denis Lima
	 * @Update Daniel Oliveira
	 * 
	 * METHOD: DELETE; Para excluir Atas.
	 * URL: http://localhost:8080/atas/excluirAtas/{ata_id}
	 * 
	 * PathVariable: {usu_id}
	 * 
	 * RETURN: Retorna um objeto <result> MessageReturn(
		 														String operacao;
															    Boolean erro;
															    String mensagem;
		 												)
	 * operacao: "excluirAtas";
	 * erro: true, erro ao realizar a busca; false: busca realizada com sucesso.
	 * mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
	 */
	
	@ResponseBody
	@RequestMapping(value = "/excluirAtas/{ata_id}", method = RequestMethod.DELETE)
	public MessageReturn<?> excluirAtas(@PathVariable String ata_id) {
		
		MessageReturn<?> result = new MessageReturn<String>();
		result.setOperacao("excluirAtas");

		// /{cod}/{ano}
		// AtasModel ata = ap.getOne(cod + "/" + ano);

		try {
			if (ap.existsByataId(ata_id)) {
				AtasModel ataSelecionada = (AtasModel) ap.findByataId(ata_id);
				ap.delete(ataSelecionada);
				result.setMensagem(msgSucesso);
				result.setErro(false);
			} else {
				result.setMensagem(msgFalha + " Causa: Não há Ata para o ID informado.");
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
	 * METHOD: DELETE; Para aprovar Atas.
	 * URL: http://localhost:8080/atas/aprovarAta
	 * 
	 * PARAM: usu_email e ata_id
	 * 
	 * RETURN: Retorna um objeto <result> MessageReturn(
		 														String operacao;
															    Boolean erro;
															    String mensagem;
		 												)
	 * operacao: "aprovarAta";
	 * erro: true, erro ao aprovar a ata; false: aprovação realizada com sucesso.
	 * mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
	 */
	
	@ResponseBody
	@RequestMapping(value = "/aprovarAta", method = RequestMethod.POST)
	public MessageReturn<?> aprovarAta(@RequestParam String usu_email, @RequestParam String ata_id) {

		MessageReturn<?> result = new MessageReturn<String>();
		result.setOperacao("aprovarAta");

		try {
			AtasModel ataBD = (AtasModel) ap.findByataId(ata_id);
			if (ataBD != null) {
				ataBD.setAtaQuemAprovou(usu_email + ";");
				ataBD.setAtaQtdAprovacao(ataBD.getAtaQtdAprovacao() + 1);
				if (ataBD.getAtaQtdAprovacao() == ataBD.getParticipaAtas().size()) {
					ataBD.setAtaEstado("Assinada");
					ap.save(ataBD);
				} else {
					ap.save(ataBD);
					result.setMensagem(msgSucesso);
					result.setErro(false);
				}
			} else {
				result.setMensagem(msgFalha + " Causa: Não há Ata para o ID informado.");
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
