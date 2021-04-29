package br.com.iacit.sisatas.mapper;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import br.com.iacit.sisatas.models.UsuariosModel;
import br.com.iacit.sisatas.models.UsuariosCadastrarControllerModel;

public class UsuarioMapper {
	
	public static UsuariosModel converter(UsuariosCadastrarControllerModel usuario, MultipartFile imagem) throws IOException {
		
		var usuarioBanco = new UsuariosModel();
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
