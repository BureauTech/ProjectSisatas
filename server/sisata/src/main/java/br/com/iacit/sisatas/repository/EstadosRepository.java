package br.com.iacit.sisatas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iacit.sisatas.models.EstadosModel;

public interface EstadosRepository extends JpaRepository<EstadosModel, String> {
	
	EstadosModel findByestId(long estId);
	
}
