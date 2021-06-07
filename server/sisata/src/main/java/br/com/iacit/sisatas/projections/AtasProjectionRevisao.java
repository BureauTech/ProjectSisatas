package br.com.iacit.sisatas.projections;

import java.util.List;

public interface AtasProjectionRevisao {
	
	String getAtaId();
	
	List<AtasProjectionUsuarios> getParticipaAtas();

	interface AtasProjectionUsuarios {
		String getUsuEmail();
	}
}
