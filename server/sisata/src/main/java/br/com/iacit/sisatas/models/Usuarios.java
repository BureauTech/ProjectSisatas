package br.com.iacit.sisatas.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Usuarios")
public class Usuarios implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long usuId;
	@Column(nullable = false, length = 50)
	private String usuNome;
	@Column(nullable = false, length = 50)
	private String usuEmail;
	private String usuSenha;
	@Column(nullable = false, length = 11)
	private String usuTelefone;
	@Column(nullable = false, length = 50)
	private String usuCargo;
	@Column(nullable = false, length = 50)
	private String usuAreaEmpresa;
	@Lob
	@Column(nullable = false)
	private byte[] usuAssinatura;// Definir qual como será salva a assinatura;
	
	@ManyToOne(optional = true)
	@JoinColumn(name = "fkPerId", referencedColumnName = "perId") // OK
	private Perfis pertenceUsuarios;

	public Usuarios(String usuNome, String usuEmail, String usuSenha, String usuTelefone, String usuCargo,
			String usuAreaEmpresa, byte[] usuAssinatura, Perfis pertenceUsuarios) {
		super();
		this.usuNome = usuNome;
		this.usuEmail = usuEmail;
		this.usuSenha = usuSenha;
		this.usuTelefone = usuTelefone;
		this.usuCargo = usuCargo;
		this.usuAreaEmpresa = usuAreaEmpresa;
		this.usuAssinatura = usuAssinatura;
		this.pertenceUsuarios = pertenceUsuarios;
	}	
}
