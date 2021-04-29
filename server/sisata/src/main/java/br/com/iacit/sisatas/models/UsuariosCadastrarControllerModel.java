package br.com.iacit.sisatas.models;

import java.io.Serializable;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class UsuariosCadastrarControllerModel implements Serializable {

	private static final long serialVersionUID = 1L;

	private String usuNome;
	private String usuEmail;
	private String usuTelefone;
	private String usuCargo;
	private String usuAreaEmpresa;
	private Long usuPerfil;
	
	
}
