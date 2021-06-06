package br.com.iacit.sisatas.models;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

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
@Table(name = "AprovacaoAta")
@IdClass(AprovacaoAtaId.class)
public class AprovacaoAtaModel implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	// @Id
	// @GeneratedValue(strategy = GenerationType.IDENTITY)
	// private Long aprId;
	@Column(nullable = false, length = 20)
	private String aprDescricao = "Pendente";
	
	@Id
  @ManyToOne(optional = false)
	@JoinColumn(name = "fkUsuId", referencedColumnName = "usuId", foreignKey = @ForeignKey(name = "fk_UsuId"))
	@JsonBackReference(value = "aprovaAta")
	private UsuariosModel aprovaAta;
	
	@Id
  @ManyToOne(optional = false)
	@JoinColumn(name = "fkAtaId", referencedColumnName = "ataId", foreignKey = @ForeignKey(name = "fk_AtaId"))
	@JsonBackReference(value = "ataReferencia")
	private AtasModel ataReferencia;

}