package br.com.iacit.sisatas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iacit.sisatas.models.Estados;

public interface EstadosRepository extends JpaRepository<Estados, String> {
	
	Estados findByestId(long estId);
	
}
