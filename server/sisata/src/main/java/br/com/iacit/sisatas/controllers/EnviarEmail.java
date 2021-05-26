package br.com.iacit.sisatas.controllers;


import br.com.iacit.sisatas.models.ConexaoEmail;
import br.com.iacit.sisatas.exports.EnvioEmail;

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

}
