package br.com.iacit.sisatas.models;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@JsonIgnoreProperties
@Table(name = "Atas")
public class AtasModel implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	private String ataId;
	@Column(nullable = false)
	private Date ataDataInicio;
	@Column(nullable = false)
	private Date ataDataFim;
	@Column(nullable = false)
	private Date ataHoraInicio;
	@Column(nullable = false)
	private Date ataHoraFim;
	@Column(nullable = false)
	@CreationTimestamp
	private Date ataDataCriacao;
	@Column(nullable = false, length = 30)
	private String ataLocal;
	@Column(nullable = false, length = 30)
	private String ataProjeto;
	@Column(nullable = false, length = 600)
	private String ataPauta;
	
	@ManyToOne(optional = false)
	@JoinColumn(name = "fkUsuId", referencedColumnName = "usuId", foreignKey = @ForeignKey(name = "fk_UsuId"))
	@JsonBackReference
	private UsuariosModel geraAtas;
	
	@ManyToMany
	@JoinTable(name = "Participa",
			joinColumns = @JoinColumn(name = "fkPkAtaId", referencedColumnName = "ataId", foreignKey = @ForeignKey(name = "fk_PkAtaId")),
			inverseJoinColumns = @JoinColumn(name = "fkPkUsuId", referencedColumnName = "usuId", foreignKey = @ForeignKey(name = "fk_PkUsuId")) 
	)
	private List<UsuariosModel> participaAtas;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "contemAssuntos")
	@JsonManagedReference
	private List<AssuntosModel> assuntos;
}
