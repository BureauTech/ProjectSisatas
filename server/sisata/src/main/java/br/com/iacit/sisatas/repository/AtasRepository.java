package br.com.iacit.sisatas.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iacit.sisatas.models.AtasModel;
import br.com.iacit.sisatas.projections.AtasProjectionExibir;
import br.com.iacit.sisatas.projections.AtasProjectionId;

public interface AtasRepository extends JpaRepository<AtasModel, String> {

	//AtasModel findByataId(String ataId);

	AtasProjectionExibir findByataId(String ataId);

	Boolean existsByataId(String ataId);

	AtasProjectionId findTopBy();

	AtasProjectionId findTopByOrderByAtaIdDesc();
	
	<T> List<T> findBy(Class<T> projection);

}
