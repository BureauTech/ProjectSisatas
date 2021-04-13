package br.com.iacit.sisatas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iacit.sisatas.models.Assuntos;

public interface AssuntosRepository extends JpaRepository<Assuntos, String> {
	
	Assuntos findById(long id_usuario);

}
