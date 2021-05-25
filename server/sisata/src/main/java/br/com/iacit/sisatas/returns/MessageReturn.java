package br.com.iacit.sisatas.returns;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(Include.NON_NULL)
public class MessageReturn<T> {

	private String operacao;
	private Boolean erro;
	private String mensagem;
	private T data;
	
}
