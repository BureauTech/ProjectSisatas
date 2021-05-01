package br.com.iacit.sisatas.models;

import java.text.DateFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AtasHeaderControllerModel {
	
	private String ataId;
	private DateFormat ataDataInicio;
	private DateFormat ataHoraInicio;
	private DateFormat ataDataFim;
	private DateFormat ataHoraFim;
	private String ataLocal;
	private UsuariosModel geraAtas;

}
