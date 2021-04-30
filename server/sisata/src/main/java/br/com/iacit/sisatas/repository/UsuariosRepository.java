package br.com.iacit.sisatas.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iacit.sisatas.models.UsuariosModel;

public interface UsuariosRepository extends JpaRepository<UsuariosModel, String> {

	UsuariosModel findByusuId(long usuId);

	Boolean existsByusuId(long usuId);

	Boolean existsByusuEmail(String usuEmail);

	<T> List<T> findBy(Class<T> projection);

}
