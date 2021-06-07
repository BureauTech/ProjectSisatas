package br.com.iacit.sisatas.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@JsonIgnoreProperties
@Table(name = "Usuarios", uniqueConstraints =
@UniqueConstraint(columnNames = "usuEmail", name = "uk_usuEmail"))
public class UsuariosModel implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long usuId;
	@Column(nullable = false, length = 50)
	private String usuNome;
	@Column(nullable = false, length = 50)
	private String usuEmail;
	@Column(nullable = true)
	private String usuSenha;
	@Column(nullable = false, length = 30)
	private String usuTelefone;
	@Column(nullable = false, length = 50)
	private String usuCargo;
	@Column(nullable = false, length = 50)
	private String usuAreaEmpresa;
	@Column(nullable = true)
	private byte[] usuAssinatura;
	@Column(nullable = false, length = 15)
	private String usuPerfil;
	@Column
	private String usuConfirmationToken;
	@Column
	private String usuSessionToken;
	
}
