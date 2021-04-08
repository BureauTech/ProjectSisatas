package br.com.iacit.sisatas.DAO.models;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "perfis")
public class Perfis implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	private int per_id;
	private String per_nome;
	
	@OneToMany
	@JoinColumn(name = "fk_per_id", referencedColumnName = "per_id") // OK
	private List<Usuarios> pertenceUsuarios;	

}
