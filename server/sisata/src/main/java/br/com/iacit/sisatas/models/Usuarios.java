package br.com.iacit.sisatas.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "Usuarios")
public class Usuarios implements Serializable{
	
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
	@Column(nullable = false)
	private byte[] usuAssinatura;
	private String UsuAssinaturaString;
	@Column(nullable = false)
	private Long usuPerfil;
	
}
