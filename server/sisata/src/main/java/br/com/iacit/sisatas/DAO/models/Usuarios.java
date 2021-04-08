package br.com.iacit.sisatas.DAO.models;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
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
	private String usu_nome;
	private String usu_email;
	private String usu_senha;
	private String usu_telefone;
	private String usu_cargo;
	private String usu_area_empresa;
	private String usu_assinatura;// Definir qual como será salva a assinatura;
	
	@OneToMany
	@JoinColumn(name = "fk_usu_id", referencedColumnName = "usu_id") // OK
	private List<Atas> geraAtas;
	
	@OneToMany
	@JoinColumn(name = "fk_usu_id", referencedColumnName = "usu_id") // OK
	private List<Revisoes> resposavelRevisoes;	
}
