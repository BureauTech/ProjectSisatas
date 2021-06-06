package br.com.iacit.sisatas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iacit.sisatas.models.AuthEmailModel;

public interface AuthEmailRespository extends JpaRepository<AuthEmailModel, String>{
	
	AuthEmailModel findByEmail(String email);
	
	AuthEmailModel findByEmailId(long id);
}
