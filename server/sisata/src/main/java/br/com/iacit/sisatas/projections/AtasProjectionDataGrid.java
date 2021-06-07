package br.com.iacit.sisatas.projections;

import java.time.LocalDate;
import java.util.List;

public interface AtasProjectionDataGrid {
	
	String getAtaId();
	String getAtaProjeto();
	String getAtaPauta();
	String getAtaEstado();
	UsuariosProjectionNomeId getGeraAtas();
	List<UsuariosProjectionParticipanteNomeId> getParticipaAtas();
	LocalDate getAtaDataCriacao();

	interface UsuariosProjectionNomeId {
		Long getUsuId();
		String getUsuNome();
	}
	interface UsuariosProjectionParticipanteNomeId {
		Long getUsuId();
		String getUsuNome();
	}
}
