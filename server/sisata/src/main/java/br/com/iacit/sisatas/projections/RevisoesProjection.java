package br.com.iacit.sisatas.projections;

import java.time.LocalDate;

public interface RevisoesProjection {
	Long getRevId();

	String getRevAssunto();

	LocalDate getRevPrazo();

	LocalDate getRevData();

	UsuarioProjectionNome getResponsavelRevisoes();

	AtasProjectionRevisao getContemRevisoes();

	interface UsuarioProjectionNome {
		String getUsuNome();
	}
}
