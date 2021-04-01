package br.com.iacit.sisata;

import java.io.IOException;
import java.net.URISyntaxException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SisatasApplication {

	public static void main(String[] args) throws IOException, URISyntaxException {
		SpringApplication.run(SisatasApplication.class, args);
	}
}
