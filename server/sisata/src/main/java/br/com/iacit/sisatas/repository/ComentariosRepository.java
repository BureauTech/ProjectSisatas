package br.com.iacit.sisatas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iacit.sisatas.models.ComentariosModel;

public interface ComentariosRepository extends JpaRepository<ComentariosModel, String> {
	
	ComentariosModel findBycomId(long comId);
	
}