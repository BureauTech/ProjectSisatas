package br.com.iacit.sisatas.models;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;
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
import org.springframework.format.annotation.DateTimeFormat;

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
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate ataDataInicio;
	@Column(nullable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate ataDataFim;
	@Column(nullable = false)
	@DateTimeFormat(pattern = "HH:mm:ss")
	private LocalTime ataHoraInicio;
	@Column(nullable = false)
	@DateTimeFormat(pattern = "HH:mm:ss")
	private LocalTime ataHoraFim;
	@Column(nullable = false)
	@CreationTimestamp
	private LocalDate ataDataCriacao;
	@Column(nullable = false, length = 30)
	private String ataLocal;
	@Column(nullable = false, length = 30)
	private String ataProjeto;
	@Column(nullable = false, columnDefinition="TEXT")
	private String ataPauta;
	@Column(columnDefinition="TEXT")
	private String ataObservacao;
	@Column
	private Long ataQtdAprovacao;
	@Column
	private String ataQuemAprovou;
	@Column
	private String ataEstado;
	
	
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
