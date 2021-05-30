package br.com.iacit.sisatas.exports;

import org.apache.commons.mail.EmailAttachment;
//import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.HtmlEmail;
//import org.apache.commons.mail.MultiPartEmail;
//import org.apache.commons.mail.SimpleEmail;

import java.net.URL; 

import br.com.iacit.sisatas.models.ConexaoEmail;


@SuppressWarnings("deprecation")
public class EnvioEmail {
//	//ConexaoEmail cone = new ConexaoEmail();
//	public static void EnviaSimples(ConexaoEmail cone) {
//		try {
//			SimpleEmail emailSimples = new SimpleEmail();
//			emailSimples.setDebug(true);
//			emailSimples.setHostName("smtp.gmail.com");  //host do servidor email
//			emailSimples.setSSL(true);//
//			emailSimples.setAuthentication(cone.userEnviar, cone.senhaEnviar); //email que vai enviar o email
//			emailSimples.addTo(cone.emailReceber, cone.nomeReceber); //email que vai receber, nome
//			emailSimples.setFrom(cone.emailEnviar, cone.nomeEnviar); //email que fez a autenticação
//			emailSimples.setSubject("Lembrete"); //assunto
//			emailSimples.setMsg("Olá " + cone.nomeReceber 
//		    		+", parece que você não fez o que te foi pedido"); //conteudo do e-mail
//			emailSimples.send();
//		}catch (EmailException e) {
//			System.out.println(e.getMessage());
//		}
//	}
//	
//	public static void EnviaAnexo (ConexaoEmail cone) {
//		//Enviar email com anexo
//		try {
//			// cria o anexo.
//			EmailAttachment attachment = new EmailAttachment();
//			attachment.setPath(cone.arq); //caminho do anexo
//			//attachment.setURL(new URL(url));//endereço remoto anexo
//			attachment.setDisposition(EmailAttachment.ATTACHMENT);
//			attachment.setDescription("Sisatas");
//			attachment.setName(cone.nomeArq); //nome do arquivo
//
//			//Cria a mensagem de e-mail.
//			MultiPartEmail email = new MultiPartEmail();
//			email.setDebug(true);
//			email.setHostName("smtp.gmail.com");  //host do servidor email
//			email.setSSL(true);//
//			email.setAuthentication(cone.userEnviar, cone.senhaEnviar); //email que vai enviar o email
//			email.addTo(cone.emailReceber, cone.nomeReceber); //email que vai receber, nome
//			email.setFrom(cone.emailEnviar, cone.nomeEnviar); //email que fez a autenticação
//			email.setSubject("Ata do Sisatas"); //assunto
//			email.setMsg("Olá " + cone.nomeReceber
//				+". Aqui está sua ata gerada no Sisatas anexada ao email"); //conteudo do e-mail
//			email.attach(attachment); // adiciona o anexo à mensagem
//
//		  	email.send();// envia o e-mail
//		 } catch (EmailException e) {
//			 System.out.println(e.getMessage());
//		 }
//	}
	
	public static void TestHtml (ConexaoEmail cone) {
		try {
			EmailAttachment attachment = new EmailAttachment();
			// Cria o e-mail
			HtmlEmail email = new HtmlEmail();
		  	email.setDebug(true);
		    email.setHostName("smtp.gmail.com");  //host do servidor email
		    email.setSmtpPort(587);
		    email.setSSL(true);//
		    email.setAuthentication(cone.userEnviar, cone.senhaEnviar); //email que vai enviar o email
		    email.addTo(cone.emailReceber, cone.nomeReceber); //email que vai receber, nome
		    email.setFrom(cone.emailEnviar, cone.nomeEnviar); //email que fez a autenticação
		    email.setSubject("Ata do Sisatas"); //assunto
		    //attachment.setPath(cone.arq);
		    
		    URL url = new URL(cone.linkDown);
		    attachment.setURL(url);
		    attachment.setName("ata-"+cone.ataId+".xlsx");
		    email.attach(attachment);
		    

			// adiciona uma imagem ao corpo da mensagem e retorna seu id
		    // embed the image and get the content id
		   // URL url = new URL("https://www.apache.org/images/asf_logo_wide.gif");
		    //String cid = email.embed(url, "Apache logo");

			// configura a mensagem para o formato HTML
		    email.setHtmlMsg("<html><table cellpadding=\"0\" cellspacing=\"10\" width=\"100%\" style=\" text-align: center; font-family: Cascadia Code Pl; color: #fff; border: none; font-size: 20px;\">\r\n"
		    		+ " <tr>\r\n"
		    		+ "  <td>\r\n"
		    		+ "    <img src=\"https://avatars.githubusercontent.com/u/70586794?s=200&v=4\" style=\"width: 10%;\"/>\r\n"
		    		+ "  </td>\r\n"
		    		+ " </tr>\r\n"
		    		+ " <tr>\r\n"
		    		+ "  <td style=\"padding: 20px 0 30px 0; background-color: #027efd;\">\r\n"
		    		+ "    Olá <big style=\"font-size: 30px;\">"+ cone.nomeReceber +"</big>! Aqui está a ata <i>"+cone.ataId+"</i>.\r\n"
		    		+ "    <br/>A ata está em anexo nesse documento!\r\n"
		    		+ "  </td>\r\n"
		    		+ " </tr>\r\n"
		    		+ " <tr>\r\n"
		    		+ "  <td style=\"padding: 20px 0 30px 0; background-color: #027efd;\">\r\n"
		    		+ "    <p>Você esta recebendo essa mensagem porque participou da ata <i>"+cone.ataId+"</i>.</p>\r\n"
		    		+ "  </td>\r\n"
		    		+ " </tr>\r\n"
		    		+" <tr>\r\n"
		    		+ "   <p>A ata está em anexo neste documento</p>\r\n"
		    		+ " </tr>"
		    		+ "</table></html>");

			// configure uma mensagem alternativa caso o servidor não suporte HTML
			email.setTextMsg("Seu servidor de e-mail não suporta mensagem HTML");

			// envia o e-mail
			email.send();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
}