package br.com.iacit.sisatas.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iacit.sisatas.models.UsuariosModel;
import br.com.iacit.sisatas.projections.UsuariosProjectionLogin;
import br.com.iacit.sisatas.projections.UsuariosProjectionPerfil;

public interface UsuariosRepository extends JpaRepository<UsuariosModel, String> {

	Boolean existsByusuId(long usuId);

	Boolean existsByusuEmail(String usuEmail);
	
	Boolean existsByusuConfirmationToken(String usuConfirmationToken);
	
	Boolean existsByusuSessionToken(String usuSessionToken);

	UsuariosModel findTopBy();
	
	UsuariosModel findByusuId(long usuId);
	
	UsuariosProjectionPerfil findByUsuId(long usuId);
	
	UsuariosModel findByusuEmail(String usuEmail);
	
	UsuariosModel findByusuConfirmationToken(String usuConfirmationToken);
	
	UsuariosProjectionLogin getByUsuEmailAndUsuSenha(String usuEmail, String usuSenha);
	
	UsuariosProjectionLogin getByusuSessionToken(String usuSessionToken);
	
	<T> List<T> findBy(Class<T> projection);

}
