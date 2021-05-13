package br.com.iacit.sisatas.models;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
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
@Table(name = "Revisoes")
public class RevisoesModel implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long revId;
	@Column(nullable = false)
	private String revAssunto;
	@Column(nullable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date revPrazo;
	@Column(nullable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date revData;

	@ManyToOne(optional = false)
	@JoinColumn(name = "fkUsuId", referencedColumnName = "usuId", foreignKey = @ForeignKey(name = "fk_UsuId"))
	@JsonBackReference
	private UsuariosModel responsavelRevisoes;

	@ManyToOne(optional = false)
	@JoinColumn(name = "fkAtaId", referencedColumnName = "ataId", foreignKey = @ForeignKey(name = "fk_AtaId"))
	//@JsonBackReference
	private AtasModel contemRevisoes;

}
