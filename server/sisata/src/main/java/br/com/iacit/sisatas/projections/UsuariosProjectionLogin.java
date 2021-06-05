package br.com.iacit.sisatas.projections;

public interface UsuariosProjectionLogin {
	
	Long getUsuId();

	String getUsuNome();

	String getUsuEmail();

	String getUsuPerfil();
	
	String getUsuSessionToken();
}
