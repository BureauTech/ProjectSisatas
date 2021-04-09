package br.com.iacit.sisatas.DAO.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Usuarios")
public class Usuarios implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int usu_id;
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
	@JoinColumn(name = "fk_per_id", referencedColumnName = "per_id") // OK
	private Perfis pertenceUsuarios;

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public int getUsu_id() {
		return usu_id;
	}

	public String getUsu_nome() {
		return usu_nome;
	}

	public String getUsu_email() {
		return usu_email;
	}

	public String getUsu_senha() {
		return usu_senha;
	}

	public String getUsu_telefone() {
		return usu_telefone;
	}

	public String getUsu_cargo() {
		return usu_cargo;
	}

	public String getUsu_area_empresa() {
		return usu_area_empresa;
	}

	public String getUsu_assinatura() {
		return usu_assinatura;
	}

	public Perfis getPertenceUsuarios() {
		return pertenceUsuarios;
	}

	public void setUsu_id(int usu_id) {
		this.usu_id = usu_id;
	}

	public void setUsu_nome(String usu_nome) {
		this.usu_nome = usu_nome;
	}

	public void setUsu_email(String usu_email) {
		this.usu_email = usu_email;
	}

	public void setUsu_senha(String usu_senha) {
		this.usu_senha = usu_senha;
	}

	public void setUsu_telefone(String usu_telefone) {
		this.usu_telefone = usu_telefone;
	}

	public void setUsu_cargo(String usu_cargo) {
		this.usu_cargo = usu_cargo;
	}

	public void setUsu_area_empresa(String usu_area_empresa) {
		this.usu_area_empresa = usu_area_empresa;
	}

	public void setUsu_assinatura(String usu_assinatura) {
		this.usu_assinatura = usu_assinatura;
	}

	public void setPertenceUsuarios(Perfis pertenceUsuarios) {
		this.pertenceUsuarios = pertenceUsuarios;
	}	
}
