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
	private String ataId;
	@Column(nullable = false)
	private DateFormat ataDataInicio;
	@Column(nullable = false)
	private DateFormat ataDataFim;
	@Column(nullable = false)
	private DateFormat ataHoraInicio;
	@Column(nullable = false)
	private DateFormat ataHoraFim;
	@Column(nullable = false, length = 30)
	private String ataLocal;
	@Column(nullable = false, length = 30)
	private String ataProjeto;
	@Column(nullable = false, length = 600)
	private String ataPauta;
	
	@ManyToOne(optional = true)
	@JoinColumn(name = "fkUsuId", referencedColumnName = "usuId") // OK
	private Usuarios geraAtas;
	
	@ManyToMany
	@JoinTable(name = "Participa",
			joinColumns = @JoinColumn(name = "fkPkAtaId", referencedColumnName = "ataId"),
			inverseJoinColumns = @JoinColumn(name = "fkPkUsuId", referencedColumnName = "usuId") 
	)
	private List<Usuarios> participaAtas;	// OK

}
