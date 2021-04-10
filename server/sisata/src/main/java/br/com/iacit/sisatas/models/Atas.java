package br.com.iacit.sisatas.models;

import java.io.Serializable;
import java.text.DateFormat;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "Atas")
public class Atas implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	private String id;
	@Column(nullable = false)
	private DateFormat ata_data_inicio;
	@Column(nullable = false)
	private DateFormat ata_data_fim;
	@Column(nullable = false)
	private DateFormat ata_hora_inicio;
	@Column(nullable = false)
	private DateFormat ata_hora_fim;
	@Column(nullable = false, length = 30)
	private String ata_local;
	@Column(nullable = false, length = 30)
	private String ata_projeto;
	@Column(nullable = false, length = 600)
	private String ata_pauta;
	
	@ManyToOne(optional = true)
	@JoinColumn(name = "fk_usu_id", referencedColumnName = "id") // OK
	private Usuarios geraAtas;
	
	@ManyToMany
	@JoinTable(name = "Participa",
			joinColumns = @JoinColumn(name = "fk_pk_ata_id", referencedColumnName = "id"),
			inverseJoinColumns = @JoinColumn(name = "fk_pk_usu_id", referencedColumnName = "id") 
	)
	private List<Usuarios> participaAtas;	// OK

}
