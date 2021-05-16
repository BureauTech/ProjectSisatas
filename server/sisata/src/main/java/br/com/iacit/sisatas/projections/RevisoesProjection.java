package br.com.iacit.sisatas.projections;

import java.time.LocalDate;

public interface RevisoesProjection {
	Long getRevId();
  String getRevAssunto();
  LocalDate getRevPrazo();
  LocalDate getRevData();
  UsuarioProjectionNome getResponsavelRevisoes();
  AtasProjectionId getContemRevisoes();

  interface UsuarioProjectionNome {
    String getUsuNome();
  }
}
