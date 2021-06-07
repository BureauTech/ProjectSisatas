package br.com.iacit.sisatas.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.iacit.sisatas.models.AprovacaoAtaId;
import br.com.iacit.sisatas.models.AprovacaoAtaModel;
import br.com.iacit.sisatas.models.AtasModel;
import br.com.iacit.sisatas.projections.AprovacaoAtaProjection;
import br.com.iacit.sisatas.projections.AtasProjectionRevisao;

public interface AprovacaoAtaRepository extends JpaRepository<AprovacaoAtaModel, AprovacaoAtaId> {

	List<AprovacaoAtaProjection> findAllProjectedBy();

	//List<AprovacaoAtaProjection> findByAtaReferencia(String ataId);
	
	// Boolean existsByataId(String ataId);

	// AtasProjectionRevisao findTopByOrderByAtaIdDesc();
	
	// // Utilizado tipo genérico, o tipo será definido ao chamar o método.
	// <T> List<T> findBy(Class<T> projection);

}
