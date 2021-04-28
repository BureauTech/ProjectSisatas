package br.com.iacit.sisatas.models;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AtasProjectControllerModel {
	
	private List<UsuariosModel> participaAtas;

}
