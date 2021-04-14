package br.com.iacit.sisatas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iacit.sisatas.models.Atas;

public interface AtasRepository extends JpaRepository<Atas, String> {

	Atas findById(long id_ata);
	
}

