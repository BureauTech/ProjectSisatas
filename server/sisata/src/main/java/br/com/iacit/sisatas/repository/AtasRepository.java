package br.com.iacit.sisatas.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iacit.sisatas.models.AtasModel;
import br.com.iacit.sisatas.projections.AtasProjectionExibir;
import br.com.iacit.sisatas.projections.AtasProjectionRevisao;

public interface AtasRepository extends JpaRepository<AtasModel, String> {
	
	// Utilizado tipo genérico, o tipo será definido ao chamar o método.
	//<T> T findByataId(String ataId);

	AtasProjectionExibir findByataId(String ataId);
	
	Boolean existsByataId(String ataId);

	AtasProjectionRevisao findTopByOrderByAtaIdDesc();
	
	// Utilizado tipo genérico, o tipo será definido ao chamar o método.
	<T> List<T> findBy(Class<T> projection);

}
