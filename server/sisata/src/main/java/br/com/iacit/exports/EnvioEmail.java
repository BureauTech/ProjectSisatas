package br.com.iacit.exports;

import org.apache.commons.mail.EmailAttachment;
import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.MultiPartEmail;
import org.apache.commons.mail.SimpleEmail;

import br.com.iacit.models.ConexaoEmail;


@SuppressWarnings("deprecation")
public class EnvioEmail {
	//ConexaoEmail cone = new ConexaoEmail();
	public static void EnviaSimples(ConexaoEmail cone) {
		try {
			SimpleEmail emailSimples = new SimpleEmail();
			emailSimples.setDebug(true);
			emailSimples.setHostName("smtp.gmail.com");  //host do servidor email
			emailSimples.setSSL(true);//
			emailSimples.setAuthentication(cone.userEnviar, cone.senhaEnviar); //email que vai enviar o email
			emailSimples.addTo(cone.emailReceber, cone.nomeReceber); //email que vai receber, nome
			emailSimples.setFrom(cone.emailEnviar, cone.nomeEnviar); //email que fez a autenticação
			emailSimples.setSubject("Lembrete"); //assunto
			emailSimples.setMsg("Olá " + cone.nomeReceber 
		    		+", parece que você não fez o que te foi pedido"); //conteudo do e-mail
			emailSimples.send();
		}catch (EmailException e) {
			System.out.println(e.getMessage());
		}
	}
	
	public static void EnviaAnexo (ConexaoEmail cone) {
		//Enviar email com anexo
		 try {
		// cria o anexo.
		  EmailAttachment attachment = new EmailAttachment();
		  attachment.setPath(cone.arq); //caminho do anexo
		  //attachment.setURL(new URL(url));//endereço remoto anexo
		  attachment.setDisposition(EmailAttachment.ATTACHMENT);
		  attachment.setDescription("Sisatas");
		  attachment.setName(cone.nomeArq); //nome do arquivo
		  
		  //Cria a mensagem de e-mail.
		  MultiPartEmail email = new MultiPartEmail();
		  	email.setDebug(true);
		    email.setHostName("smtp.gmail.com");  //host do servidor email
		    email.setSSL(true);//
		    email.setAuthentication(cone.userEnviar, cone.senhaEnviar); //email que vai enviar o email
		    email.addTo(cone.emailReceber, cone.nomeReceber); //email que vai receber, nome
		    email.setFrom(cone.emailEnviar, cone.nomeEnviar); //email que fez a autenticação
		    email.setSubject("Ata do Sisatas"); //assunto
		    email.setMsg("Olá " + cone.nomeReceber 
		    		+". Aqui está sua ata gerada no Sisatas anexada ao email"); //conteudo do e-mail
		    email.attach(attachment); // adiciona o anexo à mensagem

		  email.send();// envia o e-mail  
		 } catch (EmailException e) {
			 System.out.println(e.getMessage());
		 }
	}
}