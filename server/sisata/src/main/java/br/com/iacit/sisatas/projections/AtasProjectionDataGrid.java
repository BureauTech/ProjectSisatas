package br.com.iacit.sisatas.projections;

import java.sql.Date;

public interface AtasProjectionDataGrid {
	
	String getAtaId();
	String getAtaProjeto();
	String getAtaPauta();
	Date getAtaDataCriacao();

}
