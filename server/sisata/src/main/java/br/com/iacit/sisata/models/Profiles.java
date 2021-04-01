package br.com.iacit.sisata.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "perfis")
public class Profiles {
	@Id
	private int per_id;
	@Column
	private String per_nome;

	public int getPer_id() {
		return per_id;
	}

	public void setPer_id(int per_id) {
		this.per_id = per_id;
	}

	public String getPer_nome() {
		return per_nome;
	}

	public void setPer_nome(String per_nome) {
		this.per_nome = per_nome;
	}
}
