package br.com.iacit.sisatas.returns;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageReturn {

	private String operacao;
	private Boolean erro;
	private String mensagem;
	private List<?> data;
	
	
}
