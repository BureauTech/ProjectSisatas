package br.com.iacit.sisatas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iacit.sisatas.models.Perfis;

public interface PerfisRepository extends JpaRepository<Perfis, String> {
	
	Perfis findById(long id_per);
	
}