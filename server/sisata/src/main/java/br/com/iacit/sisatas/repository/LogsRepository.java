package br.com.iacit.sisatas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iacit.sisatas.models.Logs;

public interface LogsRepository extends JpaRepository<Logs, String> {
	
	Logs findById(long id_log);

}
