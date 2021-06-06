package br.com.iacit.sisatas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.iacit.sisatas.models.AuthEmailModel;
import br.com.iacit.sisatas.repository.AuthEmailRespository;

@Controller
@RequestMapping("/authemail")
public class AuthEmailController {
	
	@Autowired
	private AuthEmailRespository ae;
	
	@ResponseBody
	@RequestMapping(value = "/cadastrarEmail", method = RequestMethod.POST, consumes = "application/json")
	public String cadastrarEmail(@RequestBody AuthEmailModel email) {
		String result = null;
		try {
			ae.save(email);
			result = "Email cadastrado com sucesso";
		} catch (DataAccessException e) {
			e.printStackTrace();
			result = e.getMessage();
		}
		return result;
	}
	
	
	@ResponseBody
	@RequestMapping(value = "/listarEmails", method = RequestMethod.GET)
	public List<AuthEmailModel> listarEmails() {
		List<AuthEmailModel> email = null;
		try {
			email = ae.findAll();
		} catch (DataAccessException e) {
			e.printStackTrace();
		}

		return email;
	}
	
	@ResponseBody
	@RequestMapping(value = "/pegarEmail", method = RequestMethod.GET)
	public AuthEmailModel pegarEmail() {
		AuthEmailModel email = null;
		try {
			email = ae.findByEmailId(1);
		} catch (DataAccessException e) {
			e.printStackTrace();
		}

		return email;
	}
}
