package br.com.iacit.sisatas.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.iacit.sisatas.models.Usuarios;

public interface UsuariosRepository extends JpaRepository<Usuarios, String> {
	
	Usuarios findByusuId(long usuId);
	
	//@Query("SELECT u FROM usuarios u WHERE u.usu_nome LIKE %:name%")
	//List<Usuarios> searchByNameLike(@Param("name") String nome);
	List<Usuarios> searchByusuNomeLike(String usuNome);
	
	/*
	 * @Query("SELECT u FROM usuarios u WHERE u.usu_area_empresa LIKE %:companyArea%"
	 * ) List<Usuarios> searchByCompanyAsreaLike(@Param("companyArea") String
	 * areaEmpresa);
	 */
	
	/*
	 * @Query("SELECT u FROM usuarios u WHERE u.usu_email LIKE %:email%")
	 * List<Usuarios> searchByEmailLike(@Param("email") String email);
	 */
}
