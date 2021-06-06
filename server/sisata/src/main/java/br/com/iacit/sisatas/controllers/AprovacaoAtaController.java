package br.com.iacit.sisatas.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.iacit.sisatas.models.AprovacaoAtaModel;
import br.com.iacit.sisatas.models.AtasModel;
import br.com.iacit.sisatas.models.EstadosModel;
import br.com.iacit.sisatas.projections.AprovacaoAtaProjection;
import br.com.iacit.sisatas.repository.AprovacaoAtaRepository;
import br.com.iacit.sisatas.repository.AtasRepository;
import br.com.iacit.sisatas.repository.EstadosRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Controller
@RequestMapping("/aprovacaoata")
@CrossOrigin
public class AprovacaoAtaController {

			@Autowired
			private EstadosRepository ep;
      @Autowired
			private AprovacaoAtaRepository aar;
      @Autowired
			private AtasRepository ar;

			@ResponseBody
			@RequestMapping(value = "/cadastrarEstados", method = RequestMethod.POST, consumes = "application/json")
			public String cadastrarEstados(@RequestBody AprovacaoAtaModel estado) {
				String result = null;
				try {
					aar.save(estado);
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
			@RequestMapping(value = "/estadoAprovacao/{usuId}/{ataId}", method = RequestMethod.GET)
			public List<AprovacaoAtaProjection> estadoAprovacao(@PathVariable Long usuId, @PathVariable String ataId) {
				List<AprovacaoAtaProjection> estados = null;
				List<AprovacaoAtaProjection> filtrado = new ArrayList<>();
        String ata_id = ataId.substring(0, ataId.length() - 2) + "/" + ataId.substring(ataId.length() - 2);
				try {
          estados = aar.findAllProjectedBy();
          for (AprovacaoAtaProjection item : estados) {
            if (item.getAprovaAta().getUsuId() == usuId && item.getAtaReferencia().getAtaId().equals(ata_id)) {
              filtrado.add(item);
            }
          }
				} catch (DataAccessException e) {
					e.printStackTrace();
				}
				return filtrado;
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
