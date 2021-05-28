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
@RequestMapping("/envio-email")
public class EnviarEmail {
	
	@ResponseBody
	@RequestMapping(value = "/enviar", method = RequestMethod.POST, consumes = "application/json")
	public String enviarEmail(@RequestBody ConexaoEmail con) {
		//ConexaoEmail con = new ConexaoEmail();
		
		
		
		try {
			EnvioEmail.TestHtml(con);
		} catch (Exception e) {
			System.out.println(e);;
		}
		return "enviado";
	}
	
	
	@RequestMapping(value="/teste", method = RequestMethod.POST, consumes = "application/json")
	@ResponseBody
	public String teste(@RequestBody List<ConexaoEmail> con) {
		
//		for (int i=0; i<con.size();i++) {
//			con.get(i);
//			EnvioEmail.TestHtml(con.get(i));
//		}
		Runnable t1 = new Runnable() {

			@Override
			public void run() {
				for (int i=0; i<con.size();i++) {
					EnvioEmail.TestHtml(con.get(i));
				}

			}
		};
		new Thread(t1).start();
		return "pode ser que tenha ido";
	}
}
