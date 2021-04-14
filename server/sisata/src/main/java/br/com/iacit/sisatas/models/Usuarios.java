package br.com.iacit.sisatas.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
	private long id;
	@Column(nullable = false, length = 50)
	private String usu_nome;
	@Column(nullable = false, length = 50)
	private String usu_email;
	@Column(nullable = false) // Definira tamanho.
	private String usu_senha;
	@Column(nullable = false, length = 11)
	private String usu_telefone;
	@Column(nullable = false, length = 30)
	private String usu_cargo;
	@Column(nullable = false, length = 30)
	private String usu_area_empresa;
	@Column(nullable = false)
	private String usu_assinatura;// Definir qual como será salva a assinatura;
	
	@ManyToOne(optional = true)
	@JoinColumn(name = "fk_per_id", referencedColumnName = "id") // OK
	private Perfis pertenceUsuarios;
}
