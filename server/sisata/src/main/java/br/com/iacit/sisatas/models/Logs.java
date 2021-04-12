package br.com.iacit.sisatas.models;

import java.io.Serializable;
import java.text.DateFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
@Entity
@Table(name = "Usuarios")
public class Logs implements Serializable{
		
		/**
		 * 
		 */
		private static final long serialVersionUID = 1L;
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private long id;
		@Column(nullable = false, length = 50)
		private String log_autor;
		@Column(nullable = false, length = 100)
		private String log_descricao;
		@Column(nullable = false)
		private DateFormat log_data_hora;
}
