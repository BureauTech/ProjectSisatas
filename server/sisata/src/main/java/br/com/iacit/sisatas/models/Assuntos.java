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
	private Long assId;
	@Column(nullable = false, length = 30)
	private String assAssunto;
	@Column(nullable = false)
	private Date assPrazo;
	
	@ManyToOne(optional = false)
	@JoinColumn(name = "fkAtaId", referencedColumnName = "ataId") // OK
	private Atas contemAssuntos;
	
	@ManyToMany
	@JoinTable(name = "Resposavel",
			joinColumns = @JoinColumn(name = "fkPkAssId", referencedColumnName = "assId"), 
																								
			inverseJoinColumns = @JoinColumn(name = "fkPkUsuId", referencedColumnName = "usuId") 
																										
	)
	private List<Usuarios> responsavelAssuntos; // OK

}
