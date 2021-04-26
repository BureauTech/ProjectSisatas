package br.com.iacit.sisatas.mapper;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import br.com.iacit.sisatas.models.Usuarios;
import br.com.iacit.sisatas.models.UsuariosControllerModel;

public class UsuarioMapper {
	
	public static Usuarios converter(UsuariosControllerModel usuario, MultipartFile imagem) throws IOException {
		
		var usuarioBanco = new Usuarios();
		usuarioBanco.setUsuAreaEmpresa(usuario.getUsuAreaEmpresa());
		usuarioBanco.setUsuAssinatura(imagem.getBytes());
		usuarioBanco.setUsuCargo(usuario.getUsuCargo());
		usuarioBanco.setUsuEmail(usuario.getUsuEmail());
		usuarioBanco.setUsuNome(usuario.getUsuNome());
		usuarioBanco.setUsuPerfil(usuario.getUsuPerfil());
		usuarioBanco.setUsuTelefone(usuario.getUsuTelefone());
		return usuarioBanco;
	}
	
}
