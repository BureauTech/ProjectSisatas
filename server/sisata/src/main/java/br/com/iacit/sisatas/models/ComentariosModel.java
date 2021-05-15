package br.com.iacit.sisatas.models;

import java.io.Serializable;
import java.time.LocalDate;

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
@Table(name = "Comentarios")
public class ComentariosModel implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Long comId;
	@Column(nullable = false, columnDefinition="TEXT")
	public String comDescricao;
	@Column(nullable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	public LocalDate comData;

	@ManyToOne(optional = false)
	@JoinColumn(name = "fkRevId", referencedColumnName = "revId", foreignKey = @ForeignKey(name = "fk_RevId"))
	@JsonBackReference
	public RevisoesModel contemRevisao;

}
