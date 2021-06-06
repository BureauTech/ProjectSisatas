package br.com.iacit.sisatas.controllers;


import br.com.iacit.sisatas.models.AuthEmailModel;
import br.com.iacit.sisatas.models.ConexaoEmail;
import br.com.iacit.sisatas.repository.AuthEmailRespository;
//import mail.Config;
//import mail.Model;
import br.com.iacit.sisatas.exports.EnvioEmail;

import java.util.List;
import java.lang.Runnable;
import java.lang.Thread;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping("/email")
public class EnviarEmail {
	
	@Autowired
	private AuthEmailRespository ae;
	
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
        "ataProjeto": "",
         "idEmail" : ""
      }
]
	 * */
	@RequestMapping(value="/envioAtaEmail", method = RequestMethod.POST, consumes = "application/json")
	@ResponseBody
	public String NovaAta(@RequestBody List<ConexaoEmail> con) {
		//Thread para enviar os emails e nao travar o sistema
		Runnable t1 = new Runnable() {
			AuthEmailModel res = null;
			@Override
			public void run() {
				for (int i=0; i<con.size();i++) {
					try {
					//ae.findByEmailId(con.get(i).idEmail);
						res = ae.findByEmailId(con.get(i).idEmail);
						EnvioEmail.NovaAta(con.get(i), res.usuario, res.email, res.senha);
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
          "idEmail" : ""
    }
]
	 * */
		@RequestMapping(value="/novaRevisao", method = RequestMethod.POST, consumes = "application/json")
		@ResponseBody
		public String NovaRevisao(@RequestBody List<ConexaoEmail> con) {
			
			//Thread para enviar os emails e nao travar o sistema
			Runnable t1 = new Runnable() {
				AuthEmailModel resu = null;

				@Override
				public void run() {
					for (int i=0; i<con.size();i++) {
						try {
							resu = ae.findByEmailId(con.get(i).idEmail);
							System.out.println(resu);
							EnvioEmail.NovaRevisao(con.get(i), resu.usuario, resu.email, resu.senha);
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
		        "ataId": "",
          		"idEmail" : ""
			}
		   ]*/
		@RequestMapping(value="/novaAssunto", method = RequestMethod.POST, consumes = "application/json")
		@ResponseBody
		public String NovaAssunto(@RequestBody List<ConexaoEmail> con) {
			
			//Thread para enviar os emails e nao travar o sistema
			Runnable t1 = new Runnable() {
				AuthEmailModel res = null;

				@Override
				public void run() {
					for (int i=0; i<con.size();i++) {
						try {
							res = ae.findByEmailId(con.get(i).idEmail);
							EnvioEmail.NovoAssunto(con.get(i), res.usuario, res.email, res.senha);
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
		        "revisao": "",
          		"idEmail" : ""
		
		    }
		]*/
		@RequestMapping(value="/novoComentario", method = RequestMethod.POST, consumes = "application/json")
		@ResponseBody
		public String NovoComentario(@RequestBody List<ConexaoEmail> con) {
			
			//Thread para enviar os emails e nao travar o sistema
			Runnable t1 = new Runnable() {
				AuthEmailModel res = null;

				@Override
				public void run() {
					for (int i=0; i<con.size();i++) {
						try {
							res = ae.findByEmailId(con.get(i).idEmail);
							EnvioEmail.NovoComentario(con.get(i), res.usuario, res.email, res.senha);
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
		        "ataId": "",
          		"idEmail" : ""
	
		    }
		]*/
		@RequestMapping(value="/participanteAta", method = RequestMethod.POST, consumes = "application/json")
		@ResponseBody
		public String ParticipanteAta(@RequestBody List<ConexaoEmail> con) {
			
			//Thread para enviar os emails e nao travar o sistema
			Runnable t1 = new Runnable() {
				AuthEmailModel res = null;

				@Override
				public void run() {
					for (int i=0; i<con.size();i++) {
						try {
							res = ae.findByEmailId(con.get(i).idEmail);
							EnvioEmail.ParticipanteAta(con.get(i), res.usuario, res.email, res.senha);
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
		        "nomeReceber": "",
          		"idEmail" : ""
		
		
		    }
		]*/
		@RequestMapping(value="/senhaAlterada", method = RequestMethod.POST, consumes = "application/json")
		@ResponseBody
		public String SenhaAlterada(@RequestBody List<ConexaoEmail> con) {
			
			//Thread para enviar os emails e nao travar o sistema
			Runnable t1 = new Runnable() {
				AuthEmailModel res = null;

				@Override
				public void run() {
					for (int i=0; i<con.size();i++) {
						try {
							res = ae.findByEmailId(con.get(i).idEmail);
							EnvioEmail.SenhaAlterada(con.get(i), res.usuario, res.email, res.senha);
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
		        
		        "linkSenha" : "",
          		"idEmail" : ""
		
		
		    }
		]
		 * */
		@RequestMapping(value="/usuarioCadastrado", method = RequestMethod.POST, consumes = "application/json")
		@ResponseBody
		public String UsuarioCadastrado(@RequestBody List<ConexaoEmail> con) {
			
			//Thread para enviar os emails e nao travar o sistema
			Runnable t1 = new Runnable() {
				AuthEmailModel res = null;

				@Override
				public void run() {
					for (int i=0; i<con.size();i++) {
						try {
							res = ae.findByEmailId(con.get(i).idEmail);
							EnvioEmail.UsuarioCadastrado(con.get(i), res.usuario, res.email, res.senha);
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
				AuthEmailModel res = null;

				@Override
				public void run() {
					for (int i=0; i<con.size();i++) {
						try {
							res = ae.findByEmailId(con.get(i).idEmail);
							EnvioEmail.EsqueciSenha(con.get(i), res.usuario, res.email, res.senha);
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
