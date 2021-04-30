package br.com.iacit.sisatas.models;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Estados")
public class EstadosModel implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long estId;
	@Column(nullable = false, length = 20)
	private String estNome;
	@Column(nullable = false, length = 50)
	private String estDescricao;
	
	@ManyToMany
	@JoinTable(name = "Possui",
			joinColumns = @JoinColumn(name = "fkPkEstId", referencedColumnName = "estId", foreignKey = @ForeignKey(name = "fkPkEstId")),
			inverseJoinColumns = @JoinColumn(name = "fkPkAtaId", referencedColumnName = "ataId", foreignKey = @ForeignKey(name = "fkPkAtaId"))
	)
	private List<AtasModel> possuiEstados;	// OK

}
