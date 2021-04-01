package br.com.iacit.sisata.DAO.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.iacit.sisata.DAO.models.Users;

public interface UsersRepository extends CrudRepository<Users, String> {
	
	Users findById(int id);
}
