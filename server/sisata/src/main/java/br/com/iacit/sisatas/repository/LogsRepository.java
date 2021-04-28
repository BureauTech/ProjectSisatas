package br.com.iacit.sisatas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iacit.sisatas.models.LogsModel;

public interface LogsRepository extends JpaRepository<LogsModel, String> {
	
	LogsModel findBylogId(long logId);

}
