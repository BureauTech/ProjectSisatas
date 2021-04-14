package br.com.iacit.sisatas.models;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "Assuntos")
public class Assuntos implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false, length = 30)
	private String ass_assunto;
	@Column(nullable = false)
	private Date ass_prazo;
	
	@ManyToOne(optional = false)
	@JoinColumn(name = "fk_ata_id", referencedColumnName = "id") // OK
	private Atas contemAssuntos;
	
	@ManyToMany
	@JoinTable(name = "Resposavel",
			joinColumns = @JoinColumn(name = "fk_pk_ass_id", referencedColumnName = "id"), 
																								
			inverseJoinColumns = @JoinColumn(name = "fk_pk_usu_id", referencedColumnName = "id") 
																										
	)
	private List<Usuarios> responsavelAssuntos; // OK

}
