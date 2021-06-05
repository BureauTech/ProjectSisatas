package br.com.iacit.sisatas.controllers;


import br.com.iacit.sisatas.models.ConexaoEmail;
//import mail.Config;
//import mail.Model;
import br.com.iacit.sisatas.exports.EnvioEmail;

import java.util.List;
import java.lang.Runnable;
import java.lang.Thread;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping("/email")
public class EnviarEmail {
	
	//enviar email para os participantes da ata
	/*
	 * enviar esse body
	 * body = [
    {
        "userEnviar": "",
        "senhaEnviar": "",
        "emailEnviar": "",
        "nomeEnviar": "",
        "emailReceber": "",
        "nomeReceber": "",
        "ataId": "",
        "linkDown": "http://localhost:8080/download/ata/excel/{ataid}",
        "ataProjeto": ""
      }
]
	 * */
	@RequestMapping(value="/envioAtaEmail", method = RequestMethod.POST, consumes = "application/json")
	@ResponseBody
	public String NovaAta(@RequestBody List<ConexaoEmail> con) {
		
		//Thread para enviar os emails e nao travar o sistema
		Runnable t1 = new Runnable() {

			@Override
			public void run() {
				for (int i=0; i<con.size();i++) {
					try {
					EnvioEmail.NovaAta(con.get(i));
					}
					catch (Exception e) {
						System.out.println(e);
					}
				}

			}
		};
		new Thread(t1).start();
		//alteracao futura
		return "pode ser que tenha ido";
	}
	
	
	///novaRevisao
	/*Enviar esse body
	 * body = [
    {
        "userEnviar": "",
        "senhaEnviar": "",
        "emailEnviar": "",
        "nomeEnviar": "",
        "emailReceber": "",
        "nomeReceber": "",

        "ataProjeto": "",
    }
]
	 * */
		@RequestMapping(value="/novaRevisao", method = RequestMethod.POST, consumes = "application/json")
		@ResponseBody
		public String NovaRevisao(@RequestBody List<ConexaoEmail> con) {
			
			//Thread para enviar os emails e nao travar o sistema
			Runnable t1 = new Runnable() {

				@Override
				public void run() {
					for (int i=0; i<con.size();i++) {
						try {
						EnvioEmail.NovaRevisao(con.get(i));
						}
						catch (Exception e) {
							System.out.println(e);
						}
					}

				}
			};
			new Thread(t1).start();
			//alteracao futura
			return "pode ser que tenha ido";
		}
		
		/* novaAssunto
		 * body = {
		 * [
		    {
		        "userEnviar": "",
		        "senhaEnviar": "",
		        "emailEnviar": "",
		        "nomeEnviar": "",
		        "emailReceber": "",
		        "nomeReceber": "",
		
		        "ataProjeto": "",
		        "assunto": "",
		        "ataId": ""
			}
		   ]*/
		@RequestMapping(value="/novaAssunto", method = RequestMethod.POST, consumes = "application/json")
		@ResponseBody
		public String NovaAssunto(@RequestBody List<ConexaoEmail> con) {
			
			//Thread para enviar os emails e nao travar o sistema
			Runnable t1 = new Runnable() {

				@Override
				public void run() {
					for (int i=0; i<con.size();i++) {
						try {
						EnvioEmail.NovoAssunto(con.get(i));
						}
						catch (Exception e) {
							System.out.println(e);
						}
					}

				}
			};
			new Thread(t1).start();
			//alteracao futura
			return "pode ser que tenha ido";
		}
		
		
		//novoComentario
		/*
		 * body = [
		    {
		        "userEnviar": "",
		        "senhaEnviar": "",
		        "emailEnviar": "",
		        "nomeEnviar": "",
		        "emailReceber": "",
		        "nomeReceber": "",
		
		        "ataProjeto": "",
		        "comentario": "",
		        "revisao": ""
		
		    }
		]*/
		@RequestMapping(value="/novoComentario", method = RequestMethod.POST, consumes = "application/json")
		@ResponseBody
		public String NovoComentario(@RequestBody List<ConexaoEmail> con) {
			
			//Thread para enviar os emails e nao travar o sistema
			Runnable t1 = new Runnable() {

				@Override
				public void run() {
					for (int i=0; i<con.size();i++) {
						try {
						EnvioEmail.NovoComentario(con.get(i));
						}
						catch (Exception e) {
							System.out.println(e);
						}
					}

				}
			};
			new Thread(t1).start();
			//alteracao futura
			return "pode ser que tenha ido";
		}
		
		
		//participanteAta
		/* enviar esse body
		 * body = [
		    {
		        "userEnviar": "",
		        "senhaEnviar": "",
		        "emailEnviar": "",
		        "nomeEnviar": "",
		        "emailReceber": "",
		        "nomeReceber": "",
		
		        "ataProjeto": "",
		        "ataId": ""
	
		    }
		]*/
		@RequestMapping(value="/participanteAta", method = RequestMethod.POST, consumes = "application/json")
		@ResponseBody
		public String ParticipanteAta(@RequestBody List<ConexaoEmail> con) {
			
			//Thread para enviar os emails e nao travar o sistema
			Runnable t1 = new Runnable() {

				@Override
				public void run() {
					for (int i=0; i<con.size();i++) {
						try {
						EnvioEmail.ParticipanteAta(con.get(i));
						}
						catch (Exception e) {
							System.out.println(e);
						}
					}

				}
			};
			new Thread(t1).start();
			//alteracao futura
			return "pode ser que tenha ido";
		}
		
		
		/*/senhaAlterada
		 * enviar esse body
		*body = [
		    {
		        "userEnviar": "",
		        "senhaEnviar": "",
		        "emailEnviar": "",
		        "nomeEnviar": "",
		        "emailReceber": "",
		        "nomeReceber": ""
		
		
		    }
		]*/
		@RequestMapping(value="/senhaAlterada", method = RequestMethod.POST, consumes = "application/json")
		@ResponseBody
		public String SenhaAlterada(@RequestBody List<ConexaoEmail> con) {
			
			//Thread para enviar os emails e nao travar o sistema
			Runnable t1 = new Runnable() {

				@Override
				public void run() {
					for (int i=0; i<con.size();i++) {
						try {
						EnvioEmail.SenhaAlterada(con.get(i));
						}
						catch (Exception e) {
							System.out.println(e);
						}
					}

				}
			};
			new Thread(t1).start();
			//alteracao futura
			return "pode ser que tenha ido";
		}
		
		/*/usuarioCadastrado
		 * enviar esse body
		 * [
		    {
		        "userEnviar": "",
		        "senhaEnviar": "",
		        "emailEnviar": "",
		        "nomeEnviar": "",
		        "emailReceber": "",
		        "nomeReceber": "",
		        
		        "linkSenha" : ""
		
		
		    }
		]
		 * */
		@RequestMapping(value="/usuarioCadastrado", method = RequestMethod.POST, consumes = "application/json")
		@ResponseBody
		public String UsuarioCadastrado(@RequestBody List<ConexaoEmail> con) {
			
			//Thread para enviar os emails e nao travar o sistema
			Runnable t1 = new Runnable() {

				@Override
				public void run() {
					for (int i=0; i<con.size();i++) {
						try {
						EnvioEmail.UsuarioCadastrado(con.get(i));
						}
						catch (Exception e) {
							System.out.println(e);
						}
					}

				}
			};
			new Thread(t1).start();
			//alteracao futura
			return "pode ser que tenha ido";
		}
		
		
		@RequestMapping(value="/esqueciSenha", method = RequestMethod.POST, consumes = "application/json")
		@ResponseBody
		public String EsqueciSenha(@RequestBody List<ConexaoEmail> con) {
			
			//Thread para enviar os emails e nao travar o sistema
			Runnable t1 = new Runnable() {

				@Override
				public void run() {
					for (int i=0; i<con.size();i++) {
						try {
						EnvioEmail.EsqueciSenha(con.get(i));
						}
						catch (Exception e) {
							System.out.println(e);
						}
					}

				}
			};
			new Thread(t1).start();
			//alteracao futura
			return "pode ser que tenha ido";
		}
		
	
	
}
