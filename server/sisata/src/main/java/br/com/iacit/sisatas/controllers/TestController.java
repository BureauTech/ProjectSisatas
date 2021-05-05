package br.com.iacit.sisatas.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/teste")
public class TestController {
	
	@GetMapping("/get")
	public String getTeste(){
		return "bom dia";
	}
	
	@PostMapping("/post")
	public String postTeste(@RequestParam String req) {
		return req;
	}
}
