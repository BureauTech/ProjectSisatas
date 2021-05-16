package br.com.iacit.sisatas.models;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@JsonIgnoreProperties
@Table(name = "Assuntos")
public class AssuntosModel implements Serializable {

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
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate assPrazo;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "fkAtaId", referencedColumnName = "ataId", foreignKey = @ForeignKey(name = "fk_AtaId"))
	@JsonBackReference
	private AtasModel contemAssuntos;
	
	
	
	@ManyToMany
	@JoinTable(name = "Responsavel",
			joinColumns = @JoinColumn(name = "fkPkAssId", referencedColumnName = "assId", foreignKey = @ForeignKey(name = "fk_PkAssId")), 
																								
			inverseJoinColumns = @JoinColumn(name = "fkPkUsuId", referencedColumnName = "usuId", foreignKey = @ForeignKey(name = "fk_PkUsuId")) 
																										
	)
	private List<UsuariosModel> responsavelAssuntos;
	
}
