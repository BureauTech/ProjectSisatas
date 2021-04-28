package br.com.iacit.sisatas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iacit.sisatas.models.AtasModel;

public interface AtasRepository extends JpaRepository<AtasModel, String> {

	AtasModel findByataId(long ataId);
	
	Boolean existsByataId(long ataId);
	
}

