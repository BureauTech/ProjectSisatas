package br.com.iacit.sisatas.DAO.models;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
public class Estados implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int est_id;
	private String est_nome;
	private String est_descricao;
	
	@ManyToMany
	@JoinTable(name = "Possui",
			joinColumns = @JoinColumn(name = "fk_pk_est_id", referencedColumnName = "est_id"),
			inverseJoinColumns = @JoinColumn(name = "fk_pk_ata_id", referencedColumnName = "ata_id")
	)
	private List<Atas> possuiAtas;	// OK

}
