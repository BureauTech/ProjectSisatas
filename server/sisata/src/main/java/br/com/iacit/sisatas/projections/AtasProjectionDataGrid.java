package br.com.iacit.sisatas.projections;

import java.time.LocalDate;

public interface AtasProjectionDataGrid {
	
	String getAtaId();
	String getAtaProjeto();
	String getAtaPauta();
	String getAtaEstado();
	String getAtaQuemAprovou();
	LocalDate getAtaDataCriacao();

}
