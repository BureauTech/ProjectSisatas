package br.com.iacit.sisatas.models;

import java.io.Serializable;
import java.text.DateFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "Logs")
public class Logs implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long logId;
	@Column(nullable = false, length = 50)
	private String logAutor;
	@Column(nullable = false, length = 100)
	private String logDescricao;
	@Column(nullable = false)
	private DateFormat logDataHora;
}
