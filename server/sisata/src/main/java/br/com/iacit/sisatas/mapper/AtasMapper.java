package br.com.iacit.sisatas.mapper;

import java.io.IOException;

import br.com.iacit.sisatas.models.AtasModel;
import br.com.iacit.sisatas.models.AtasHeaderControllerModel;
import br.com.iacit.sisatas.models.AtasPautaControllerModel;
import br.com.iacit.sisatas.models.AtasProjectControllerModel;
import br.com.iacit.sisatas.models.AtasTopicsControllerModel;

public class AtasMapper {

	public static AtasModel converter(AtasHeaderControllerModel ataHeader, 
							     AtasProjectControllerModel ataProject,
							     AtasPautaControllerModel ataPauta,
							     AtasTopicsControllerModel ataTopics) throws IOException {
		
		AtasModel ataBanco = new AtasModel();
		
		ataBanco.setAtaId(ataHeader.getAtaId());
		ataBanco.setAtaDataInicio(ataHeader.getAtaDataInicio());
		ataBanco.setAtaHoraInicio(ataHeader.getAtaHoraInicio());
		ataBanco.setAtaDataFim(ataHeader.getAtaDataFim());
		ataBanco.setAtaHoraFim(ataHeader.getAtaHoraFim());
		ataBanco.setAtaLocal(ataHeader.getAtaLocal());
		ataBanco.setGeraAtas(ataHeader.getGeraAtas());
		
		ataBanco.setParticipaAtas(ataProject.getParticipaAtas());
		ataBanco.setAtaProjeto(ataProject.getAtaProjeto());
		
		ataBanco.setAtaPauta(ataPauta.getAtaPauta());
		
		ataBanco.setAssuntos(ataTopics.getAssuntos());
		
		return ataBanco;
	}

}
