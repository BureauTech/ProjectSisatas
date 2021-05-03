package br.com.iacit.sisatas.models;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AtasTopicsControllerModel {
	
	private List<AssuntosModel> assuntos;

}
