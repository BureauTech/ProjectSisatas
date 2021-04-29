package br.com.iacit.sisatas.models;

import java.io.Serializable;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class UsuariosListarControllerModel implements Serializable {

	private static final long serialVersionUID = 1L;

	private long usuId;
	private String usuNome;
	private String usuEmail;
	private String usuCargo;
	private String usuAreaEmpresa;
	private Long usuPerfil;
	
	
}
