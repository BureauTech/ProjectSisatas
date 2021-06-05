package br.com.iacit.sisatas.projections;

public interface UsuariosProjectionLogin {
	
	long getUsuId();

	String getUsuNome();

	String getUsuEmail();

	String getUsuPerfil();
	
	String getUsuSessionToken();
}
