package br.com.iacit.sisatas.DAO.models;

import java.io.Serializable;
import java.text.DateFormat;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Revisoes")
public class Revisoes implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int rev_id;
	private String rev_assunto;
	private DateFormat rev_prazo;
	private DateFormat rev_data;
	
	@OneToMany
	@JoinColumn(name = "fk_rev_id", referencedColumnName = "rev_id") // OK
	private List<Comentarios> contemComentarios;	
}
