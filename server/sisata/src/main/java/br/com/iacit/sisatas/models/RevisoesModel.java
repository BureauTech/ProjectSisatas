package br.com.iacit.sisatas.models;

import java.io.Serializable;
import java.text.DateFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Revisoes")
public class RevisoesModel implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long revId;
	@Column(nullable = false, length = 30)
	private String revAssunto;
	@Column(nullable = false)
	private DateFormat revPrazo;
	@Column(nullable = false)
	private DateFormat revData;

	@ManyToOne(optional = false)
	@JoinColumn(name = "fkUsuId", referencedColumnName = "usuId") // OK
	private UsuariosModel resposavelRevisoes;

	@ManyToOne(optional = false)
	@JoinColumn(name = "fkAtaId", referencedColumnName = "ataId") // OK
	private AtasModel contemRevisoes;
}
