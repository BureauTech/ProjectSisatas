package br.com.iacit.sisatas.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iacit.sisatas.models.AtasModel;
import br.com.iacit.sisatas.models.RevisoesModel;
import br.com.iacit.sisatas.projections.RevisoesProjection;

public interface RevisoesRepository extends JpaRepository<RevisoesModel, String> {
	
	RevisoesModel findByrevId(long revId);
	
	RevisoesModel findBycontemRevisoes(AtasModel Ata);

	List<RevisoesProjection> findAllProjectedBy();
	
}