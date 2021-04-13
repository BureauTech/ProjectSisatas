package br.com.iacit.sisatas.models;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "Estados")
public class Estados implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false, length = 20)
	private String est_nome;
	@Column(nullable = false, length = 50)
	private String est_descricao;
	
	@ManyToMany
	@JoinTable(name = "Possui",
			joinColumns = @JoinColumn(name = "fk_pk_est_id", referencedColumnName = "id"),
			inverseJoinColumns = @JoinColumn(name = "fk_pk_ata_id", referencedColumnName = "id")
	)
	private List<Atas> possuiEstados;	// OK

}
