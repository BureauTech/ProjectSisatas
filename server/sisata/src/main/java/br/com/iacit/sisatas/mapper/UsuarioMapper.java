package br.com.iacit.sisatas.mapper;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import br.com.iacit.sisatas.models.UsuariosModel;

public class UsuarioMapper {
	
	public static UsuariosModel converter(UsuariosModel pessoa, MultipartFile imagem) throws IOException {
		
		var usuarioBanco = new UsuariosModel();
		usuarioBanco.setUsuId(pessoa.getUsuId());
		usuarioBanco.setUsuAreaEmpresa(pessoa.getUsuAreaEmpresa());
		usuarioBanco.setUsuAssinatura(imagem.getBytes());
		usuarioBanco.setUsuCargo(pessoa.getUsuCargo());
		usuarioBanco.setUsuEmail(pessoa.getUsuEmail());
		usuarioBanco.setUsuNome(pessoa.getUsuNome());
		usuarioBanco.setUsuPerfil(pessoa.getUsuPerfil());
		usuarioBanco.setUsuTelefone(pessoa.getUsuTelefone());
		return usuarioBanco;
	}
	
}
