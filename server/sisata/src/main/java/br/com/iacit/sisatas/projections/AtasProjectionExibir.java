package br.com.iacit.sisatas.projections;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public interface AtasProjectionExibir {

	String getAtaId();
	String getAtaLocal();
	String getAtaProjeto();
	String getAtaPauta();
	LocalDate getAtaDataInicio();
	LocalDate getAtaDataFim();
	LocalTime getAtaHoraInicio();
	LocalTime getAtaHoraFim();
	String getAtaObservacao();
	
	List<AtasProjectionUsuarios> getParticipaAtas();

	interface AtasProjectionUsuarios {

		String getUsuNome();
		String getUsuAreaEmpresa();
		String getUsuTelefone();
		String getUsuEmail();
		byte[] getUsuAssinatura();
		String getUsuCargo();

	}

	List<AtasProjectionAssuntos> getAssuntos();

	interface AtasProjectionAssuntos {

		String getAssAssunto();
		LocalDate getAssPrazo();
		
		List<AtasProjectionAssuntosUsuarios> getResponsavelAssuntos();

		interface AtasProjectionAssuntosUsuarios {

			long getUsuId();
			String getUsuNome();
			String getUsuAreaEmpresa();
			String getUsuTelefone();
			String getUsuEmail();
		}
	}
}
