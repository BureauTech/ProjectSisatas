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

import lombok.Data;

@Data
@Entity
public class Comentarios implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Long id;
	@Column(nullable = false, length = 300)
	public String com_descricao;
	@Column(nullable = false)
	public DateFormat com_data;

	@ManyToOne(optional = false)
	@JoinColumn(name = "fk_rev_id", referencedColumnName = "id") // OK
	public Revisoes contemRevisao;

}
