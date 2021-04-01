package br.com.iacit.sisata.DAO.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "usuarios")
public class Users {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private String usu_nome;
	@Column
	private String usu_email;
	@Column
	private String usu_telefone;
	@Column
	private String usu_cargo;
	@Column
	private String usu_area_empresa;
	@Column
	private String usu_assinatura;// Definir qual como será salva a assinatura;
	@ManyToOne
	private Profiles perfil;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsu_nome() {
		return usu_nome;
	}

	public void setUsu_nome(String usu_nome) {
		this.usu_nome = usu_nome;
	}

	public String getUsu_email() {
		return usu_email;
	}

	public void setUsu_email(String usu_email) {
		this.usu_email = usu_email;
	}

	public String getUsu_telefone() {
		return usu_telefone;
	}

	public void setUsu_telefone(String usu_telefone) {
		this.usu_telefone = usu_telefone;
	}

	public String getUsu_cargo() {
		return usu_cargo;
	}

	public void setUsu_cargo(String usu_cargo) {
		this.usu_cargo = usu_cargo;
	}

	public String getUsu_area_empresa() {
		return usu_area_empresa;
	}

	public void setUsu_area_empresa(String usu_area_empresa) {
		this.usu_area_empresa = usu_area_empresa;
	}

	public String getUsu_assinatura() {
		return usu_assinatura;
	}

	public void setUsu_assinatura(String usu_assinatura) {
		this.usu_assinatura = usu_assinatura;
	}

	public Profiles getPerfil() {
		return perfil;
	}

	public void setPerfil(Profiles perfil) {
		this.perfil = perfil;
	}
}
