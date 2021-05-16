package br.com.iacit.sisatas.projections;

import java.time.LocalDate;

public interface AtasProjectionDataGrid {
	
	String getAtaId();
	String getAtaProjeto();
	String getAtaPauta();
	LocalDate getAtaDataCriacao();

}
