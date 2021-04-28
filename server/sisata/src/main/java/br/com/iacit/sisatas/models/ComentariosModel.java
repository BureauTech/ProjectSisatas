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
@Table(name = "Comentarios")
public class ComentariosModel implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Long comId;
	@Column(nullable = false, length = 300)
	public String comDescricao;
	@Column(nullable = false)
	public DateFormat comData;

	@ManyToOne(optional = false)
	@JoinColumn(name = "fkRevId", referencedColumnName = "revId") // OK
	public RevisoesModel contemRevisao;

}
