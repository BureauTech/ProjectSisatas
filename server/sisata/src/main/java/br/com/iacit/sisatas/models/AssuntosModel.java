package br.com.iacit.sisatas.models;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
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
	private String assPrazo;
	
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "fkAtaId", referencedColumnName = "ataId", foreignKey = @ForeignKey(name = "fkAtaId"))
	private AtasModel contemAssuntos;
	
	
	
	@ManyToMany
	@JoinTable(name = "Responsavel",
			joinColumns = @JoinColumn(name = "fkPkAssId", referencedColumnName = "assId", foreignKey = @ForeignKey(name = "fkPkAssId")), 
																								
			inverseJoinColumns = @JoinColumn(name = "fkPkUsuId", referencedColumnName = "usuId", foreignKey = @ForeignKey(name = "fkPkUsuId")) 
																										
	)
	@JsonManagedReference
	private List<UsuariosModel> responsavelAssuntos = new ArrayList<>();
	
	
}
