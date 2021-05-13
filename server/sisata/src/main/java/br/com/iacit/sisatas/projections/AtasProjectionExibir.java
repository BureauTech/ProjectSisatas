package br.com.iacit.sisatas.projections;

import java.sql.Date;
import java.util.List;

public interface AtasProjectionExibir {

	String getAtaId();
	String getAtaLocal();
	String getAtaProjeto();
	String getAtaPauta();
	Date getAtaDataInicio();
	Date getAtaDataFim();
	Date getAtaHoraInicio();
	Date getAtaHoraFim();
	
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
		Date getAssPrazo();
		
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
