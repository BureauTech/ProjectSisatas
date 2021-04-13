package br.com.iacit.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ConexaoEmail {
	@Id
	public String userEnviar = ""; //usuario (email sem dominio)
	public String senhaEnviar = ""; //senha do email
	public String emailEnviar = ""; //email que vai enviar a mensagem
	public String nomeEnviar = "Sisatas"; //nome de quem esta enviando
	public String emailReceber = ""; //email de quem vai receber a mensagem
	public String nomeReceber = ""; //nome de quem vai receber a mensagem
	public String nomeArq = ""; //nome do arquivo (se for enviar email com anexo)
	public String arq = ""; //path do arquivo do anexo (se for enviar email com anexo)
	public String url = ""; //url do arquivo do anexo (se for enviar email com anexo)
	
}