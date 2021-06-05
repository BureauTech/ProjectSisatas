package br.com.iacit.sisatas.projections;

public interface UsuariosProjectionPerfil {

	Long getUsuId();

	String getUsuNome();

	String getUsuAreaEmpresa();

	String getUsuTelefone();

	String getUsuEmail();

	String getUsuCargo();

	String getUsuPerfil();

	byte[] getUsuAssinatura();

}
