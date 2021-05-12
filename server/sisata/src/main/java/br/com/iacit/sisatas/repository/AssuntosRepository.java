package br.com.iacit.sisatas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iacit.sisatas.models.AssuntosModel;

public interface AssuntosRepository extends JpaRepository<AssuntosModel, String> {
	
	AssuntosModel findByassId(long assId);

}
