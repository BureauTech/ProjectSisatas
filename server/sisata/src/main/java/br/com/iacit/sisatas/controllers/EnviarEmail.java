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
	
	@RequestMapping(value="/envioAtaEmail", method = RequestMethod.POST, consumes = "application/json")
	@ResponseBody
	public String teste(@RequestBody List<ConexaoEmail> con) {
		
		//Thread para enviar os emails e nao travar o sistema
		Runnable t1 = new Runnable() {

			@Override
			public void run() {
				for (int i=0; i<con.size();i++) {
					EnvioEmail.TestHtml(con.get(i));
				}

			}
		};
		new Thread(t1).start();
		//alteracao futura
		return "pode ser que tenha ido";
	}
}
