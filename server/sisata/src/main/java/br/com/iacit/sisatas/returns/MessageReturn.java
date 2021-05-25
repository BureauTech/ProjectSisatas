package br.com.iacit.sisatas.returns;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@SuppressWarnings("hiding")
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(Include.NON_NULL)
public class MessageReturn<T> {

	private String operacao;
	private Boolean erro;
	private String mensagem;
	private List<?> dataList;
	private T data;
	
}
