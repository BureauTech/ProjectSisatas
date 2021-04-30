package br.com.iacit.sisatas.models;

import java.io.Serializable;
import java.text.DateFormat;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Atas")
public class AtasModel implements Serializable{

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
	@JoinColumn(name = "fkUsuId", referencedColumnName = "usuId", foreignKey = @ForeignKey(name = "fkUsuId")) // OK
	private UsuariosModel geraAtas;
	
	@ManyToMany
	@JoinTable(name = "Participa",
			joinColumns = @JoinColumn(name = "fkPkAtaId", referencedColumnName = "ataId", foreignKey = @ForeignKey(name = "fkPkAtaId")),
			inverseJoinColumns = @JoinColumn(name = "fkPkUsuId", referencedColumnName = "usuId", foreignKey = @ForeignKey(name = "fkPkUsuId")) 
	)
	private List<UsuariosModel> participaAtas = new ArrayList<>();	// OK

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "contemAssuntos", fetch = FetchType.EAGER)
	@JsonManagedReference
	private List<AssuntosModel> assuntos = new ArrayList<>();
}
