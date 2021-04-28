package br.com.iacit.sisatas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iacit.sisatas.models.UsuariosModel;

public interface UsuariosRepository extends JpaRepository<UsuariosModel, String> {

	UsuariosModel findByusuId(long usuId);
	
	Boolean existsByusuId(long usuId);
	
}
