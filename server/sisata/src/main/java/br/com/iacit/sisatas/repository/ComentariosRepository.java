package br.com.iacit.sisatas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iacit.sisatas.models.Comentarios;

public interface ComentariosRepository extends JpaRepository<Comentarios, String> {
	
	Comentarios findBycomId(long comId);
	
}