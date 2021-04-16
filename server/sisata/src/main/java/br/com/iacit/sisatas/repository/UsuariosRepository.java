package br.com.iacit.sisatas.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iacit.sisatas.models.Usuarios;

public interface UsuariosRepository extends JpaRepository<Usuarios, String> {

	Usuarios findByusuId(long usuId);

	List<Usuarios> searchByusuNomeContainingIgnoreCase(String usuNome);

	List<Usuarios> searchByusuAreaEmpresaContainingIgnoreCase( String usuAreaEmpresa);

	List<Usuarios> searchByusuEmailContainingIgnoreCase( String usuEmail);
	
}
