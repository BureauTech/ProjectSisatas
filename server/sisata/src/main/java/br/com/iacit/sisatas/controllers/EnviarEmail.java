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
	
	
	//enviar email para os participantes da ata (revisao)
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
		
	
	
}
