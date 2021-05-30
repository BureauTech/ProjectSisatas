package br.com.iacit.sisatas.exports;

import org.apache.commons.mail.EmailAttachment;
import org.apache.commons.mail.EmailException;
//import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.HtmlEmail;
//import org.apache.commons.mail.MultiPartEmail;
//import org.apache.commons.mail.SimpleEmail;

import java.net.MalformedURLException;
import java.net.URL; 

import br.com.iacit.sisatas.models.ConexaoEmail;


@SuppressWarnings("deprecation")
public class EnvioEmail {
	
	public static void NovaAta (ConexaoEmail cone) throws MalformedURLException {
		try {
			EmailAttachment attachment = new EmailAttachment();
			// Cria o e-mail
			HtmlEmail email = new HtmlEmail();
		  	email.setDebug(true);
		    email.setHostName("smtp.gmail.com");  //host do servidor email
		    email.setSmtpPort(587);
		    email.setSSL(true);
			email.setCharset("utf-8");
		    email.setAuthentication(cone.userEnviar, cone.senhaEnviar); //email que vai enviar o email
		    email.addTo(cone.emailReceber, cone.nomeReceber); //email que vai receber, nome
		    email.setFrom(cone.emailEnviar, cone.nomeEnviar); //email que fez a autenticação
		    email.setSubject("Ata do Sisatas"); //assunto
		    //attachment.setPath(cone.arq);
		    
		    URL url = new URL(cone.linkDown);
		    attachment.setURL(url);
		    attachment.setName("ata-"+cone.ataId+".xlsx");
		    email.attach(attachment);
		    

			// configura a mensagem para o formato HTML
		    email.setHtmlMsg("<html>\r\n"
		    		+ "<head>\r\n"
		    		+ "  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">\r\n"
		    		+ "  <link href=\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\" rel=\"stylesheet\">\r\n"
		    		+ "</head>\r\n"
		    		+ "\r\n"
		    		+ "<body>\r\n"
		    		+ "  <table cellpadding=\"\" cellspacing=\"10\" width=\"100%\"\r\n"
		    		+ "    style=\" text-align: center; font-family: Montserrat; color: #fff; border: none; font-size: 20px;\">\r\n"
		    		+ "    <tr>\r\n"
		    		+ "      <td>\r\n"
		    		+ "        <img src=\"https://raw.githubusercontent.com/BureauTech/ProjectSisatas/master/assets/png/logoSimplificado_SFundo.png\" style=\"width: 10%;\" />\r\n"
		    		+ "      </td>\r\n"
		    		+ "    </tr>\r\n"
		    		+ "    <tr>\r\n"
		    		+ "      <td style=\"padding: 15px 0 10px 0; color: #4682b4;\">\r\n"
		    		+ "        Olá, <strong>"+cone.nomeReceber+"</strong>!<br>Ata "+cone.ataId+" do projeto <strong>\""+cone.ataProjeto+"\"</strong> criada com sucesso.\r\n"
		    		+ "      </td>\r\n"
		    		+ "    </tr>\r\n"
		    		+ "    <tr>\r\n"
		    		+ "      <td style=\"padding: 10px 0 30px 0;color: #4682b4;\">\r\n"
		    		+ "        <a href=\"http://localhost:3000\"\r\n"
		    		+ "          style=\"text-decoration:none;background-color:#F49A1D;font-size:25px;color:#fff;padding:15px; border-radius: 15px;\">\r\n"
		    		+ "          Clique aqui para acessar o SISATAS</a>\r\n"
		    		+ "      </td>\r\n"
		    		+ "    </tr>\r\n"
		    		+ "    <tr>\r\n"
		    		+ "      <td style=\"padding: 5px 0 30px 0; color: #4682b4;text-decoration:underline;font-size: 15px;\">\r\n"
		    		+ "        <p><a href=\"https://github.com/BureauTech\" style=\"text-decoration:underline; color: #4682b4\">Desenvolvido por\r\n"
		    		+ "            BureauTech</a>\r\n"
		    		+ "        </p>\r\n"
		    		+ "      </td>\r\n"
		    		+ "    </tr>\r\n"
		    		+ "  </table>\r\n"
		    		+ "</body>\r\n"
		    		+ "</html>");

			// configure uma mensagem alternativa caso o servidor não suporte HTML
			email.setTextMsg("Seu servidor de e-mail não suporta mensagem HTML");

			// envia o e-mail
			email.send();
		} catch (EmailException e) {
			System.out.println(e.getMessage());
		}
	}	
	
	
	
	public static void NovaRevisao (ConexaoEmail cone) {
		try {
			// Cria o e-mail
			HtmlEmail email = new HtmlEmail();
		  	email.setDebug(true);
		    email.setHostName("smtp.gmail.com");  //host do servidor email
		    email.setSmtpPort(587);
		    email.setSSL(true);//
		    email.setAuthentication(cone.userEnviar, cone.senhaEnviar); //email que vai enviar o email
		    email.addTo(cone.emailReceber, cone.nomeReceber); //email que vai receber, nome
		    email.setFrom(cone.emailEnviar, cone.nomeEnviar); //email que fez a autenticação
		    email.setSubject("Nova Revisao"); //assunto
		    
			// configura a mensagem para o formato HTML
		    email.setHtmlMsg("<html></html>");

			// configure uma mensagem alternativa caso o servidor não suporte HTML
			email.setTextMsg("Seu servidor de e-mail não suporta mensagem HTML");

			// envia o e-mail
			email.send();
		} catch (EmailException e) {
			System.out.println(e.getMessage());
		}
	}	
	
	
	public static void NovoAssunto (ConexaoEmail cone) {
		try {
			// Cria o e-mail
			HtmlEmail email = new HtmlEmail();
		  	email.setDebug(true);
		    email.setHostName("smtp.gmail.com");  //host do servidor email
		    email.setSmtpPort(587);
		    email.setSSL(true);//
		    email.setAuthentication(cone.userEnviar, cone.senhaEnviar); //email que vai enviar o email
		    email.addTo(cone.emailReceber, cone.nomeReceber); //email que vai receber, nome
		    email.setFrom(cone.emailEnviar, cone.nomeEnviar); //email que fez a autenticação
		    email.setSubject("Nova Revisao"); //assunto
		    
			// configura a mensagem para o formato HTML
		    email.setHtmlMsg("<html></html>");

			// configure uma mensagem alternativa caso o servidor não suporte HTML
			email.setTextMsg("Seu servidor de e-mail não suporta mensagem HTML");

			// envia o e-mail
			email.send();
		} catch (EmailException e) {
			System.out.println(e.getMessage());
		}
	}
	
	
	public static void NovoComentario (ConexaoEmail cone) {
		try {
			// Cria o e-mail
			HtmlEmail email = new HtmlEmail();
		  	email.setDebug(true);
		    email.setHostName("smtp.gmail.com");  //host do servidor email
		    email.setSmtpPort(587);
		    email.setSSL(true);//
		    email.setAuthentication(cone.userEnviar, cone.senhaEnviar); //email que vai enviar o email
		    email.addTo(cone.emailReceber, cone.nomeReceber); //email que vai receber, nome
		    email.setFrom(cone.emailEnviar, cone.nomeEnviar); //email que fez a autenticação
		    email.setSubject("Nova Revisao"); //assunto
		    
			// configura a mensagem para o formato HTML
		    email.setHtmlMsg("<html></html>");

			// configure uma mensagem alternativa caso o servidor não suporte HTML
			email.setTextMsg("Seu servidor de e-mail não suporta mensagem HTML");

			// envia o e-mail
			email.send();
		} catch (EmailException e) {
			System.out.println(e.getMessage());
		}
	}
	
	
	public static void ParticipanteAta (ConexaoEmail cone) {
		try {
			// Cria o e-mail
			HtmlEmail email = new HtmlEmail();
		  	email.setDebug(true);
		    email.setHostName("smtp.gmail.com");  //host do servidor email
		    email.setSmtpPort(587);
		    email.setSSL(true);//
		    email.setAuthentication(cone.userEnviar, cone.senhaEnviar); //email que vai enviar o email
		    email.addTo(cone.emailReceber, cone.nomeReceber); //email que vai receber, nome
		    email.setFrom(cone.emailEnviar, cone.nomeEnviar); //email que fez a autenticação
		    email.setSubject("Nova Revisao"); //assunto
		    
			// configura a mensagem para o formato HTML
		    email.setHtmlMsg("<html></html>");

			// configure uma mensagem alternativa caso o servidor não suporte HTML
			email.setTextMsg("Seu servidor de e-mail não suporta mensagem HTML");

			// envia o e-mail
			email.send();
		} catch (EmailException e) {
			System.out.println(e.getMessage());
		}
	}
	
	
	public static void SenhaAlterada (ConexaoEmail cone) {
		try {
			// Cria o e-mail
			HtmlEmail email = new HtmlEmail();
		  	email.setDebug(true);
		    email.setHostName("smtp.gmail.com");  //host do servidor email
		    email.setSmtpPort(587);
		    email.setSSL(true);//
		    email.setAuthentication(cone.userEnviar, cone.senhaEnviar); //email que vai enviar o email
		    email.addTo(cone.emailReceber, cone.nomeReceber); //email que vai receber, nome
		    email.setFrom(cone.emailEnviar, cone.nomeEnviar); //email que fez a autenticação
		    email.setSubject("Nova Revisao"); //assunto
		    
			// configura a mensagem para o formato HTML
		    email.setHtmlMsg("<html></html>");

			// configure uma mensagem alternativa caso o servidor não suporte HTML
			email.setTextMsg("Seu servidor de e-mail não suporta mensagem HTML");

			// envia o e-mail
			email.send();
		} catch (EmailException e) {
			System.out.println(e.getMessage());
		}
	}
	
	
	public static void UsuarioCadastrado (ConexaoEmail cone) {
		try {
			// Cria o e-mail
			HtmlEmail email = new HtmlEmail();
		  	email.setDebug(true);
		    email.setHostName("smtp.gmail.com");  //host do servidor email
		    email.setSmtpPort(587);
		    email.setSSL(true);//
		    email.setAuthentication(cone.userEnviar, cone.senhaEnviar); //email que vai enviar o email
		    email.addTo(cone.emailReceber, cone.nomeReceber); //email que vai receber, nome
		    email.setFrom(cone.emailEnviar, cone.nomeEnviar); //email que fez a autenticação
		    email.setSubject("Nova Revisao"); //assunto
		    
			// configura a mensagem para o formato HTML
		    email.setHtmlMsg("<html></html>");

			// configure uma mensagem alternativa caso o servidor não suporte HTML
			email.setTextMsg("Seu servidor de e-mail não suporta mensagem HTML");

			// envia o e-mail
			email.send();
		} catch (EmailException e) {
			System.out.println(e.getMessage());
		}
	}
	
	
	
	

}