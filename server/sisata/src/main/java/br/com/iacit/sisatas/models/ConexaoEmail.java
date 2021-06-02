package br.com.iacit.sisatas.models;

//import java.util.Map;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ConexaoEmail {
	
	public String userEnviar = ""; //usuario (email sem dominio)
	public String senhaEnviar = ""; //senha do email
	public String emailEnviar = ""; //email que vai enviar a mensagem
	public String nomeEnviar = ""; //nome de quem esta enviando
	public String emailReceber = ""; //email de quem vai receber a mensagem
	public String nomeReceber = ""; //nome de quem vai receber a mensagem
	public String ataId = "";
	public String linkDown = "";
	public String ataProjeto = "";
	public String revisao = "";
	public String assunto = "";
	public String comentario = "";
	public String linkSenha = "";
	
	//public Map<String, Object> props;
	
	//public String mailTo;
	//public String Subject;
	//public String from;

}