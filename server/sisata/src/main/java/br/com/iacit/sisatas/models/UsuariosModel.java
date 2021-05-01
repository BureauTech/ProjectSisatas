package br.com.iacit.sisatas.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Usuarios", uniqueConstraints = 
@UniqueConstraint(columnNames = "usuEmail", name = "usuEmail_uk"))
public class UsuariosModel implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long usuId;
	@Column(nullable = false, length = 50)
	private String usuNome;
	@Column(nullable = false, length = 50)
	private String usuEmail;
	@Column(nullable = true)
	private String usuSenha;
	@Column(nullable = false, length = 11)
	private String usuTelefone;
	@Column(nullable = false, length = 50)
	private String usuCargo;
	@Column(nullable = false, length = 50)
	private String usuAreaEmpresa;
	@Column(nullable = true)
	private byte[] usuAssinatura;
	@Column(nullable = false)
	private Long usuPerfil;
	
}
