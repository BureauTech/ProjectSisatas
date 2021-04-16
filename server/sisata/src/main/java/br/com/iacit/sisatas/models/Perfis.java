package br.com.iacit.sisatas.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "Perfis")
public class Perfis implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	private Long perId;
	@Column(nullable = false, length = 15)
	private String perNome;
	
	
	public Perfis(Long perId) {
		super();
		this.perId = perId;
	}
}
