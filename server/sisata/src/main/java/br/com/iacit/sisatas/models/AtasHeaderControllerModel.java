package br.com.iacit.sisatas.models;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AtasHeaderControllerModel {
	
	private String ataId;
	private Date ataDataInicio;
	private Date ataHoraInicio;
	private Date ataDataFim;
	private Date ataHoraFim;
	private String ataLocal;
	private UsuariosModel geraAtas;

}
