package br.com.iacit.sisatas.controllers;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.iacit.sisatas.conversor.Conversor;
import br.com.iacit.sisatas.models.AtasModel;
import br.com.iacit.sisatas.projections.AtasProjectionDataGrid;
import br.com.iacit.sisatas.projections.AtasProjectionExibir;
import br.com.iacit.sisatas.projections.AtasProjectionId;
import br.com.iacit.sisatas.repository.AtasRepository;
import br.com.iacit.sisatas.returns.MessageReturn;

@CrossOrigin
@Controller
@RequestMapping("/atas")
public class AtasController {
	
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
		
	/**
	 * @Author Daniel Oliveira
	 *
	 *	Retorna o ataId da última Ata.
	 *
	 */
	@ResponseBody
	@RequestMapping(value = "/ultimoRegistro", method = RequestMethod.GET)
	public AtasProjectionId ultimoRegistro() {
		return ap.findTopByOrderByAtaIdDesc();
	}

	@ResponseBody
	@RequestMapping(value = "/cadastrarAta", method = RequestMethod.POST, consumes = "application/json")
	public MessageReturn cadastrarAtas(@RequestBody AtasModel ata) throws IOException {

		MessageReturn result = new MessageReturn();

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
			ap.save(ata);
			result.setMensagem("Ata cadastrada com sucesso.");
			result.setErro(false);
		} catch (DataAccessException e) {
			e.printStackTrace();
			result.setMensagem(e.getMessage());
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
	 * 		String operacao;
	 *  	Boolean erro;
	 *  	String mensagem;
	 * )
	 * operacao: "atualizarAtas";
	 * erro: true, erro ao realizar a persistência; false: Ata atualizada com sucesso.
	 * mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
	 * 
	 */ 
	@ResponseBody
	@RequestMapping(value = "/atualizarAtas", method = RequestMethod.PUT)
	public MessageReturn atualizarAtas(@RequestBody AtasModel ata) {
		MessageReturn result = new MessageReturn();

		result.setOperacao("atualizarAtas");

		try {
			ap.save(ata);
			result.setMensagem("Ata atualizada com sucesso.");
			result.setErro(false);
		} catch (DataAccessException e) {
			e.printStackTrace();
			result.setMensagem(e.getMessage());
			result.setErro(true);
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/listarAtas", method = RequestMethod.GET)
	public List<?> listarAtas() {
		List<?> atas = null;
		try {
			atas = ap.findBy(AtasProjectionDataGrid.class);
		} catch (DataAccessException e) {
			e.printStackTrace();
		}
		return atas;
	}
	
	/**
	 * @Author
	 * 
	 * METHOD: GET; Para pegar apenas 1 Ata.
	 * URL: http://localhost:8080/atas/pegarAta/{numeroId}
	 * 
	 * PathVariable: {numeroId}
	 * 
	 * RETURN: Retorna uma Projeção <AtasProjectionExibir>;
	 *
	 */
		
	@ResponseBody
	@RequestMapping(value = "/pegarAta/{numeroId}", method = RequestMethod.GET)
	public AtasProjectionExibir pegarAta(@PathVariable String numeroId) {

		String ata_id = numeroId.substring(0, numeroId.length() - 2) + "/" + numeroId.substring(numeroId.length() - 2);
		AtasProjectionExibir ataSelecionada = null;
		try {
			if (ap.existsByataId(ata_id)) {
				ataSelecionada = ap.findByataId(ata_id);
			}
		} catch (DataAccessException e) {
			e.printStackTrace();
		}
		return ataSelecionada;
	}

	/**
	 * 
	 * METHOD: DELETE; Para excluir Atas.
	 * URL: http://localhost:8080/atas/excluirAtas/{ata_id}
	 * 
	 * PathVariable: {usu_id}
	 * 
	 * RETURN: Retorna um objeto <result> MessageReturn(
	 * 	String operacao;
	 *  Boolean erro;
	 *  String mensagem;
	 * )
	 * operacao: "excluirAtas";
	 * erro: true, ata não encontrada; false: deleção realizada com sucesso.
	 * mensagem: mensagem definida manualmente ou caso haja exceção <e.getMessage()>
	 *
	 */
	@ResponseBody
	@RequestMapping(value = "/excluirAtas/{ata_id}", method = RequestMethod.DELETE)
	public MessageReturn excluirAtas(@PathVariable String ata_id) {
		MessageReturn result = new MessageReturn();

		result.setOperacao("excluirAtas");

		try {
			if (ap.existsByataId(ata_id)) {
				AtasModel ataSelecionada = ap.findByataId(ata_id);
				ap.delete(ataSelecionada);
				result.setMensagem("Ata excluída com sucesso.");
				result.setErro(false);
			}
		} catch (DataAccessException e) {
			e.printStackTrace();
			result.setMensagem(e.getMessage());
			result.setErro(true);
		}

		return result;
	}

}
