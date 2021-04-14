package br.com.iacit.sisatas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iacit.sisatas.models.Revisoes;

public interface RevisoesRepository extends JpaRepository<Revisoes, String> {
	
	Revisoes findById(long id_revisao);
	
}