package br.com.iacit.sisata.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.iacit.sisata.models.Users;

public interface UsersRepository extends CrudRepository<Users, String> {
	
	Users findById(int id);
}
