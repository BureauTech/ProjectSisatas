package br.com.iacit.sisatas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iacit.sisatas.models.Usuarios;

public interface UsuariosRepository extends JpaRepository<Usuarios, String> {
	
	Usuarios findById(long id_usuario);
	
}
