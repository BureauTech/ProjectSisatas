package br.com.iacit.sisatas.models;

import java.time.LocalDate;
import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AtasHeaderControllerModel {

	private String ataId;
	private LocalDate ataDataInicio;
	private LocalTime ataHoraInicio;
	private LocalDate ataDataFim;
	private LocalTime ataHoraFim;
	private String ataLocal;
	private UsuariosModel geraAtas;

}
