package br.com.iacit.sisatas.DAO.models;

import java.io.Serializable;
import java.text.DateFormat;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Atas")
public class Atas implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	private String ata_id;
	private DateFormat ata_data_inicio;
	private DateFormat ata_data_fim;
	private DateFormat ata_hora_inicio;
	private DateFormat ata_hora_fim;
	private String ata_local;
	private String ata_projeto;
	private String ata_pauta;
	
	@OneToMany
	@JoinColumn(name = "fk_ata_id", referencedColumnName = "ata_id") // OK
	private List<Assuntos> contemAssuntos;
	
	@OneToMany
	@JoinColumn(name = "fk_ata_id", referencedColumnName = "ata_id") // OK
	private List<Revisoes> contemRevisoes;	
	
	@ManyToMany
	@JoinTable(name = "Participa",
			joinColumns = @JoinColumn(name = "fk_pk_ata_id", referencedColumnName = "ata_id"),
			inverseJoinColumns = @JoinColumn(name = "fk_pk_usu_id", referencedColumnName = "usu_id") 
	)
	private List<Usuarios> participaUsuarios;	// OK

}
